function msg(){
    document.write(`funciona</br>`)
}

function chamada(){
    return setInterval(msg,500)
}

function chamada2(){
    return setTimeout(chamada,1000)
}