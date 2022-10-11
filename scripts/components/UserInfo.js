export class UserInfo {
    constructor({usersNameSelector, usersJobSelector}) {
        this._usersNameInput = document.querySelector(usersNameSelector);
        this._usersJobInput = document.querySelector(usersJobSelector);
        this.id = null;
        this.avatar = null;
    }

    getUserInfo(){
        const usersInfo = {
            name: this._usersNameInput.textContent,
            job: this._usersJobInput.textContent
        };
        return usersInfo;
    }

    setUserInfo(id, name, job, avatar){
        this.id = id;
        this.avatar = avatar;
        
        this._usersNameInput.textContent = name;
        this._usersJobInput.textContent = job;   
    }
}
