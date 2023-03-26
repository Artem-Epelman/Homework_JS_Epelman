// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні
// на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// let form = document.forms[0]
//
// form.send.addEventListener('click', (ev) => {
//     ev.preventDefault()
//     let div = document.createElement('div')
//     document.body.append(div)
//     div.append(form.name.value, ' ', form.surname.value, `, your age is ${form.age.value}`)
// })

// є сторінка, на якій є блок, в якому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1
//
//
// let number = localStorage.getItem('key') || 0
//
// console.log((number))
//
// number++
//
// document.body.innerText = number
//
//
//
// localStorage.setItem('key', number)

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//     Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//
// window.onload = () => {
//
//     let arr = JSON.parse(localStorage.getItem('key2')) || []
//     arr.push(new Date().toString())
//     localStorage.setItem('key2', JSON.stringify(arr))
// }

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
// let array = []
//
// for (let i = 1; i <= 100; i++) {
//     array.push(i)
// }
//
// let count = 0
// let div = document.getElementById('div')
// let prev = document.getElementById('prev')
// let next = document.getElementById('next')
// div.innerText = (array.slice(count, count + 10))
//
//
// next.addEventListener('click', (ev) => {
//     ev.preventDefault()
//     count += 10
//     let d = div.innerText = array.slice(count, count + 10)
//     prev.style.display = 'inline-block'
//
//     if (d.includes(100)) {
//         next.style.display = 'none'
//         prev.style.display = 'show'
//     }})
//
//
// prev.addEventListener('click', (ev) => {
//     ev.preventDefault()
//     next.style.display = 'inline-block'
//     count -= 10
//     let d = div.innerText = array.slice(count-10, count)
//
//     if(d.includes(10)) {
//         prev.style.display = 'none'
//         next.style.display = 'inline-block'
//     }})






























































// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//     Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)