export function createStore(rootReducer, initialState = {}) {
let state = rootReducer({...initialState}, {type: '__INIT__'})
let listiners = []

    return {
        subscribe(fn) {
            listiners.push(fn)
            return {
                unsubscribe() {
                    listiners = listiners.filter(l => l !== fn)
                }
            }
        },
        dispatch(action) {
            state = rootReducer(state, action)
            listiners.forEach(listener => listener(state))
        },
        getState() {
            return JSON.parse(JSON.stringify(state))
        }
    }
}