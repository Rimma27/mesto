export class UserInfo {
    constructor({usersNameSelector, usersJobSelector}) {
        this._usersNameInput = document.querySelector(usersNameSelector);
        this._usersJobInput = document.querySelector(usersJobSelector);
    }

    getUserInfo(){
        const usersInfo = {
            name: this._usersNameSelector.textContent,
            job: this._usersJobSelector.textContent
        };
        return usersInfo;
    }

    setUserInfo(name, job){
        this._usersNameInput.textContent = name;
        this._usersJobInput.textContent = job;   
    }
}