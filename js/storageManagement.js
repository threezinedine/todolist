const TASKS_DATA_KEY = "tasks"


export function get() {
    const data = localStorage.getItem(TASKS_DATA_KEY) 
    if (data!==null) {
        return JSON.parse(data)
    } else {
        return []
    }
}


export function set(data) {
    localStorage.setItem(TASKS_DATA_KEY, JSON.stringify(data))
}
