import { initialCards } from "./initialCards.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
const formProfileElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButtons = document.querySelectorAll('.popup__button_type_close');
const popupProfile = document.querySelector('.popup');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const titleInput = document.querySelector('.popup__item_type_title');
const placeInput = document.querySelector('.popup__item_type_place');
const popupCreateButton = document.querySelector('.popup__button_type_create');
const elements = document.querySelector('.elements');
const photoCloseButton = document.querySelector('.popup-photo__button-close');
const popupPhoto = document.querySelector('.popup-photo');
const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__item-error_active'
}
const popupAddValidator = new FormValidator(validationSettings, popupAdd);
const popupProfileValidator = new FormValidator(validationSettings, popupProfile);




//                                  Карточки 


initialCards.forEach((item) => {
    const card = makeCard(item);
    addCard(card, elements);
});

function addCard(card, container) {
    container.prepend(card);
};



//                                     Функции


function openPopup(popup) {
    popup.classList.add('popup-opened');
    document.addEventListener('keydown', keyHandler);
    popup.addEventListener('mousedown', clickHandler);
    popupProfileValidator.resetErrorInput();
    popupAddValidator.resetErrorInput();
}

function closePopup(popup) {
    popup.classList.remove('popup-opened');
    document.removeEventListener('keydown', keyHandler);
    popup.removeEventListener('mousedown', clickHandler);
}

function submitProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function submitProfileFormCard(evt) {
    evt.preventDefault();
    const item = {
        name: titleInput.value,
        link: placeInput.value
    };
    const card = makeCard(item);
    addCard(card, elements);
    closePopup(popupAdd);
}


function clickHandler(evt) {
    if (evt.target.classList.contains('all-popup')) {
        closePopup(evt.target);
    }
}

function keyHandler(evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector('.popup-opened');
        closePopup(popup);
    }
}

function makeCard(item) {
    const card = new Card(item, '.element-template', openPopup);
    return card.generateCard();
}

//                                    Листнеры

formProfileElement.addEventListener('submit', submitProfileForm);
profileEditButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupProfileValidator.enableValidation();
    openPopup(popupProfile);
});
popupCloseButtons.forEach((popupCloseButton) => {
    popupCloseButton.addEventListener('click', function () {
        closePopup(popupProfile);
        closePopup(popupAdd);
    });
})

profileAddButton.addEventListener('click', function () {
    titleInput.value = '';
    placeInput.value = '';
    popupAddValidator.enableValidation();
    openPopup(popupAdd);
});
popupCreateButton.addEventListener('click', submitProfileFormCard);


photoCloseButton.addEventListener('click', function () {
    closePopup(popupPhoto);
});





