export class Section {
    constructor({items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._initialArray.forEach(item => {
            const renderedItem = this._renderer(item);
            this.addItem(renderedItem);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    }
}