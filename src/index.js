import './index.css';
import { initialCards } from "../scripts/utils/initialCards.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
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
} from "../scripts/utils/constants.js";


const popupAddValidator = new FormValidator(validationSettings, popupAdd);

const popupProfileValidator = new FormValidator(validationSettings, popupProfile);

const userInfo = new UserInfo({ usersNameSelector: profileNameSelector, usersJobSelector: profileJobSelector });

const popupWithImage = new PopupWithImage(popupPhotoSelector);

const popupAddForm = new PopupWithForm(popupAddSelector, (item) => {
    const card = createCard(item);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
});
popupAddValidator.enableValidation();

const popupProfileForm = new PopupWithForm(popupProfileSelector, (inputsInfo) => {
    userInfo.setUserInfo(inputsInfo.name, inputsInfo.job);
});
popupProfileValidator.enableValidation();

const section = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        return card.generateCard();
    }
}, elementsSelector);
section.renderItems();


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





