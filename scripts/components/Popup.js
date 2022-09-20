export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            const popup = document.querySelector('.popup-opened');
            this.closePopup();
        }
    }

    _clickHandler(evt) {
        if (evt.target.classList.contains('all-popup')) {
            this.closePopup(evt.target);
        }
    }

    openPopup() {
        this._popup.classList.add('popup-opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('mousedown', this._clickHandler);
    }

    closePopup() {
        this._popup.classList.remove('popup-opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('mousedown', this._clickHandler);
    }

    setEventListeners() {
        let popupCloseButton = this._popup.querySelector('.popup__button_type_close');
        popupCloseButton.addEventListener('click', function () {
            this.closePopup();
        })
    }
}