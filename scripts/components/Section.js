export class Section {
    constructor({items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._initialArray.forEach(item => {
            const domElement = this._renderer(item);
            this.addItem(domElement);
        });
    }

    addItem(domElement) {
        this._container.prepend(domElement);
    }
}