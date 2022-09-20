import { initialCards } from "../utils/initialCards.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";



import {
    popupAddSelector,
    popupProfile,
    popupAdd,
    popupProfileSelector,
    profileName,
    profileJob,
    validationSettings,
    elements,
    popupPhotoSelector,
    profileEditButton,
    profileAddButton
} from "../utils/constants.js";


const popupAddValidator = new FormValidator(validationSettings, popupAdd);
const popupProfileValidator = new FormValidator(validationSettings, popupProfile);
const popupAddForm = new PopupWithForm(popupAddSelector, (inputsInfo) => {
    section.addItem(inputsInfo);
    section.renderItems();
});
const popupProfileForm = new PopupWithForm(popupProfileSelector, (inputsInfo) => {
    userInfo.setUserInfo(inputsInfo.name, inputsInfo.job);
});
const userInfo = new UserInfo({ profileName, profileJob });




const section = new Section({
    items: initialCards,
    renderer: (item) => {
        const popup = new PopupWithImage(popupPhotoSelector, item.name, item.link);
        const card = new Card(item, '.element-template', popup);
        section.addItem(item);
        return card.generateCard();
    }
}, elements);
section.renderItems();





//                                    Листнеры

profileEditButton.addEventListener('click', function () {
    popupProfileValidator.enableValidation();
    popupProfileValidator.resetErrorInput();
    popupProfileForm.openPopup();
});


profileAddButton.addEventListener('click', function () {
    popupAddValidator.enableValidation();
    popupAddValidator.resetErrorInput();
    popupAddForm.openPopup();
});







