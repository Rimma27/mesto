export class Card {

    constructor(data, templateSelector, openPopupCallback) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupCallback = openPopupCallback;
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

        const imageElement = this._element.querySelector('.element__image');
        imageElement.src = this._link;
        imageElement.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._deleteCard();
        });

        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._likeButtonActive(evt);
        });
        
        this._element.querySelector('.element__button-image').addEventListener('click', () => {
            this._openPopupCallback(this._link, this._name);
        });
    }

    _deleteCard() {
        this._element.remove();
    }

    _likeButtonActive(evt) {
        evt.target.classList.toggle('element__like_active');
    }
}

