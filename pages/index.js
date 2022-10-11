import './index.css';
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Api } from '../scripts/components/Api';

import {
    popupAddSelector,
    popupProfile,
    popupAdd,
    popupProfileSelector,
    profileNameSelector,
    profileJobSelector,
    validationSettings,
    elementsSelector,
    popupPhotoSelector,
    profileEditButton,
    profileAddButton,
    avatarUpdateSelector,
    usersAvatarSelector,
    popupUpdateAvatar,
    avatarUpdateButton

} from "../scripts/utils/constants.js";

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-51/',
    headers: {
        authorization: '9c349439-3a63-4974-81ef-898d0370b2c4',
        'Content-Type': 'application/json'
    }
});


const section = new Section({
    renderer: (item) => {
        const card = createCard(item);
        return card.generateCard();
    }
}, elementsSelector);


//                                  добавляем информацию о пользователе

const userInfo = new UserInfo({ usersNameSelector: profileNameSelector, usersJobSelector: profileJobSelector, usersAvatarSelector:  usersAvatarSelector});


//                                получение данных

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then((values) => {
        const userData = values[1];
        userInfo.id = userData._id;
        userInfo.setUserInfo(userData.name, userData.about);
        userInfo.setAvatar(userData.avatar);

        const cards = values[0];
        section.renderItems(cards);
    })
    .catch(err => console.log('Ошибка', err));



const popupAddValidator = new FormValidator(validationSettings, popupAdd);
const popupProfileValidator = new FormValidator(validationSettings, popupProfile);
const popupAvatarValidator = new FormValidator(validationSettings, popupUpdateAvatar);

const popupWithImage = new PopupWithImage(popupPhotoSelector);


//                                               добавление новой карточки

const popupAddForm = new PopupWithForm(popupAddSelector, (item) => {
    api.addCard(item)
        .then((res) => section.renderItem(res))
        .catch(err => console.log('Ошибка', err))
});
popupAddValidator.enableValidation();


const popupProfileForm = new PopupWithForm(popupProfileSelector, (inputsInfo) => {
    userInfo.setUserInfo(inputsInfo.name, inputsInfo.job);
});
popupProfileValidator.enableValidation();

//                                              открытие попапа обновления аватара

const updateUsersAvatar = new PopupWithForm(avatarUpdateSelector, (item) => {
    api.updateAvatar(item.link)
    .then(() => {
        userInfo.setAvatar(item.link)
    })
    .catch(err => console.log('Ошибка', err));
})
popupAvatarValidator.enableValidation();



function createCard(item) {
    const card = new Card(
        item,
        '.element-template',
        popupWithImage.open.bind(popupWithImage),
        userInfo.id,
        (cardId) => {
            api
            .setLike(cardId)
            .catch(err => console.log('Ошибка при установке лайка', err));
         },
        (cardId) => {
            api
            .removeLike(cardId)
            .catch(err => console.log('Ошибка при удалении лайка', err));
         },
        (cardId) => { 
            api
            .deleteCard(cardId)
            .catch(err => console.log('Ошибка при удалении карточки', err));
        },
    );
    return card;
}

//                                    Листнеры

popupWithImage.setEventListeners();
popupAddForm.setEventListeners();
popupProfileForm.setEventListeners();
updateUsersAvatar.setEventListeners();


profileEditButton.addEventListener('click', function () {
    popupProfileValidator.resetErrorInput();
    const userInfoData = userInfo.getUserInfo();
    popupProfileForm.open(userInfoData);
});

profileAddButton.addEventListener('click', function () {
    popupAddValidator.resetErrorInput();
    popupAddForm.open();
});

avatarUpdateButton.addEventListener('click', function () {
    popupAvatarValidator.resetErrorInput();
    updateUsersAvatar.open();
})
