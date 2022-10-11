export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(initialArray) {
        initialArray.forEach(item => {
            const renderedItem = this._renderer(item);
            this.addItem(renderedItem);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    }
}