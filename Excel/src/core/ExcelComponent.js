import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
        this.unsubscribers = []

        this.prepare()
    }

    // Настройка компонента до init
    prepare() {}

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // Уведомляем слушателей про события event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписывается на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    $dispatch(action) {
        this.store.dispatch(action)
    }

    // Сюда приходят только изменения по тем полям под которые мы подписались
    storeChanged() {}

    isWatching(key) {
        return this.subscribe.includes(key)
    }

    // Инициализируем компонент
    // Добавляем DOM слушатели
    init() {
        this.initDOMListeners()
    }

    // Удаляем компонент
    // Чистим слушатели
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}