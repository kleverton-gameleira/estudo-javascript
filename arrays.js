let pessoas = [
    {nome: 'kleverton', sobrenome: 'gameleira'},
    {nome: 'tayane', sobrenome: 'gameleira'},
    {nome: 'kelly', sobrenome: 'serejo'},
    {nome: 'derek', sobrenome: 'gameleira'},
    {nome: 'adrian', sobrenome: 'santos'},
    {nome: 'pedro', sobrenome: 'gameleira'},
    {nome: 'karla', sobrenome: 'gameleira'},
    {nome: 'felipe ', sobrenome: 'serejo'},
    {nome: 'junior', sobrenome: 'santos'},
    {nome: 'richard', sobrenome: 'braga'}
]
let resultado = pessoas.filter(function(p){
    return p.sobrenome == 'santos'
})

console.log(resultado)
