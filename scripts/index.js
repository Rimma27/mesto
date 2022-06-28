let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button_type_close');
let popup = document.querySelector('.popup');
let addButton = document.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup-add');
const titleInput = document.querySelector('.popup-add__item_type_title');
let placeInput = document.querySelector('.popup-add__item_type_place');
let createButton = document.querySelector('.popup-add__button_type_create');
let closeAddButton = document.querySelector('.popup-add__button_type_close');
const popupPhoto = document.querySelector('#popup-photo');


//                                  Карточки 
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elementTemplate = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements');
 
function addCard(item){
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    element.querySelector('.element__title').textContent = item.name;
    elements.prepend(element);
    element.querySelector('.element__basket').addEventListener('click', function () {
        element.remove();
    });
    element.querySelector('.element__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('element__like_active');
    })

};

initialCards.forEach(function (item) {
    addCard(item);
});



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

function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    addCard({
        name: titleInput.value,
        link: placeInput.value
    });
    closePopupAdd();
}


//                                    Листнеры

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
addButton.addEventListener('click', openPopupAdd);
createButton.addEventListener('click', formSubmitHandlerCard);
closeAddButton.addEventListener('click', closePopupAdd);
