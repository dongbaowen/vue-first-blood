const TODOLIST_STORE_KEY = 'todo_store_key'
export default {
    fetch () {
        return JSON.parse(window.localStorage.getItem(TODOLIST_STORE_KEY) || '[]')
    },
    save (items) {
        window.localStorage.setItem(TODOLIST_STORE_KEY, JSON.stringify(items))
    }
}