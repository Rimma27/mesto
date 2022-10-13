export class Card {

    constructor(data, templateSelector, openPopupCallback, userId, setLikeCallback, deleteCardCallback) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupCallback = openPopupCallback;
        this._likes = data.likes;
        this._cardOwnerId = data.owner._id;
        this.id = data._id;
        this._userId = userId;
        this.like = this._likes.map(x => x._id).filter(x => x === this._userId).length > 0;
        this._setLikeCallback = setLikeCallback;
        this._deleteCardCallback = deleteCardCallback;
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

        this._element.querySelector('.element__likes').textContent = this._likes.length;

        if (this.like){
            this._element.querySelector('.element__like').classList.toggle('element__like_active');
        }

        if(this._userId === this._cardOwnerId){
            this._element.querySelector('.element__basket').classList.add('basket_visible');
        }

        return this._element;
    }

    deleteCard() {
        this._element.remove();
    }


    _setEventListeners() {
        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._deleteCardCallback(this);
        });

        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._setLikeCallback(this);
        });

        this._element.querySelector('.element__button-image').addEventListener('click', () => {
            this._openPopupCallback(this._link, this._name);
        });
    }


    likeButtonActive() {
        const sign = this.like ? -1 : 0;
        if (this._element.querySelector('.element__like').classList.toggle('element__like_active')) {
            this._element.querySelector('.element__likes').textContent = this._likes.length + 1 + sign;
        } else {
            this._element.querySelector('.element__likes').textContent = this._likes.length + sign;
        }
    }
}

