export class FormValidator {
    constructor(validationSettings, formElement) {
        this._validationSettings = validationSettings;
        this._formElement = formElement;
    }


    _showInputError(formInput, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${formInput.id}-error`);
        formInput.classList.add(this._validationSettings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validationSettings.errorClass);
    }

    _hideInputError(formInput) {
        const errorElement = this._formElement.querySelector(`.${formInput.id}-error`);
        formInput.classList.remove(this._validationSettings.inputErrorClass);
        errorElement.classList.remove(this._validationSettings.errorClass);
        errorElement.textContent = '';
    }

    _isValid(formInput) {
        if (!formInput.validity.valid) {
            this._showInputError(formInput, formInput.validationMessage);
        } else {
            this._hideInputError(formInput);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((formInput) => {
            return !formInput.validity.valid;
        })
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
        const buttonElement = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid(formInput);
                this._toggleButtonState(inputList, buttonElement);
            })
        })
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._validationSettings.inactiveButtonClass);
            buttonElement.setAttribute('disabled', '');
        } else {
            buttonElement.classList.remove(this._validationSettings.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }


    _resetErrorInput() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
        const buttonElement = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
        if (inputList.length > 0) {
            this._toggleButtonState(inputList, buttonElement);
            inputList.forEach((formInput) => {
                this._hideInputError(formInput);
            });
        }
    }

    enableValidation = () => {
        this._resetErrorInput();
        this._setEventListeners();
    }

}
