function soma(a,b){
    let soma = a + b
    alert(`A soma entre os valores ${a} e ${b} é igual a ${soma}`)
}
function mult(a,b){
    let mult = a*b
    alert(`A multiplicacao dos valores ${a} e ${b} é ${mult}`)
}
function sub(a,b){
    if (a >= b){
        let sub = a - b
        alert(`A subtração de ${a} e ${b} é igual a ${sub}`)
    }else{
        let sub = b - a
        alert(`A subtração de ${a} e ${b} é igual a ${sub}`)
    }
}
function div(a,b){
    let div = a / b
    alert(`A divisao de ${a} e ${b} é igual a ${div}`)
}
function calcular(op){
    op = document.getElementById('op').value
    switch(op){
        case 's':
            soma(Number(document.getElementById('n1').value),Number(document.getElementById('n2').value))
            break
        case 'mult':
            mult(Number(document.getElementById('n1').value),Number(document.getElementById('n2').value))
            break;
        case 'sub':
            sub(Number(document.getElementById('n1').value),Number(document.getElementById('n2').value))
            break;
        case 'div':
            div(Number(document.getElementById('n1').value),Number(document.getElementById('n2').value))
            break;
        default:
            alert("Voce deve informar valores validos para que a operação seja realizada da forma correta!!!!")
    }

}