export default function getData(match, state) {
    let data = match.url.split('/')[1];
    let id = +match.params.id;
    let elements = state[data];
    let element = elements ? elements.filter(item => (item.id === id) ): []
    return  element[0]
}