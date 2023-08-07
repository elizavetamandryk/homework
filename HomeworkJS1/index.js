const arr = []
for(let i = 0; i <=10; i+=2){
    arr.push(i)
}
console.log(arr)

const arr2 = []
for(let i = 55; i >= 20; i--){
    arr2.push(i)
}
console.log(arr2)

const numbers = [3,5,11,2,8,1,6]
const numbers_squared = []
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
    numbers_squared.push(numbers[i]**2)
}
const last_elem = numbers_squared[numbers_squared.length -1]
console.log(numbers_squared)
console.log(last_elem)

const user = {
firstName:'Ivan',
lastName:'Ivanov',
age:20,
salary:500
}
const 
fullName = user.firstName + ' ' + user.lastName
console.log(`User's name is: ${fullName}. He is ${user.age} years old` )

const numbers2 = [3,5,11,2,8,1,6]
let positiveNumSum = 0
for(let i = 0; i < numbers2.length; i++){
    if(numbers2[i] > 0){
        positiveNumSum = positiveNumSum + numbers2[i]
}
}
console.log("Сумма положительных чисел:", positiveNumSum)

