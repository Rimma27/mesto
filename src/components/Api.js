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

  // постановка лайков
  setLike(id) {
    return fetch(
      `${this._baseUrl}cards/${id}/likes`,
      {
        method: 'PUT',
        headers: this._headers
      })
      .then(this._onResponce)
  }

  // удаление карточки
  removeLike(id) {
    return fetch(
      `${this._baseUrl}cards/${id}/likes`,
      {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._onResponce)
  }

  // удаление карточки
  deleteCard(id) {
    return fetch(
      `${this._baseUrl}cards/${id}`,
      {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._onResponce)
  }

// обновление аватара
updateAvatar(link) {
  return fetch(
    `${this._baseUrl}users/me/avatar`,
    {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(this._onResponce)
}


}
