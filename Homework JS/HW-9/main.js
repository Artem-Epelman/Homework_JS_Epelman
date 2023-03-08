// // // // - створити блок
// // //
// // //             let newDiv = document.createElement('div')
// // //
// // // //  - додати йому класи wrap, collapse, alpha, beta
// // //
// // //             newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta')
// // //
// // // // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // //
// // //             let divStyles = newDiv.style
// // //
// // //             divStyles.backgroundColor = 'red'
// // //             divStyles.color = 'red'
// // //             divStyles.fontSize = '15px'
// // //
// // // // - додати цей блок в body.
// // //
// // //             document.body.append(newDiv)
// // //
// // // // - клонувати його повністю, та додати клон в body.
// // //
// // //             newDiv2 = newDiv.cloneNode(true);
// // //             document.body.append(newDiv2)
// // //
// // // //- Є масив
// // // // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// // //
// // //             let array = ['Main','Products','About us','Contacts']
// // //
// // //                         document.body.innerHTML = `<ul>
// // //                             <li>'Main'</li>
// // //                             <li>'Products'</li>
// // //                             <li>'About us'</li>
// // //                             <li>'Contacts'</li>
// // //
// // //                         </ul>`
// // //
// // // // - Є масив
// // // // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // // // Завдання робити через цикли.
// // //
// //             let coursesAndDurationArray = [
// //
// //                 {title: 'JavaScript Complex', monthDuration: 5},
// //
// //                 {title: 'Java Complex', monthDuration: 6},
// //
// //                 {title: 'Python Complex', monthDuration: 6},
// //
// //                 {title: 'QA Complex', monthDuration: 4},
// //
// //                 {title: 'FullStack', monthDuration: 7},
// //
// //                 {title: 'Frontend', monthDuration: 4}
// //             ];
// // //
// // //             for (let coursesInfo of coursesAndDurationArray) {
// // //
// // //                 let title = document.innerHTML = coursesInfo.title
// // //                 let monthDuration = document.innerHTML = coursesInfo.monthDuration
// // //                 console.log(`${title} - ${monthDuration}`)
// // //             }
// // //
// // //
// // //
// // // // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// // // // з title  елементу, та <p class='description'> з monthDuration елементу.
// // // //     Завдання робити через цикли.
// // //
// // //
// // //
// // //             for (let simps of coursesAndDurationArray) {
// // //                 let div = document.createElement('div')
// // //                 div.classList = 'simps'
// // //                 document.body.append(div)
// // //                 let h1 = document.createElement('h1')
// // //                 h1.innerText = simps.title
// // //                 h1.classList = 'heading'
// // //                 div.append(h1)
// // //                 let p = document.createElement('p')
// // //                 p.innerText = simps.monthDuration
// // //                 p.classList = 'description'
// // //                 div.append(p)
// // //             }
// // //
// // // // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // // // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// // // // Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// // //
// //             let simpsons = [
// //                 {
// //                     name: 'Bart',
// //                     surname: 'Simpson',
// //                     age: 10,
// //                     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
// //                     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
// //                 },
// //                 {
// //                     name: 'Homer',
// //                     surname: 'Simpson',
// //                     age: 40,
// //                     info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
// //                     photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
// //                 },
// //                 {
// //                     name: 'Marge',
// //                     surname: 'Simpson',
// //                     age: 38,
// //                     info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
// //                     photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
// //                 },
// //                 {
// //                     name: 'Lisa',
// //                     surname: 'Simpson',
// //                     age: 9,
// //                     info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
// //                     photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
// //                 },
// //                 {
// //                     name: 'Maggie',
// //                     surname: 'Simpson',
// //                     age: 1,
// //                     info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
// //                     photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
// //                 },
// //             ];
// // //
// //             for (let simpsonItems of simpsons) {
// //                     let simpsDiv = document.createElement('div')
// //                 simpsDiv.classList = 'member'
// //                     document.body.append(simpsDiv)
// //                     let smth = `${simpsonItems.name} ${simpsonItems.surname}, ${simpsonItems.age}, ${simpsonItems.info}, ${simpsonItems.photo}`
// //                 simpsDiv.innerText = smth
// //             }
// //
//
//
// // Цикл в циклі
//
// // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть
// // зберігатись значення окремих властивостей,
// // для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//
//
//             let coursesArray = [
//                 {
//                     title: 'JavaScript Complex',
//                     monthDuration: 5,
//                     hourDuration: 909,
//                     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//                 },
//                 {
//                     title: 'Java Complex',
//                     monthDuration: 6,
//                     hourDuration: 909,
//                     modules: ['html',
//                         'css',
//                         'js',
//                         'mysql',
//                         'mongodb',
//                         'angular',
//                         'aws',
//                         'docker',
//                         'git',
//                         'java core',
//                         'java advanced']
//                 },
//                 {
//                     title: 'Python Complex',
//                     monthDuration: 6,
//                     hourDuration: 909,
//                     modules: ['html',
//                         'css',
//                         'js',
//                         'mysql',
//                         'mongodb',
//                         'angular',
//                         'aws',
//                         'docker',
//                         'python core',
//                         'python advanced']
//                 },
//                 {
//                     title: 'QA Complex',
//                     monthDuration: 4,
//                     hourDuration: 909,
//                     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//                 },
//                 {
//                     title: 'FullStack',
//                     monthDuration: 7,
//                     hourDuration: 909,
//                     modules: ['html',
//                         'css',
//                         'js',
//                         'mysql',
//                         'mongodb',
//                         'react',
//                         'angular',
//                         'aws',
//                         'docker',
//                         'git',
//                         'node.js',
//                         'python',
//                         'java']
//                 },
//                 {
//                     title: 'Frontend',
//                     monthDuration: 4,
//                     hourDuration: 909,
//                     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//                 }
//             ];
//
//             let coursesDiv = document.createElement('div')
//
//             for (let courseItems of coursesArray) {
//
//                 let div = document.createElement('div')
//                 document.body.append(div)
//
//                 let titleDiv = document.createElement('div')
//                 titleDiv.innerText = courseItems.title
//                 div.append(titleDiv)
//
//                 let monthDurationDiv = document.createElement('div')
//                 monthDurationDiv.innerText = courseItems.monthDuration
//                 div.append(monthDurationDiv)
//
//                 let hourDurationDiv = document.createElement('div')
//                 hourDurationDiv.innerText = courseItems.hourDuration
//                 div.append(hourDurationDiv)
//
//                 let ul = document.createElement('ul')
//
//                 for (let ulS of courseItems.modules) {
//                     let li = document.createElement('li')
//
//                     li.innerText = ulS
//                     ul.append(li)
//                 }
//                 div.append(ul)
//
//                 div.style.border = '5px solid red'
//                 div.style.margin = '5px'
//                 div.style.marginBottom = '100px'
//                 div.style.textAlign = 'center'
//
//
//                 titleDiv.style.border = '5px solid'
//                 titleDiv.style.margin = '10px'
//                 titleDiv.style.padding = '10px'
//                 div.style.fontSize = '30px'
//
//                 monthDurationDiv.style.border = '5px solid'
//                 monthDurationDiv.style.margin = '5px'
//
//                 hourDurationDiv.style.border = '5px solid'
//                 hourDurationDiv.style.margin = '5px'
//
//                 ul.style.border = '5px solid'
//                 ul.style.margin = '5px'
//                 ul.style.textAlign = 'left'
//             }


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".




            // let h1 = document.createElement('h1')
            // h1.id = 'text'
            // document.body.append(h1)
            // h1.innerText = 'text'
            //
            //
            // let button = document.createElement('button')
            // document.body.append(button)
            // button.innerText = 'button'
            //
            // button.onclick = () => {
            //     h1.style.display = 'none'
            //     document.body.append(h1, button)
            // }


































