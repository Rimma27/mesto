import { Popup } from "./Popup.js";

import { photoImage, photoName } from "../utils/constants.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector, name, link) {
        super(popupSelector);
        this._link = link;
        this._name = name;
    }

    openPopup() {
        super.openPopup();
        photoImage.src = this._link;
        photoImage.alt = this._name;
        photoName.textContent = this._name;
    }
}

