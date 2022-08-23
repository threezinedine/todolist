const TASKS_DATA_KEY = "tasks"


export function get() {
    const data = localStorage.getItem(TASKS_DATA_KEY) 
    return JSON.parse(data)
}


export function set(data) {
    localStorage.setItem(TASKS_DATA_KEY, JSON.stringify(data))
}
