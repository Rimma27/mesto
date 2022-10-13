export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup-opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        const popupCloseButton = this._popup.querySelector('.popup__button_type_close');
        popupCloseButton.addEventListener('click', () => {
           this.close();
        })
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('all-popup')) {
                this.close(evt.target);
            }
         
    })
}
}