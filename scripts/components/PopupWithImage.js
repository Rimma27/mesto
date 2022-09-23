import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageContainer = this._popup.querySelector('.popup-photo__image');
        this._imageDescriptionContainer = this._popup.querySelector('.popup-photo__name');
    }

    openPopup(link, name) {
        this._imageContainer.src = link;
        this._imageContainer.alt = name;
        this._imageDescriptionContainer.textContent = name;
        super.openPopup();
    }
}

