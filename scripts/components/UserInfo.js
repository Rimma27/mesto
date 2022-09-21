export class UserInfo {
    constructor({usersNameSelector, usersJobSelector}) {
        this._usersNameInput = document.querySelector(usersNameSelector);
        this._usersJobInput = document.querySelector(usersJobSelector);
    }

    getUserInfo(){
        const usersInfo = {
            name: this._usersNameInput.textContent,
            job: this._usersJobInput.textContent
        };
        return usersInfo;
    }

    setUserInfo(name, job){
        this._usersNameInput.textContent = name;
        this._usersJobInput.textContent = job;   
    }
}
