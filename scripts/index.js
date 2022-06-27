let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button_type_close');
let popup = document.querySelector('.popup');
let addButton = document.querySelector('.profile__add-button');
/*let likeButton = document.querySelector('.element__like');*/
let popupAdd = document.querySelector('.popup-add');
let placeInput = document.querySelector('.popup-add__item_type_place');
let createButton = document.querySelector('.popup-add__button_type_create');
let closeAddButton = document.querySelector('.popup-add__button_type_close');


//                                     Функции

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function openPopupAdd() {
    popupAdd.classList.add('popup-add_opened');
    nameInput.value = '';
    placeInput.value = '';
}

function closePopupAdd() {
    popupAdd.classList.remove('popup-add_opened');
}




//                                    Листнеры

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
addButton.addEventListener('click', openPopupAdd);
createButton.addEventListener('click', closePopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);
/*likeButton.addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like_active');
});*/