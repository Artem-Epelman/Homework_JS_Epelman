// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

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
