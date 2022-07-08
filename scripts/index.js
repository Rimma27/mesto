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
const popupPhoto = document.querySelector('.popup-photo');
const photoCloseButton = document.querySelector('.popup-photo__button-close');
const allPopups = document.querySelectorAll('.all-popup');
const elementTemplate = document.querySelector('#element-template').content;
const photoImage = popupPhoto.querySelector('.popup-photo__image');
const photoName = popupPhoto.querySelector('.popup-photo__name');




//                                  Карточки 

function createCard(item) {
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
        openPopup(popupPhoto);
        photoImage.src = item.link;
        photoImage.alt = item.name;
        photoName.textContent = item.name;
    });

    return element;
};

initialCards.forEach(function (item) {
    const result = createCard(item);
    addCard(result, elements);
});

function addCard(card, container) {
    container.prepend(card);
}


//                                     Функции

function openPopup(popup) {
    popup.classList.add('popup-opened');
    document.addEventListener('keydown', keyHandler);
    popup.addEventListener('mousedown', clickHandler);
    resetErrorInput(popup); 
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
    const result = createCard(item);
    addCard(result, elements);
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



//                                    Листнеры

formProfileElement.addEventListener('submit', submitProfileForm);
profileEditButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
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
    openPopup(popupAdd);
});
popupCreateButton.addEventListener('click', submitProfileFormCard);


photoCloseButton.addEventListener('click', function () {
    closePopup(popupPhoto);
});


// validation enable

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__item-error_active'
});
