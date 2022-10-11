export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(data) {
        data.forEach(item => {
            const renderedItem = this._renderer(item);
            this._container.append(renderedItem);
        });
    }

    renderItem(item) {
        const renderedItem = this._renderer(item);
        this._container.prepend(renderedItem);
    }
}