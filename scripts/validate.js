
const formInput = document.querySelectorAll('.popup__item');
const buttonElement = document.querySelector('.popup__button_type_save');

const showInputError = (formProfileElement, formInput, errorMessage) => {
    const formError = formProfileElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add('popup__item_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__item_type_error_active');
}

const hideInputError = (formProfileElement, formInput) => {
    const formError = formProfileElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove('popup__item_type_error');
    formError.classList.remove('popup__item_type_error_active');
    formError.textContent = '';
}

const isValid = (formProfileElement, formInput) => {
    if (!formInput.validity.valid) {
        showInputError(formProfileElement, formInput, formInput.validationMessage);
    } else {
        hideInputError(formProfileElement, formInput);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
    })
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_type_save_inactive');
    } else {
        buttonElement.classList.remove('popup__button_type_save_inactive');
    }
}

const setEventListeners = (formProfileElement) => {
    const inputList = Array.from(formProfileElement.querySelectorAll('.popup__item'));
    const buttonElement = document.querySelector('.popup__button_type_save');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
            isValid(formProfileElement, formInput);
            toggleButtonState(inputList, buttonElement);
        })
    })
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formProfileElement) => {
        formProfileElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formProfileElement);
    })
}
enableValidation();

