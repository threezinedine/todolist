export default function html(rawStrings, ...data) {
    if (rawStrings.length === 1) {
        return rawStrings[0]
    } else {
        if (Array.isArray(data[0])) {
            data[0] = data[0].join(' ')
        }
        const result = rawStrings[0] + data[0] + rawStrings[1]
        return html([result, ...rawStrings.slice(2)], ...data.slice(1))
    }
}


export function Storage(reducer) {
    let state = reducer() 
    let root = null
    let component = null

    return {
        render() {
            root.innerHTML = component()
        },
        mount(newRoot, newComponent) {
            root = newRoot
            component = newComponent

            this.render()
        },
        connector(component, filter = state => state) {
            return (...args) => component(filter(state), ...args)
        },
        dispatch(e, ...args) {
            state = reducer(state, e, ...args)
            this.render(state)
        }
    }
}
