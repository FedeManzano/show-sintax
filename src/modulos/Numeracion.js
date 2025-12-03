
const numerar = (elemento, codigo) => {
    elemento.insertAdjacentHTML('beforeend', "<div class='numeracion'></div>")
    let linea = 0
    const numeracionDiv = elemento.querySelector(".numeracion")
    for (let c of codigo) {
        if (c === '\n') {
            linea++
            numeracionDiv.insertAdjacentHTML('beforeend', "<span>" + linea + "</span>")
        }
    }
}


export default numerar