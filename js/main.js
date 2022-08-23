import html from "./core.js"
import { Storage } from "./core.js"
import Logger from "./logger.js"
import { get, set } from "./storageManagement.js"


const $ = document.querySelector.bind(document)


const init = {
    editableIndex: null,
    tasks: get(),
    filter: "all",
    filters: {
        all(task) {return true},
        pending(task) {return !task.completed},
        completed(task) {return task.completed}
    }
}


const methods = {
    addNewTask(state, title) {
        state.tasks.push({
            title: title,
            completed: false
        })
        set(state.tasks)
        return state
    },
    showMenu(state, index) {
        state.showMenuIndex = index
        return state
    },
    removeMenu(state) {
        state.showMenuIndex = null 
        return state
    },
    removeTask(state, index) {
        state.tasks.splice(index, 1)
        set(state.tasks)
        return state
    },
    removeAllTasks(state) {
        state.tasks = []
        set(state.tasks)
        return state
    },
    toggleTask(state, index) {
        state.tasks[index].completed = !state.tasks[index].completed
        set(state.tasks)
        return state
    }, 
    changeFilter(state, filterType) {
        state.filter = filterType
    },
    editingTask(state, index) {
        setTimeout(() => {
            $(`#task-${index}`).select()
        }, 100)
        state.editableIndex = index
        return state
    },
    saveEdited(state, index) {
        const value = $(`#task-${index}`).value
        state.tasks[index].title = value
        state.editableIndex = null
        set(state.tasks)
        return state
    },
    cancelEditing(state) {
        state.editableIndex = null
        return state
    }
}


function reducer(state = init, e, ...args) {
    if (e in methods) {
        methods[e](state, ...args)
    }
    return state
}


const storage = Storage(Logger(reducer))

let {mount, connector, dispatch} = storage

mount = mount.bind(storage)
connector = connector.bind(storage)
dispatch = dispatch.bind(storage)

window.dispatch = dispatch

export { mount, connector}
