const showInputError = (formElement, formInput, errorMessage) => {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(validationSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSettings.errorClass);
}

const hideInputError = (formElement, formInput) => {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(validationSettings.inputErrorClass);
    errorElement.classList.remove(validationSettings.errorClass);
    errorElement.textContent = '';
}

const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
        showInputError(formElement, formInput, formInput.validationMessage);
    } else {
        hideInputError(formElement, formInput);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
    })
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
    const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
            isValid(formElement, formInput);
            toggleButtonState(inputList, buttonElement);
        })
    })
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationSettings.inactiveButtonClass);
        buttonElement.setAttribute('disabled', '');
    } else {
        buttonElement.classList.remove(validationSettings.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

let validationSettings;
const enableValidation = (settings) => {
    validationSettings = settings;
    const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formElement);
    })
}

function resetErrorInput(popup) {
    const formElement = popup.querySelector(validationSettings.formSelector);
    const inputList = Array.from(popup.querySelectorAll(validationSettings.inputSelector));
    const buttonElement = popup.querySelector(validationSettings.submitButtonSelector);

    if (inputList.length > 0) {
        toggleButtonState(inputList, buttonElement);
        inputList.forEach((formInput) => {
            hideInputError(formElement, formInput);
        });
    }
}
