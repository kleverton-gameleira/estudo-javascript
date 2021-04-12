let numeros = [1,6,5,3,2,9,7,8,10,4,68,55,44,23,22]
numeros.push()
let par = []
let impar = []
function par_impar(nums){
    for(let i = 0; i <= nums.length;i++){
        if(nums[i] % 2 == 0){
            par.push(nums[i])
        }else{
            impar.push(nums[i])
        }
    }
    console.log(`Vetor de elementos pares: ${par.sort(function(a,b){return a - b})}`)
    console.log(`Vetor de elementos ${impar.sort(function(a,b){return a - b})}`)
    
}

par_impar(numeros)
