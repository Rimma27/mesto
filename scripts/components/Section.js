export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(data) {
        data.forEach(item => {
            this.renderItem(item);
        });
    }

    renderItem(item) {
        const renderedItem = this._renderer(item);
        this.addItem(renderedItem);
    }

    addItem(item) {
        this._container.prepend(item);
    }
}