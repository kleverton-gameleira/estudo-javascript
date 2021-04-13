function senioridade(exp){
    if(exp <= 2){
        document.getElementById('res3').innerHTML = `<p>Seu nivel é de um programador Junior</p>`
    }else if(exp >= 3 && exp<= 5){
        document.getElementById('res3').innerHTML = `<p>Seu nivel é de um programador Pleno</p>`
    }else{
        document.getElementById('res3').innerHTML = `<p>Seu nivel é de um programador Senior</p>`
    }
}

function exibir(){
    senioridade(Number(document.querySelector('input#exp').value))
}