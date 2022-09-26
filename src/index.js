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
    elements
} from "../scripts/utils/constants.js";


const popupAddValidator = new FormValidator(validationSettings, popupAdd);

const popupProfileValidator = new FormValidator(validationSettings, popupProfile);

const userInfo = new UserInfo({ usersNameSelector: profileNameSelector, usersJobSelector: profileJobSelector });

const popupWithImage = new PopupWithImage(popupPhotoSelector);

const popupAddForm = new PopupWithForm(popupAddSelector, (item) => {
    const addCard = new Card(item, '.element-template', popupWithImage);
    elements.prepend(addCard.generateCard());
});

const popupProfileForm = new PopupWithForm(popupProfileSelector, (inputsInfo) => {
    userInfo.setUserInfo(inputsInfo.name, inputsInfo.job);
});

const section = new Section({
    items: initialCards,
    renderer: (item) => {
    
        const card = new Card(item, '.element-template', popupWithImage);
        return card.generateCard();
    }
}, elementsSelector);
section.renderItems();


//                                    Листнеры

popupWithImage.setEventListeners();
popupAddForm.setEventListeners();
popupProfileForm.setEventListeners();

profileEditButton.addEventListener('click', function () {
    popupProfileValidator.enableValidation();
    popupProfileValidator.resetErrorInput();
    const userInfoData = userInfo.getUserInfo();
    popupProfileForm.openPopup(userInfoData);
});

profileAddButton.addEventListener('click', function () {
    popupAddValidator.enableValidation();
    popupAddValidator.resetErrorInput();
    popupAddForm.openPopup();
});







