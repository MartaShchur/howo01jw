// дз 1

// Change code below this line

// const productName = "Droid";
// console.log(productName);
// const pricePerItem = 2000;
// console.log(pricePerItem);

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000


// const productName = 'Droid';
// const pricePerItem = 3500;
// // const message = "You picked Droid, price per item is 3500 credits"

// // Change code below this line

// const message = 'You picked ${'Droid'}, price per item is ${3500} credits';


// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// // const message = `You ordered droids worth  ${'totalPrice'} credits. Delivery  (${'deliveryFee'} credits) is included in total price.`


// Практика

// Напишіть код, який перевіряє, чи користувач має право на знижку
// на товар.Користувач має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).

// const pens = true;
// const stud = false;
// const age = 55;
// let discount = false
// if (pens || stud || (age > 12 && >= age <= 18)) {
//     discount = true
// }
// console.log(discount);


// Напишіть код, який перевіряє, чи можна отримати водійські права.
// Користувач може отримати водійські права, якщо йому виповнилося
// 18 років і він має право на працевлаштування.

// const age = 23;
// const rights = true;
// let IsRights = false;

// if (age >= 18 && rights) {
//     IsRights = true;
// }
// console.log(IsRights);

// Напишіть код, який перевіряє, чи можна відкрити двері.
// Двері можна відкрити, якщо ключ у власника або у його
// друга, або двері не закриті на замок.

// const hasKey = false;
// const isFriend = true;
// const isDoorClose = false;
// let canOpenDoor = false;

// if (hasKey || isFriend || !isDoorClose) {
//     canOpenDoor = true;
// }
// console.log(canOpenDoor);

// Напишіть код, який перевіряє, чи є введене користувачем значення
// числом, і виводить його квадрат, якщо це число.Якщо значення
// не є числом, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt("Введіть число");
//  console.log(answer);
// const numbValue = Number(answer);
// console.log(numbValue);
// if (isNaN(numbValue)) {
//     alert("Невалідне значення")
// }
// else {
//     const sqNumb = Math.pow(numbValue, 2)
//     alert(`Результат обчислень ${sqNumb} `)
// }


// Напишіть код, який перевіряє, чи введене користувачем значення є рядком
// і не містить символ $. Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt(`Введіть рядок без символа "$"`);
// if (typeof answer === `string` && !answer.includes)


// Напишіть код, який перевіряє (за допомогою тернарного оператору),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення на екран за допомогою alert.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt(`Введіть число`);
// const message = answer % 2 === 0 ? `число парне` : `число непарне`
// alert(message);


// За допомогою циклу for потрібно виконати
// підрахунок кількості символів в рядку

// const str = "Hello, world!";
// let count  = 0;

// for (let i = 0; i < str.length; i += 1) {
//     count += 1;
//     console.log(count);
// }

// console.log(count);


//3. Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//         console.log(`парне число, ${i} `);
//     } else {

//         console.log(`не парне число, ${i} `);
//     }
// }

//4. За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let total = 0;

// for (let i = min; i <= max; i+=1) {
//     if (i % 2 !== 0) {
//         continue
//     } else {
//         total += i;
//     }
// }
//     console.log(total);
 


// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести пароль доти, доки він не введе вірний пароль.

// const ADMIN_PASSWORD = 'dhhgjhjyuk';
// let userPassword;
// do {
//     userPassword = prompt ("Введіть пароль")
// }
// while (userPassword !== ADMIN_PASSWORD)
// console.log( 'Ви ввели вірний пароль');


// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести число доти, доки він не введе число, яке більше 10.

// let number;
// do {
//     number = prompt("Введіть число");
// } while (number <= 10);
// console.log('Ви ввели вірний число');



// Напишіть скрипт, котрий отримає від користувача число (кількість хвилин) і виведе в консоль
// рядок у форматі годин і хвилин, тобто, якщо користувач вказав число 70, в консолі отримаємо "01:10"

const minute = 70;
const hour = Mathfloor(minute / 60);
const str = Srt