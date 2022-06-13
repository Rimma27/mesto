let formElement = document.querySelector('.container');
let nameInput = document.querySelector('.container__form_name');
let jobInput = document.querySelector('.container__form_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button_close');
let popup = document.querySelector('.popup');

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


//                                    Листнеры

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);