import { Popup } from "./Popup"
import { photoImage, photoName } from "../utils/constants";

export class PopupWithImage extends Popup {
    constructor(popupSelector, name, link) {
        this._link = link;
        this._name = name;
        super(popupSelector);
    }

    openPopup() {
        super.openPopup();
        photoImage.src = this._link;
        photoImage.alt = this._name;
        photoName.textContent = this._name;
    }
}

