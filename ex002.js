function ver_impares(inicio,final){
    for(var i = inicio; i <= final; i++){
        if(i % 2 != 0){
            document.write(`${i}  `)
        }
    }
}

function mostrar(){
    ver_impares(Number(document.getElementById('inicio').value),Number(document.getElementById('final').value))
}