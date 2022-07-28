export class FormValidator {
    constructor(validationSettings, formElement) {
        this._validationSettings = validationSettings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
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

    _hasInvalidInput() {
        return this._inputList.some((formInput) => {
            return !formInput.validity.valid;
        })
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid(formInput);
                this._toggleButtonState();
            })
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._validationSettings.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', '');
        } else {
            this._buttonElement.classList.remove(this._validationSettings.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }


    resetErrorInput = () => {
        if (this._inputList.length > 0) {
            this._toggleButtonState();
            this._inputList.forEach((formInput) => {
                this._hideInputError(formInput);
            });
        }
    }

    enableValidation = () => {
        this._setEventListeners();
    }

}
