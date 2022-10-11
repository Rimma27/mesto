import { Card } from "./Card";

export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _onResponce(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject('Ошибка', res.status)
    }
  }

  // загрузка информации пользователя с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`,
      {
        headers: this._headers
      })
      .then(this._onResponce)
  }

  // загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}cards`,
      {
        headers: this._headers
      })
      .then(this._onResponce)
  }

  // редактирование профиля
  setUserInfo() {
    return fetch(
      `${this._baseUrl}users/me`,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: 'Eva Longoria',
          about: 'actress, producer, director'
        })
      })
      .then(this._onResponce)
  }

  // добавление новой карточки
  addCard(card) {
    return fetch(
      `${this._baseUrl}cards`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: card.name,
          link: card.link
        })
      })
      .then(this._onResponce)
  }

  // подсчет лайков
  calculateLikes() {
    return fetch(
      `${this._baseUrl}cards`,
      {
        headers: this._headers,
        body: JSON.stringify({
          likes: []
        })
      })
      .then(this._onResponce)
  }

  removeCard(idCard) {
    return fetch(
      `${this._baseUrl}cards/${idCard}`,
      {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._onResponce)
  }

}
