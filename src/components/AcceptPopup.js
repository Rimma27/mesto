import { Popup } from "./Popup.js";

export class AcceptPopup extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    setEventListeners(submitCallback) {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitCallback = submitCallback;
            this.close();
        })
    }
}
