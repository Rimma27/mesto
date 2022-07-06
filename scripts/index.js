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
const photoCloseButton = document.querySelector('.popup-photo__button-close');
const popupOpened = document.querySelector('.popup-opened');
const allPopup = document.querySelectorAll('.all-popup');



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
        openPopup(popupPhoto);
        popupPhoto.querySelector('.popup-photo__image').src = item.link;
        popupPhoto.querySelector('.popup-photo__name').textContent = item.name;
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
    document.addEventListener('click', clickHandler);

}

function closePopup(popup) {
    popup.classList.remove('popup-opened');
    document.removeEventListener('keydown', keyHandler);
    document.removeEventListener('click', clickHandler);

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
    const allPopupList = Array.from(document.querySelectorAll('.all-popup'));
    allPopupList.forEach((allPopup) => {
        if (evt.target === allPopup) {
            closePopup(allPopup);
        };
    })
}

function keyHandler(evt) {
    const allPopupList = Array.from(document.querySelectorAll('.all-popup'));
    allPopupList.forEach((allPopup) => {
        if (evt.key === "Escape") {
            closePopup(allPopup);
        }
    })
}



//                                    Листнеры

formProfileElement.addEventListener('submit', submitProfileForm);
profileEditButton.addEventListener('click', function () {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});
profileCloseButton.addEventListener('click', function () {
    closePopup(popupProfile);
});
profileAddButton.addEventListener('click', function () {
    openPopup(popupAdd);
    titleInput.value = '';
    placeInput.value = '';
});
popupCreateButton.addEventListener('click', submitProfileFormCard);
popupAddCloseButton.addEventListener('click', function () {
    closePopup(popupAdd);
});
photoCloseButton.addEventListener('click', function () {
    closePopup(popupPhoto);
});
