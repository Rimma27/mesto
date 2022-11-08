import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';



function App() {
    return (
        <body className='body'>
            <div className='page'>
                <Header />
                <Main />
                <Footer />

                <div className="all-popup popup">
                    <div className="popup__container">
                        <h2 className="popup__heading">Редактировать профиль</h2>
                        <form className="popup__form" name="popup__form" novalidate>
                            <label>
                                <input type="text" id="name-item" name="name" className="popup__item popup__item_type_name"
                                    placeholder="Имя" required minlength="2" maxlength="40" />
                                <span className="popup__item-error name-item-error"></span>
                            </label>
                            <label>
                                <input type="text" id="job-item" name="job" className="popup__item popup__item_type_job"
                                    placeholder="Сфера деятельности" required minlength="2" maxlength="200" />
                                <span className="popup__item-error job-item-error"></span>
                            </label>
                            <button type="submit" className="popup__button popup__button_type_create">Сохранить</button>
                        </form>
                        <button type="button" className="popup__button popup__button_type_close"></button>
                    </div>
                </div>

                <div className="all-popup popup popup-update-avatar">
                    <div className="popup__container">
                        <h2 className="popup__heading">Обновить аватар</h2>
                        <form className="popup__form" name="popup-update-avatar__form" novalidate>
                            <label>
                                <input type="url" id="avatar" name="link" className="popup__item popup__item_type_place"
                                    placeholder="Ссылка на фотографию" required />
                                <span className="popup__item-error avatar-error"></span>
                            </label>
                            <button type="submit" className="popup__button popup__button_type_create" disabled>Сохранить</button>
                        </form>
                        <button type="button" className="popup__button popup__button_type_close"></button>
                    </div>
                </div>

                <div className="all-popup popup-delete popup">
                    <div className="popup__container">
                        <h3 className="popup-delete__heading">Вы уверены?</h3>
                        <form className="popup__form popup__form_delete" name="popup__form" novalidate>
                            <button type="submit" className="popup__button popup__button_type_save">Да</button>
                        </form>
                        <button type="button" className="popup__button popup__button_type_close"></button>
                    </div>
                </div>

                <div className="all-popup popup-add popup">
                    <div className="popup__container">
                        <h2 className="popup__heading">Новое место</h2>
                        <form className="popup__form" name="popup-add__form" novalidate>
                            <label>
                                <input type="text" id="title-item" name="name" className="popup__item popup__item_type_title"
                                    placeholder="Название" minlength="2" maxlength="30" required />
                                <span className="popup__item-error title-item-error"></span>
                            </label>
                            <label>
                                <input type="url" id="place-item" name="link" className="popup__item popup__item_type_place"
                                    placeholder="Ссылка на картинку" required />
                                <span className="popup__item-error place-item-error"></span>
                            </label>
                            <button type="submit" className="popup__button popup__button_type_create" disabled>Создать</button>
                        </form>
                        <button type="button" className="popup__button popup__button_type_close"></button>
                    </div>
                </div>
                <div className="all-popup popup-photo popup">
                    <div className="popup-photo__container">
                        <button type="button" className="popup__button popup__button_type_close"></button>
                        <img className="popup-photo__image" alt="Фото" />
                        <p className="popup-photo__name"></p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default App;
