export class Page {
    constructor(params) {
        this.params = params
    }

    getRoot() {
        throw new Error('Methos "getRoot" should be implemented')
    }

    afterRender() {}

    destroy() {}
}