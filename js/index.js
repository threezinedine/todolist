import { mount } from "./main.js"
import App from "./app.js"


const $ = document.querySelector.bind(document)


const root = document.querySelector("#app")


mount(root, App)


window.addEventListener("keyup", (e) => {
    if (e.key === 'i' && e.ctrlKey) {
        $('#input-task').focus()
    }
})
