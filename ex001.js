function pessoa(){
    let pessoa = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value
    }
    return `O(a) cliente ${pessoa.nome} mora em, ${pessoa.uf.toUpperCase()}.`
}

function teste(){
   document.getElementById('res').innerHTML = pessoa()
}

