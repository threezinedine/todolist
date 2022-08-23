import html from "./core.js"
import { connector } from "./main.js"


function Filter({filters, filter}, filterType) {
    return html`
        <span 
            class="${filter === filterType ? 'active' : ''}" 
            id="${filterType}"
            onclick="dispatch('changeFilter', '${filterType}')"
        >
            ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}
        </span>
    `  
}


    export default connector(Filter)
