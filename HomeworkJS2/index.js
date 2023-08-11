//  1. Напишите функцию, которая принимает два числовых аргумента
//   и возвращает наименьшее из них.

function returnMin(a, b) {
  console.log(Math.min(a, b));
}
returnMin(1, 5);

// 2. Напишите функцию, которая принимает два числовых аргумента
//  и выводит в консоль все четные числа от большего к меньшему.

function returnEven(start, end) {
  if (start < end) {
    [start, end] = [end, start];
  }
  for (let num = start; num >= end; num--) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}
returnEven(3, 11);

// 3. Напишите функцию power, которая принимает два числовых аргумента
//  (основание степени и саму степень) и возвращает число в указанной степени.
//  Значение степени должно быть указано по умолчанию 2.

function power(a, b = 2) {
  console.log(a ** b);
}
power(5);

// 4. Напишите функцию, которая принимает числовой аргумент n
//  и считает сумму чисел от 1 до n.

function sum(n) {
  let numbersSum = 0;
  for (let i = 1; i <= n; i++) {
    numbersSum += i;
  }
  console.log(numbersSum);
}
sum(10);

// 5. Напишите функцию, которая принимает два числовых аргумента
//  n и m и считает сумму четных чисел и нечетных чисел от n до m.
//  Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function evenOddSum(n, m) {
  if (n > m) {
    [n, m] = [m, n];
  }
  let numEvenSum = 0;
  let numOddSum = 0;
  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      numEvenSum += i;
    } else {
      numOddSum += i;
    }
  }
  console.log("Sum of even numbers:", numEvenSum);
  console.log("Sum of odd numbers:", numOddSum);
}
evenOddSum(10, 25);

// 6. Напишите функцию, которая принимает в качестве аргументов массив строк,
//   а возвращает первый самый длинный элемент массива.
//   Если входной массив пуст, функция возвращает null.
//   Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
//   Пример: [ 'one', 'two', 'three' ] => 'three'

function arrStrings(arr) {
  if (arr.length === 0) {
    return null;
  }
  let longestElement = arr[0];
  // for(let i = 0; i < arr.length; i++){
  //     if(arr[i].length > longestElement.length){
  //         longestElement = arr[i]
  //     }
  // }
  for (const string of arr) {
    if (string.length > longestElement.length) {
      longestElement = string;
    }
  }
  console.log("Longest element:", longestElement);
}
arrStrings(["one", "two", "three1", "three2"]);
