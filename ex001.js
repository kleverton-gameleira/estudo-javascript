function cad(){
    let pessoa = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('tel').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('estado').value
    }

    return `O(a) cliente ${pessoa.nome} mora em ${pessoa.cidade}, ${pessoa.uf}`
}

function exibir(){
    document.write(cad())
}