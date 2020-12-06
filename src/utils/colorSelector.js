export const colorSelector = () => {
    let colors = ['green', 'orange', 'red', 'blue', 'yellow', 'pink']
    let randomValue = Math.floor(Math.random() * (colors.length - 1))

    return colors[randomValue]
}