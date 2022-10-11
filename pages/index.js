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
    profileAddButton

} from "../scripts/utils/constants.js";

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-51/',
    headers: {
        authorization: '9c349439-3a63-4974-81ef-898d0370b2c4',
        'Content-Type': 'application/json'
    }
});

// get cards
const initialCards = api.getInitialCards();
initialCards
    .then((res) => {
        res.forEach((item) => {
            const card = createCard(item);
            const cardElement = card.generateCard();
            section.addItem(cardElement)
        })
    })
    .catch(err => console.log('Ошибка', err))

const section = new Section({}, elementsSelector);


// добавляем информацию о пользователе
const userInfo = new UserInfo({ usersNameSelector: profileNameSelector, usersJobSelector: profileJobSelector });
const serverUserInfo = api.getUserInfo();
serverUserInfo
    .then((res) => userInfo.setUserInfo(res.name, res.about))
    .catch(err => console.log(err))


const popupAddValidator = new FormValidator(validationSettings, popupAdd);

const popupProfileValidator = new FormValidator(validationSettings, popupProfile);

const popupWithImage = new PopupWithImage(popupPhotoSelector);


// добавление новой карточки
const popupAddForm = new PopupWithForm(popupAddSelector, (item) => {
    api.addCard(item)
    .then((res) => {
        const card = createCard(res);
        const cardElement = card.generateCard();
        section.addItem(cardElement)
    })
    .catch(err => console.log(err))
});
popupAddValidator.enableValidation();


const popupProfileForm = new PopupWithForm(popupProfileSelector, (inputsInfo) => {
    userInfo.setUserInfo(inputsInfo.name, inputsInfo.job);
});
popupProfileValidator.enableValidation();

// открытие попапа удаления карточки




function createCard(item) {
    const card = new Card(item, '.element-template', popupWithImage.open.bind(popupWithImage));
    return card;
}

//                                    Листнеры

popupWithImage.setEventListeners();
popupAddForm.setEventListeners();
popupProfileForm.setEventListeners();


profileEditButton.addEventListener('click', function () {
    popupProfileValidator.resetErrorInput();
    const userInfoData = userInfo.getUserInfo();
    popupProfileForm.open(userInfoData);
});

profileAddButton.addEventListener('click', function () {
    popupAddValidator.resetErrorInput();
    popupAddForm.open();
});





