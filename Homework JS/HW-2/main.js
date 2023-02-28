// //- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [13,54,true,'asd', 'qwerty', false, 'Okten', 'Artem', 111, 222]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const arr1 = {
    title:'arr1 title',
    pageCount:'arr1 pageCount',
    genre: 'arr1 genre'
}

const arr2 = {
    title:'arr2 title',
    pageCount:'arr2 pageCount',
    genre: 'arr2 genre'
}

const arr3 = {
    title:'arr3 title',
    pageCount:'arr3 pageCount',
    genre: 'arr3 genre'
}

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre,
//  // authors. Поле "автори" - масив. Кожен автор має поля name,age



const book1 = {
    title:'book1 title',
    pageCount:'book1 pageCount',
    genre: 'book1 genre',
    authors: [{name: 'Anna', age: 21}]
};

const book2 = {
    title:'book2 title',
    pageCount:'book2 pageCount',
    genre: 'book2 genre',
    authors: [{name: 'Anna', age: 21}]
};

const book3 = {
    title:'book3 title',
    pageCount:'book3 pageCount',
    genre: 'book3 genre	',
    authors: [{name: 'Anna', age: 21}]
};




// // - Створити масив з 10 об'єктами які описують сутніть "користувач".
//  // Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [{
    user0: {name: 123, username: null, password: 100},
    user1: {name: null, username: null, password: 111},
    user2: {name: null, username: null , password: 222},
    user3: {name: null, username: null , password: 333},
    user4: {name: null, username: null , password: 444},
    user5: {name: null, username: null , password: 555},
    user6: {name: null, username: null , password: 666},
    user7: {name: null, username: null , password: 777},
    user8: {name: null, username: null , password: 888},
    user9: {name: null, username: null , password: 999}
}];

console.log(users[0].user0.password)
console.log(users[1].user1.password)
console.log(users[2].user2.password)
console.log(users[3].user3.password)
console.log(users[4].user4.password)
console.log(users[5].user5.password)
console.log(users[6].user6.password)
console.log(users[7].user7.password)
console.log(users[8].user8.password)
console.log(users[9].user9.password)




// // Логічні розгалуження:
// // - Є змінна х, якій ви надаєте довільне числове значення.
// // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//  // Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if (x != 0) {
    console.log(true)
} else {
    console.log(false)
}


// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).


let time = 30

if (time <= 15) {
    console.log('time припадає на першу частину години')
} else if (time <= 16 || time >= 30) {
    console.log('time припадає на другу частину години')
} else if (time <= 31 || time >= 45) {
    console.log('time припадає на третю частину години')
} else if (time <= 46 || time >= 60) {
    console.log('time припадає на четверту частину години')
} else {
    console.log('Error')
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 10;

if (day <= 10) {
    console.log('day припадає на першу декаду місяця')
} else if (day >= 11 || day<= 20) {
    console.log('day припадає на другу декаду місяця')
} else if (day >= 21 || day <= 31) {
    console.log('day припадає на третю декаду місяця')
} else {
    console.log('Error')
}

// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий
// // номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let plan = prompt('Введіть порядковий номер дня тижня: ')

switch (plan) {
    case '1':
        alert('Today is Monday. To do list: 123');
        break
    case '2':
        alert('Today is Tuesday. To do list: 123')
        break
    case '3':
        alert('Today is Wensday. To do list: 123')
        break
    case '5':
        alert('Today is Thirday. To do list: 123')
        break
    case '6':
        alert('Today is Friay. To do list: 123')
        break
    case '7':
        alert('Today is Satuday. To do list: 123')
        break
    default:
        alert('Error')
}

// // - Користувач вводить або має два числа.
// // Потрібно знайти та вивести максимальне число з тих двох .
// // Також потрібно врахувати коли введені рівні числа.

let firstNum = prompt('Enter first number')
let secondNum = prompt('Enter second number')

if (firstNum > secondNum) {
    console.log(`${firstNum} is bigger`)
} else if (firstNum < secondNum) {
    console.log(`${secondNum}  is bigger`)
} else if (firstNum == secondNum) {
    console.log (`${firstNum} and ${secondNum} is same`)
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let a = 0;
let b = a || 'smth';
console.log(b)



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Супер')
}