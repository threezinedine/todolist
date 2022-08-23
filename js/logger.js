export default function Logger(func) {
    return (state, e, ...args) => {
        console.group(`Event: ${e}`)
        console.log(`Previous state:`)
        console.log(state)
        console.log(`Input args: ${args}`)

        state = func(state, e, ...args)

        console.log(`End state: `)
        console.log(state)
        console.groupEnd()
        return state
    }
}
