let firstOcenka = prompt('Введите оценку за первый арасынак');
let firstProcent = prompt('Какой процент взять?');
let mainFirst = firstOcenka * (firstProcent * 0.01); 
// alert(mainFirst)


let secondOcenka = prompt('Введите оценку за второй арасынак');
let secondProcent = prompt('Какой процент взять?');
let mainSecond = secondOcenka * (secondProcent * 0.01);
// alert(mainSecond)

let firstDz = prompt('Введите оценку за первую домашку');
let firstProcentDz = prompt('Какой процент взять?');
let mainFirstDz = firstDz * (firstProcentDz * 0.01); 
// alert(mainFirstDz)

let secondDz = prompt('Введите оценку за вторую домашку');
let secondProcentDz = prompt('Какой процент взять?');
let mainSecondDz = secondDz * (secondProcentDz * 0.01);
// alert(mainSecondDz);

let final = prompt('Введите оценку за Финал');
let finalProcent = prompt('Какой процент взять?')
let mainFinalProcent =  final * (finalProcent * 0.01); 
// alert(mainFinalProcent);


let result = mainFirst + mainSecond + mainFirstDz + mainSecondDz + mainFinalProcent;
alert('Ваш GENEL ORTALAMA: ' + result);
