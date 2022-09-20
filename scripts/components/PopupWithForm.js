import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm() = submitForm;
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__item');
        const formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm = this._popupSelector.querySelector('.popup__form');
        this._popupForm.setEventListeners('submit', (e) => {
            e.preventDefault();
            this._submitForm(_getInputValues());
            this.close();
        })
    }

    closePopup() {
        super.closePopup();
        this._popupForm.reset();
    }
}
