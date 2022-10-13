import { Popup } from "./Popup.js";

export class AcceptPopup extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
    }
    
    setEventListeners() {
        super.setEventListeners();
        const popupForm = this._popup.querySelector('.popup__form');
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault()
            this._submitCallback();
            this.close();
        })
    }

    open(submitCallback) {
        this._submitCallback = submitCallback;
        super.open();
    }
}
