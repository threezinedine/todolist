import html from "./core.js"
import { connector } from "./main.js"


const $ = document.querySelector.bind(document)


function Item(state, index) {
    const task = state.tasks[index]
    const filter = state.filter
    const filters = state.filters
    console.log(state.editableIndex, index, state.editableIndex === index)

    if (filters[filter](task)) {
        return html`
            <li class="task">
                <label for="${index}">
                    <input type="checkbox" 
                        class="checkbox"
                        onclick="dispatch('toggleTask', ${index})" 
                        ${task.completed ? 'checked' : ''}
                    >
                    <p class="${task.completed ? 'checked' : ''} ${state.editableIndex === index ? 'display-none': ''}">
                        ${task.title}
                    </p>
                    <input class="text ${state.editableIndex === index ? '' : 'display-none'}" 
                        type="text"
                        id="task-${index}"
                        value="${task.title}"
                        onkeyup="if(event.key==='Enter') dispatch('saveEdited', ${index}); if (event.key==='Escape') dispatch('cancelEditing')"
                        onblur="dispatch('cancelEditing')"
                    />
                </label>
                <div class="settings ${state.editableIndex !== index ? '': 'display-none'}">
                    <div onclick="dispatch('editingTask', ${index})"><i class="uil uil-pen"></i>Edit</div>
                    <div onclick="dispatch('removeTask', ${index})"><i class="uil uil-trash"></i>Delete</div>
                </div>
                <div class="settings editing ${state.editableIndex !== index ? 'display-none': ''}">
                    <div onclick="dispatch('saveEdited', ${index})"><i class="uil uil-pen"></i>Save</div>
                    <div onclick="console.log(event.target); dispatch('cancelEditing')"><i class="uil uil-trash"></i>Cancel</div>
                </div>
            </li>
        `
    } else {
        return ""
    }

}


export default connector(Item)
