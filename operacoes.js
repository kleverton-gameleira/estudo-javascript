function operacao(n1,n2,op){
    n1 = document.getElementById('n1').value
    n2 = document.getElementById('n2').value
    op = document.getElementById('op').value
    switch(op){
        case op == 'soma':
            document.getElementById('res').innerHTML = `<p>A Soma entre os valores ${n1} e ${n2} é igual a ${n1+n2}</p>`
            break
        case op == 'sub':
            if(n1 >= n2){
                document.getElementById('res').innerHTML =`<p>A Subtração entre os valores ${n1} e ${n2} é igual a ${n1-n2}</p>`
            }else{
                document.getElementById('res').innerHTML =`<p>A Subtração entre os valores ${n1} e ${n2} é igual a ${n2-n1}</p>`
            }
            break
        case op == 'mult':
            document.getElementById('res').innerHTML =`<p>A Multipliação entre os valores ${n1} e ${n2} é igual a ${n1*n2}</p>`
            break
        case op == 'div':
            document.getElementById('res').innerHTML =`<p>A Divisão entre os valores ${n1} e ${n2} é igual a ${n1/n2}</p>`
            break
        default:
            document.getElementById('res').innerHTML =`<p>Para que a operacao tenho validade, voce deve escolher opcoes validas</p>`
    }
}
function teste(){
    operacao(Number(document.getElementById('n1').value),Number(document.getElementById('n2').value),document.getElementById('op').value)
}
