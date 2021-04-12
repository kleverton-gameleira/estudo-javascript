let nomes =[]
let nums = [2,1,3,6,5,8,9,7,4]
console.log(nomes)
nomes.push('kleverton','tayane','derek','pedro')
console.log(nomes)
console.log(nomes.length)
nomes.push('karla')
console.log(nomes)
console.log(nomes.sort())
nums.push(10)
console.log(nums.sort(function(a,b){return a - b})) // ordenado o array nums
delete nums[nums.length - 1]
console.log(nums)
