// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

            // function rectanArea(a,b) {
            //     return (a+b)*2;
            // 
            // }

// - створити функцію яка обчислює та повертає площу кола з радіусом r

            // function circArea(r, p = 3.14) {
            //      return ((r*2)*p)
            //  }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

            // function cylArea(h, r, p = 3.14*2) {
            //    return((p*r)*(h+r))
            //  }

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrayNums = [1, 2, 3];

            // function arr(arr) {
            //     for (let a of arr) {
            //         return a
            //     }
            // }

            // arr(arrayNums)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

            // function par(text) {
            //    document.write(`<p>${text}</p>`)
            // }
            // par('123')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

            // function ul(text) {
            //     document.write(`<ul>`)
            //     for (let i = 0; i < 3; i++) {
            //         document.write(`<li>${text}</li>`)
            //     }
            //     document.write(`</ul>`)
            // }    

            // ul('abracadabra')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через
 // аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

            // function ul2(text,num) {
            //     document.write(`<ul>`)
            //     for (let i = 0; i < num; i++) {
            //         document.write(`<li>${text}</li>`)
            //     }
            //     document.write(`</ul>`)
            // } 

            // ul2('asdasd', 5)   

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


            // function arr2(arr) {
            //     for (let elements of arr) {
            //         document.write(`<li>${elements}</li>`)
            //     }
            // }
            // arr2(arrayNums)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
 // Для кожного об'єкту окремий блок.

            // let users = [
            // {id: 1, name: 'Ivan', age: 18},
            // {id: 2, name: 'Stepan', age: 19},
            // {id: 3, name: 'Roman', age: 20}
            // ];

            //  function arr3(arr) {

            //         for (let elements of arr) {
            //             document.write(`<li>${elements.id}, ${elements.name}, ${elements.age}</li>`)
            //     }
            //         document.write(`</ul>`)
            //  }
            //  arr3(users)


// - створити функцію яка повертає найменьше число з масиву

            function minNum(arr) {
                for (let min = 0; arr > min; min--) {
                    console.log(arr)
                }               
            }

minNum(arrayNums)



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 // Приклад sum([1,2,10]) //->13


// function sum(arr) {
//     let res = 0
//     for (let num of arr) {
//         res+=num
//     } 
//     console.log(res)
// }

// sum(arrayNums)




