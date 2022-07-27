const popupPhoto = document.querySelector('.popup-photo');
const elementTemplate = document.querySelector('#element-template').content;
const photoImage = popupPhoto.querySelector('.popup-photo__image');
const photoName = popupPhoto.querySelector('.popup-photo__name');
import { initialCards } from "./initialCards.js";
const elements = document.querySelector('.elements');

export class Card {

    constructor(data, templateSelector, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopup = () => {
            openPopup(popupPhoto);
        }
    }

    _getTemplate() {
        const element = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return element;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._element.remove();
        });
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__like_active');
        })
        this._element.querySelector('.element__button-image').addEventListener('click', () => {
            this._openPopup(this._element.querySelector('.popup-photo'));
            photoImage.src = this._link;
            photoImage.alt = this._name;
            photoName.textContent = this._name;
        });
    }
}

