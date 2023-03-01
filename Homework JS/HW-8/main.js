// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

		function User(id, name, surname, email, phone) {
			this.id = id;
			this.name = name;
			this.surname = surname;
			this.email = email;
			this.phone = phone;
		}

		let arrayUsers = [new User(2, 'Artem', 'Epelman', 'auoebf@gmail.com', '+38090000000'), 
		new User(0, 'Artem', 'Epelman0', 'auoebf@gmail.com', '+38090000000'), 
		new User(1, 'Ivan', 'Epelman1', 'auoebf@gmail.com', '+38090000000'), 
		new User(2, 'Boris', 'Epelman2', 'auoebf@gmail.com', '+38090000000'), 
		new User(3, 'Kiril', 'Epelman3', 'auoebf@gmail.com', '+38090000000'), 
		new User(4, 'Tatiana', 'Epelman4', 'auoebf@gmail.com', '+38090000000'), 
		new User(5, 'Anna', 'Epelman5', 'auoebf@gmail.com', '+38090000000'), 
		new User(6, 'Vasya', 'Epelman6', 'auoebf@gmail.com', '+38090000000'), 
		new User(7, 'Anna', 'Epelman7', 'auoebf@gmail.com', '+38090000000'), 
		new User(8, 'Artem', 'Epelman8', 'auoebf@gmail.com', '+38090000000'),
		new User(9, 'Sasha', 'Epelman9', 'auoebf@gmail.com', '+38090000000'),		]
		

		
		console.log(arrayUsers)
		
		


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


		console.log(arrayUsers.filter((argument) => argument.id % 2 === 0))
		
		
		
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)		

		console.log(arrayUsers.sort((a, b) => a.id - b.id))



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


				let Client = class {
					constructor (id, name, surname , email, phone, order) {
						this.id = id ,
						this.name = name
						this.surname = surname
						this.email = email
						this.phone = phone
						this.order = order
					}
				}

				let client = [

				new Client(0, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk', 'bread', 'meal']),
				new Client(1, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk']),
				new Client(2, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk', 'bread']),
				new Client(3, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk' ]),
				new Client(4, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk', 'bread' ]),
				new Client(5, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk', 'bread', 'meal']),
				new Client(6, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk' ]),
				new Client(7, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk',  ]),
				new Client(8, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk', 'bread', 'meal']),
				new Client(9, 'Artem', 'Epelman', 'sdas@gmail.com', '+3800000000', ['milk', 'bread', 'meal']),

				]

					console.log(client)



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

				let sortedClient = client.sort((a,b) => a.order.length - b.order.length)

				console.log(sortedClient)




// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
 // рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
	
	
				function Car(model, manufacturer, year, maxSpeed, capacity) {
							this.model = model
							this.manufacturer = manufacturer
							this.year = year
							this.maxSpeed = maxSpeed
							this.capacity = capacity



// додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
	
		
}

				let car = new Car()


				car.drive = (maxSpeed) => { console.log(( `їдемо зі швидкістю ${maxSpeed} км на годину`))}
				car.drive(123)




		
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`



			car.info = (model, maxSpeed, manufacturer, year, capacity) => console.log(`model - ${model},`,
							`maxSpeed - ${maxSpeed},`, `manufacturer - ${manufacturer},`, `year - ${year},`, `capacity - ${capacity}`)



			car.info('mazda', 280, 'Germany', 2001, 0.7)


 // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 


			car.increaseMaxSpeed = (newSpeed) => car.maxSpeed = newSpeed

			car.increaseMaxSpeed(280)




// -- changeYear (newValue) - змінює рік випуску на значення newValue



			car.changeYear = (newValue) => car.year = newValue

			car.changeYear(2003)


			
			
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car




			car.addDriver = (driver) => car.driver = driver

			car.addDriver([{'name': 'Ivan'}, {'age': 30}])


			car.model = 'mazda'
			car.capacity = 0.7
			car.manufacturer = 'Germany'


			console.log(car)


			
			
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

			class Cinderella {
				constructor(name, age, legSize) {
					this.name = name
					this.age = age
					this.legSize = legSize
				}
			}

			let cinderellasArray = [
									new Cinderella('name1', 18 ,46),
									new Cinderella('name2', 20 ,39), 
									new Cinderella('name3', 21 ,37), 
									new Cinderella('name4', 22 ,40), 
									new Cinderella('name5', 23 ,39), 
									new Cinderella('name6', 24 ,41), 
									new Cinderella('name7', 18 ,39), 
									new Cinderella('Anna' , 25 ,38),
									new Cinderella('name9', 26 ,40) 
								]
								
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

				class Prince {
					constructor(name, age, sliperSize) {
						this.name = name
						this.age = age
						this.slipperSize = sliperSize
					}
				}

				let prince = new Prince('Charming', 30, 38)
				
				console.log(prince)


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

			for (let cindy of cinderellasArray) {
				if (cindy.legSize === prince.slipperSize) {
					console.log(`Принц ${prince.name} має взяти в дружину дівчину ${cindy.name}`)
				}
			}

			
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

			cinderellaFoo = cinderellasArray.find((e) => e.age === 25 && e.legSize === 38)

			console.log(cinderellaFoo)


// 			- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


			class Car2 {
				constructor(model, manufacturer, year, maxSpeed, capacity) {
					this.model = model
					this.manufacturer = manufacturer
					this.year = year
					this.maxSpeed = maxSpeed
					this.capacity = capacity
				}
			}

			let car2 = new Car2()


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`




			car2.drive = (maxSpeed) => { console.log(( `їдемо зі швидкістю ${maxSpeed} км на годину`))}
			car2.drive(123)





// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`



			car2.info = (model, maxSpeed, manufacturer, year, capacity) => console.log(`model - ${model},`,
				`maxSpeed - ${maxSpeed},`, `manufacturer - ${manufacturer},`, `year - ${year},`, `capacity - ${capacity}`)



			car2.info('honda', 280, 'France', 2001, 1.8)


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed



			car2.increaseMaxSpeed = (newSpeed) => car2.maxSpeed = newSpeed

			car2.increaseMaxSpeed(280)




// -- changeYear (newValue) - змінює рік випуску на значення newValue



			car2.changeYear = (newValue) => car2.year = newValue

			car2.changeYear(2003)




// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car2




			car2.addDriver = (driver) => car2.driver = driver

			car2.addDriver([{'name': 'Stepan'}, {'age': 28}])


			car2.model = 'honda'
			car2.capacity = 1.2
			car2.manufacturer = 'France'


			console.log(car2)


































