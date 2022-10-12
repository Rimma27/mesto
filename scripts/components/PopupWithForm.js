import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._inputList = this._popup.querySelectorAll('.popup__item');
        this._buttonCreate = this._popup.querySelector('.popup__button_type_create');
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        })
        return formValues;
    }

    _resetInputs() {
        this._inputList.forEach(input => {
            input.value = '';
        });
    }

    setEventListeners() {
        super.setEventListeners();
        const popupForm = this._popup.querySelector('.popup__form');
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._renderLoading(true);
            this._submitFormCallback(this._getInputValues());
            this.close();
        })
    }

    close() {
        super.close();
        this._resetInputs();
    }

    _setInputValues(initialInputValues) {
        this._inputList.forEach(input => {
            input.value = initialInputValues[input.name];
        })
    }

    open(initialInputValues) {
        this._renderLoading(false);
        if (initialInputValues) {
            this._setInputValues(initialInputValues);
        }
        super.open();
    }

    _renderLoading(isLoading) {
        if (isLoading) {
         this._buttonCreate.textContent = 'Сохранение...';
        } else {
            this._buttonCreate.textContent = 'Сохранить';  
        }
      }
}
