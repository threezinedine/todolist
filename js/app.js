import html from "./core.js"
import { connector } from "./main.js"
import Item from "./items.js"
import Filter from "./filters.js"


function App(state) {
    const tasks = state.tasks
    const tasksLength = state.tasks.length
    const filters = state.filters
    const filter = state.filter

    return html`
    <div class="wrapper">
        <div class="task-input">
            <img src="images/bars-icon.svg" alt="icon">
            <input type="text" 
                id="input-task"
                placeholder="Add a new task"
                onkeyup="if (event.key === 'Enter') dispatch('addNewTask', this.value)"
            >
        </div>
        <div class="controls">
            <div class="filters">
                ${Object.keys(filters).map(filterType => Filter(filterType))}
            </div>
            <button onclick="dispatch('removeAllTasks')" class="clear-btn ${tasksLength === 0 ? '' : 'active'}">Clear All</button>
        </div>
        <ul class="task-box">
            ${tasksLength !== 0 ? tasks.map((task, index) => Item(index)) : '<span>You don\'t have any task here</span>'}
        </ul>
    </div>
    `
}


export default connector(App)
