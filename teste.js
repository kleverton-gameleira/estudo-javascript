function somar(n1,n2){
    let soma = n1+n2
    return `A soma entre os valores ${n1} e ${n2} é ${soma}`
}
function sub(n1, n2){
    if(n1 >= n2){
        let sub = n1 - n2
        return `${n1} - ${n2} é igual a ${sub}`
    }else{
        let sub = n2 - n1
        return `${n2} - ${n1} é igual a ${sub}`
    }
}
function multi(n1,n2){
    let mult = n1*n2
    return `${n1} x ${n2} é igual a ${mult}`
}
function div(n1, n2){
    let div = n1 / n2
    return `${n1} dividido por ${n2} é igual a ${div}`
}

function teste(){
    let op = document.getElementById('op').value
    switch(op){
        case 's':
            document.write(somar(Number(document.querySelector('input#n1').value),Number(document.querySelector('input#n2').value)))
            break
        case 'sub':
            document.write(sub(Number(document.querySelector('input#n1').value),Number(document.querySelector('input#n2').value)))
            break
        case 'm':
            document.write(multi(Number(document.querySelector('input#n1').value),Number(document.querySelector('input#n2').value)))
            break
        case 'd':
            document.write(div(Number(document.querySelector('input#n1').value),Number(document.querySelector('input#n2').value)))
            break
        default:
            document.write('Escolha uma opção valida para que a operação seja realizada com sucesso')
    }
}