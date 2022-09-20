import { initialCards } from "../utils/initialCards.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
// import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js"; 



import { popupAddSelector, popupProfile, popupAdd, popupProfileSelector, popupPhoto, popupContainer } from "../utils/constants.js";
import { PopupWithForm } from "../components/PopupWithForm.js";

const popupAddValidator = new FormValidator(validationSettings, popupAdd);
const popupProfileValidator = new FormValidator(validationSettings, popupProfile);
const popupAddForm = new Popup(popupAddSelector);
const popupProfileForm = new Popup(popupProfileSelector);




//                                  Карточки 


initialCards.forEach((item) => {
    const card = makeCard(item);
    addCard(card, elements);
});

function addCard(card, container) {
    container.prepend(card);
};



//                                     Функции

const popupWithForm = new PopupWithForm(validationSettings.formSelector, )

function submitProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupProfileForm.closePopup();
}

function submitProfileFormCard(evt) {
    evt.preventDefault();
    const item = {
        name: titleInput.value,
        link: placeInput.value
    };
    //initialCards.push(item);
    //section.renderItems;
    const card = makeCard(item);
    addCard(card, elements);
    popupAddForm.closePopup();
}



const section = new Section({items: initialCards, renderer: makeCard}, elements);
section.renderItems();


function makeCard(item) {
    const popup = new PopupWithImage(popupPhotoSelector, item.name, item.link);
    const card = new Card(item, '.element-template', popup);
    section.addItem(item);
    return card.generateCard();
}

//                                    Листнеры

formProfileElement.addEventListener('submit', submitProfileForm);
profileEditButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupProfileValidator.enableValidation();
    popupProfileValidator.resetErrorInput();
    popupProfileForm.openPopup();
});


profileAddButton.addEventListener('click', function () {
    titleInput.value = '';
    placeInput.value = '';
    popupAddValidator.enableValidation();
    popupAddValidator.resetErrorInput();
    popupAddForm.openPopup();
});
popupCreateButton.addEventListener('click', submitProfileFormCard);







