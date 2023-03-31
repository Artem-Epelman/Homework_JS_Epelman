// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
            // function minNum(a, b, c) {
            //     if (a < b && a < c) {
            //         console.log(a)
            //     } else if (b < a && b < c) {
            //         console.log(b)
            // } else if (c < a && c < b) {
            //         console.log(c)
            //     }
            // }
            // minNum(3,2,1,)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
            // function maxNum(a, b, c) {
            //     if (a > b && a > c) {
            //         console.log(a)
            //     } else if (b > a && b > c) {
            //         console.log(b)
            //     } else if (c > a && c > b) {
            //         console.log(c)
            //     }
            // }
            // maxNum(3,2,1,)


// - створити функцію яка повертає найбільше число з масиву
//
            // array.sort((a,b) => {
            //     return b-a
            // })
            // console.log(array[0])


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//



let array = [5,3,6,7,3,5,6,7,45,667,98,5,2,35,7,34,67]


function arifmetic(a) {


    for (let i = 0; i < array.length; ++i) {

        let res = 0
       res += array[i] / array.length;
        console.log(res)
    }}


arifmetic(array)








