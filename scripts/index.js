const formProfileElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__button_type_close');
const popupProfile = document.querySelector('.popup');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const titleInput = document.querySelector('.popup-add__item_type_title');
const placeInput = document.querySelector('.popup-add__item_type_place');
const popupCreateButton = document.querySelector('.popup-add__button_type_create');
const popupAddCloseButton = document.querySelector('.popup-add__button_type_close');
const elements = document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup-photo');
const PhotoCloseButton = document.querySelector('.popup-photo__button-close');



//                                  Карточки 

function createCard(item) {
    const elementTemplate = document.querySelector('#element-template').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const imageElement = element.querySelector('.element__image');
    imageElement.src = item.link;
    imageElement.alt = item.name;
    element.querySelector('.element__title').textContent = item.name;

    element.querySelector('.element__basket').addEventListener('click', function () {
        element.remove();
    });
    element.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    element.querySelector('.element__button-image').addEventListener('click', function () {
        popupPhoto.classList.add('popup-photo_opened');
        popupPhoto.querySelector('.popup-photo__image').src = item.link;
        popupPhoto.querySelector('.popup-photo__name').textContent = item.name;
    });

    return element;
};

initialCards.forEach(function (item) {
    const result = createCard(item);
    addCard(result, elements);
});

function addCard(card, container){
    container.prepend(card);
}


//                                     Функции

function submitProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

function openPopup() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popupProfile.classList.remove('popup_opened');
}

function openPopupAdd() {
    popupAdd.classList.add('popup-add_opened');
    titleInput.value = '';
    placeInput.value = '';
}

function closePopupAdd() {
    popupAdd.classList.remove('popup-add_opened');
}




function submitProfileFormCard(evt) {
    evt.preventDefault();
    const item = {
        name: titleInput.value,
        link: placeInput.value
    };
    const result = createCard(item);
    addCard(result, elements);
    closePopupAdd();
}

function closePopupPhoto() {
    popupPhoto.classList.remove('popup-photo_opened');
}


//                                    Листнеры

formProfileElement.addEventListener('submit', submitProfileForm);
profileEditButton.addEventListener('click', openPopup);
profileCloseButton.addEventListener('click', closePopup);
profileAddButton.addEventListener('click', openPopupAdd);
popupCreateButton.addEventListener('click', submitProfileFormCard);
popupAddCloseButton.addEventListener('click', closePopupAdd);
PhotoCloseButton.addEventListener('click', closePopupPhoto);

