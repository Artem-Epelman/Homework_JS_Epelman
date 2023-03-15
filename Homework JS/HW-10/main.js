// // є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// // який при кожному
// // перезавантажені сторінки буде
// // додавати до неї +1
//
            window.onload = function() {

                let numReload = localStorage.getItem('key') || []
                numReload++
                localStorage.setItem('key', numReload)

                let div = document.createElement('div')
                document.body.append(div)

                div.append(numReload.toString())
            }

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки.
//
    let sJSON = JSON.parse(localStorage.getItem('session')) || []
    //
    let div = document.createElement('div')
    document.body.append(div)
    div.style.width = '200px'
    div.style.height = '200px'
    div.style.background = 'silver'
    div.style.display = 'block'
    //
    sJSON.push(JSON.stringify(Date.now())) // узнать как поставить корректное отображение времени
    localStorage.setItem('session', JSON.stringify(sJSON))



            // Є ще сторінка sessions.html
            // // (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
            // //     Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// в этом задании не понимаю как синхронизировать страницы...





// зробити масив на 100 об'єктів та дві кнопки prev next при завантажені
// сторінки з'являються перші 10 об'єктів. При натисканні next виводяться
// настпні 10 об'єктів. При натисканні prev виводяться попередні 10 об'єктів
//
let array = []
let i = 0

for (let i = 0; array.length < 100; i++) {

    array.push({i})

}


window.onload = function() {
    div.append(JSON.stringify(array.slice(0, 11)))
}


let div = document.createElement('div')
div.style.width = '200px'
div.style.height = '200px'
div.style.background = 'silver'
div.style.marginBottom = '0px'


let prev = document.createElement('button')
prev.innerText = '<- prev'


let next = document.createElement('button')
next.innerText = 'next ->'
next.style.marginLeft = '85px'
next.addEventListener('click', function() {
    div.innerText = null
    if (div.innerText <= 10) {
        div.append(JSON.stringify(array.slice(12, 22))) // узнать как автоматически определять индекс
    }
})

document.body.append(div, prev, next)
console.log(array)




































































