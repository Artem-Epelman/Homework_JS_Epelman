// // є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// // який при кожному
// // перезавантажені сторінки буде
// // додавати до неї +1

            // window.onload = function() {
            //
            //     let numReload = localStorage.getItem('key') || num
            //     numReload++
            //     localStorage.setItem('key', numReload)
            //
            //     let div = document.createElement('div')
            //     document.body.append(div)
            //
            //     div.append(numReload.toString())
            // }


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//     Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let sJSON = (localStorage.getItem('key') || [])

s = JSON.parse(sJSON)



s.push(Date.now())

let div = document.createElement('div')
div.style.width = '100px'
div.style.height = '100px'
div.style.margin = '20px'
div.style.background = 'silver'



document.body.appendChild(div)

div.append(`Now is ${s}`)

localStorage.setItem('key', JSON.stringify(s))

































