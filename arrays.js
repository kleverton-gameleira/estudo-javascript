let nums = [1,2,3,4,5,6,7,8,9,10]

function soma(num){
    return num += num
}

function div(num){
    return num / 2
}

let res = nums.map(div)
console.log(`Array Original: ${nums}`)
console.log(`Array Alterado: ${res}`)