

let usersUrl = new URL('https://jsonplaceholder.typicode.com/users')
fetch(usersUrl) // робимо запит
    .then(obj => obj.json())
        .then(result => {

        for (let i of result) { // будуємо DOM структуру
            let id = i.id
            let name = i.name
            let a = document.createElement('a')
            a.innerText = `${id} ${name}`
            a.style.display = 'block'



            a.href = `user-details.html?id=${id}` // формируем ссылку + id
            document.body.append(a)
        }
    })
