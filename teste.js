function testeExterno(){
    let num = document.getElementById('num').value
    /*for(var i =0 ; i <=10; i++){
        //alert(`${num} x ${i} = ${num*i}`)
        document.write(`${num} x ${i} = ${num*i}</br>`)
    }
    let i = 0
    while(i <= 10){
        document.write(`${num} x ${i} = ${num*i}</br>`)
        i++
    }*/

    let cont = 0 
    do{
        document.write(`${num} x ${cont} = ${num*cont}</br>`)
        cont++
    }while(cont <= 10)
    
}