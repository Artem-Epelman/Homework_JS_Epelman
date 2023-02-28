// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
	
	// console.log(['hello world', 'lorem ipsum', 'javascript is cool'].length)

	
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
	  words1 = ['hello world', 'lorem ipsum', 'javascript is cool']
	 // for (let item of words1) {
		// console.log(item.toUpperCase())
		
	 // } 
	 
	 
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'	 

		words2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
		
		// for (let item of words1) {
		// console.log(item.toLowerCase())
		// }
		
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

	// let str = ' dirty string   '.trim()
		
	 // console.log(str)
	 
	 
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    // let str = 'Ревуть воли як ясла повні';
    // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']	 
	
	// let stringToarray = (s) => s.split()
	
	// console.log(stringToarray(str))
	
	
	
// - є масив чисел 

// . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

		let numbers = [10,8,-7,55,987,-1011,0,1050,0]
		// newNums = numbers.map((s) => s.toString())

		// console.log(newNums)
		
		
		

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]	
		// let nums = [11,21,3];

		// let sortNums = (value, direction) => {
			// if (direction ==='ascending') {
				// return value.sort((a,b) => a-b)
			// } else if(direction ==='descending') {
				// return value.sort((a,b) => b-a)
			// }
		// }

		// console.log(sortNums(nums, 'descending'))
		
// - є масив
// let coursesAndDurationArray = [
    // {title: 'JavaScript Complex', monthDuration: 5},
    // {title: 'Java Complex', monthDuration: 6},
    // {title: 'Python Complex', monthDuration: 6},
    // {title: 'QA Complex', monthDuration: 4},
    // {title: 'FullStack', monthDuration: 7},
    // {title: 'Frontend', monthDuration: 4}
// ];
 // -- відсортувати його за спаданням за monthDuration
 // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

		// console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration-a.monthDuration))

		// console.log(coursesAndDurationArray.filter(a => a.monthDuration > 5))

		// let newArray = coursesAndDurationArray.map((value, index) => {
			// return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
		// })

		// console.log(newArray)
		
		
 // описати колоду карт (від 6 до туза без джокерів)
 
 let cards = [
//spade black
  { cardSuit: 'spade', value: '6', color: 'black' },
  { cardSuit: 'spade', value: '7', color: 'black' },
  { cardSuit: 'spade', value: '8', color: 'black' },
  { cardSuit: 'spade', value: '9', color: 'black' },
  { cardSuit: 'spade', value: '10', color: 'black' },
  { cardSuit: 'spade', value: 'jack', color: 'black' },
  { cardSuit: 'spade', value: 'queen', color: 'black' },
  { cardSuit: 'spade', value: 'king', color: 'black' },
  { cardSuit: 'spade', value: 'ace', color: 'black' },
//diamond red
  { cardSuit: 'diamond', value: '6', color: 'red' },
  { cardSuit: 'diamond', value: '7', color: 'red' },
  { cardSuit: 'diamond', value: '8', color: 'red' },
  { cardSuit: 'diamond', value: '9', color: 'red' },
  { cardSuit: 'diamond', value: '10', color: 'red' },
  { cardSuit: 'diamond', value: 'jack', color: 'red' },
  { cardSuit: 'diamond', value: 'queen', color: 'red' },
  { cardSuit: 'diamond', value: 'king', color: 'red' },
  { cardSuit: 'diamond', value: 'ace', color: 'red' },
//heart red
  { cardSuit: 'heart', value: '6', color: 'red' },
  { cardSuit: 'heart', value: '7', color: 'red' },
  { cardSuit: 'heart', value: '8', color: 'red' },
  { cardSuit: 'heart', value: '9', color: 'red' },
  { cardSuit: 'heart', value: '10', color: 'red' },
  { cardSuit: 'heart', value: 'jack', color: 'red' },
  { cardSuit: 'heart', value: 'queen', color: 'red' },
  { cardSuit: 'heart', value: 'king', color: 'red' },
  { cardSuit: 'heart', value: 'ace', color: 'red' },
//clubs black
  { cardSuit: 'clubs', value: '6', color: 'black' },
  { cardSuit: 'clubs', value: '7', color: 'black' },
  { cardSuit: 'clubs', value: '8', color: 'black' },
  { cardSuit: 'clubs', value: '9', color: 'black' },
  { cardSuit: 'clubs', value: '10', color: 'black' },
  { cardSuit: 'clubs', value: 'jack', color: 'black' },
  { cardSuit: 'clubs', value: 'queen', color: 'black' },
  { cardSuit: 'clubs', value: 'king', color: 'black' },
  { cardSuit: 'clubs', value: 'ace', color: 'black' },
]
 // - знайти піковий туз
		// console.log(cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'))

 // - всі шістки
		// console.log(cards.filter((a) => a.value === '6'))
		
 // - всі червоні карти
		// console.log(cards.filter((a) => a.color === 'red'))
		
 // - всі буби
		// console.log(cards.filter((a) => a.cardSuit === 'clubs'))

 // - всі трефи від 9 та більше
 
		// console.log(cards.filter((a) => a.cardSuit === 'clubs' && a.value >= 9))

    // cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    // value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    // color:'', // 'red','black'
// }



// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
    // spades:[],
    // diamonds:[],
    // hearts:[],
    // clubs:[]
// }


		// let sortedCards = cards.reduce((accumulator, card) =>{
			// accumulator[card.cardSuit].push(card);
			// return accumulator
		// }, {spade:[], diamond:[],heart:[],clubs:[]}, 
		// )

		// console.log(sortedCards)
		
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
	

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass	
		// let newCourses = coursesArray.filter((value) => value.modules.includes('sass'))
		// console.log(newCourses)
		
// --написати пошук всіх об'єктів, в який в modules є sass	

	// let newCourses2 = coursesArray.filter((value) => value.modules.includes('docker'))
		// console.log(newCourses2)

		
		







		


	
	
	
	
	  

	  
	 
	  
	 
	  
	  
	
	