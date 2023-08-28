// 1)Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].

const array = [];
function addStringToArray(string, number) {
  for (let i = 0; i < number; i++) {
    array.push(string);
  }
}
addStringToArray("dog", 3);
console.log(array);

// 2)Написать функцию, которая получает в качестве аргумента массив с числами. Функция нужна для расчета суммы четных чисел в массиве. Так же написать новую функцию для расчета суммы нечетных чисел в массиве.

// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.

let arrayOfNumbers = [1, 2, 5, 8, 10];

function sumOfEvenNumbers(arrayOfNumbers) {
  let sumOfEven = 0;
  for (const number of arrayOfNumbers) {
    if (number % 2 === 0) {
      sumOfEven += number;
    }
  }
  return sumOfEven;
}

function sumOfOddNumbers(arrayOfNumbers) {
  let sumOfOdd = 0;
  for (const number of arrayOfNumbers) {
    if (number % 2 !== 0) {
      sumOfOdd += number;
    }
  }
  return sumOfOdd;
}
function sum(sumOdd, sumEven) {
  return Math.max(sumEven, sumOdd);
}
console.log(
  sum(sumOfEvenNumbers(arrayOfNumbers), sumOfOddNumbers(arrayOfNumbers))
);

// 3)Напишите функцию, которая как аргумент принимает строку. Эта функция возвращает это слово в развернутом виде. Пример:  “cat” => “tac”

function reverseString(string) {}
