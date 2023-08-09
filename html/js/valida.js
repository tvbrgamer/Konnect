const apenasLetras = (e) => {
    let test = /[0-9]+/;
    e.value = e.value.replace(/^\s+|$\s+/g, "")
    if(test.test(e.value)) {
        e.value = e.value.replace(/[0-9]+/, "")
    }
}

const apenasNumeros = (e) => {
    let test = /[a-zA-Z]+/;
    e.value = e.value.replace(/^\s+|$\s+/g, "")
    if(test.test(e.value)) {
        e.value = e.value.replace(/[a-zA-Z]+/, "")
    }
}