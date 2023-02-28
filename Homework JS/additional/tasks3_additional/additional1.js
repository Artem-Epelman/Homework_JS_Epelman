
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


			let arrayNums = [1, 2, 3, 4, 5]

			let arrayStrings = ['a', 'b', 'c', 'd', 'e']

			let arrayBool = ['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4, 5, true, false]

			console.log(arrayNums, arrayStrings, arrayBool)
			
			
			



// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

			let nums3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

			i = 0

			while(i <= nums.length) {
				i++
				console.log(nums[i])
}


// 2. перебрати його циклом for

			for (let a = 0; a <= nums.length; a++) {
				console.log(nums[a])
			}


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом


			let b = 0

			while (b <= nums.length) {
				b++
				if(b % 2===1) {
					console.log(nums[b])
				}
			}
			
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом	

			// for (c = 0; c <= nums.length; c++) {
				// if(c % 2===1) {
					// console.log(nums[c])
			// }}	


// 5. перебрати циклом while та вивести  числа тільки парні  значення

			// let q = 0


			// while (q <= nums.length) {
				// q++
				// if(nums[q] % 2===0) {
					// console.log(nums[q])
				// }
			// }
			

// 6. перебрати циклом for та вивести  числа тільки парні  значення


			// for (let item = 0; item <= nums.length; item++) {
				// if(nums[q] % 2===0) {
					// console.log(nums[q])
				// }
			// }


// 7. замінити кожне число кратне 3 на слово "okten"

			// for (let item of nums) {
				// if (item % 3 === 0) {
					// item = 'okten'
				// } console.log(item)
// }


// 8. вивести масив в зворотньому порядку.


			// console.log(nums.reverse())




// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)	





// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

			let nums2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

			i = nums2.length

			while(i >= 0) {
				i--
				console.log(nums2[i])
}


// 2. перебрати його циклом for

			for (let a =  nums2.length; a >= 0; a--) {
				console.log(nums2[a])
			}


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом


			let b = nums2.length

			while (b >= 0) {
				b--
				if(b % 2===1) {
					console.log(nums2[b])
				}
			}
			
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом	

			for (c = nums2.length; c >= 0; c--) {
				if(c % 2===1) {
					console.log(nums2[c])
			}}	


// 5. перебрати циклом while та вивести  числа тільки парні  значення

			let q =  nums2.length


			while (q >= 0) {
				q--
				if(nums2[q] % 2===0) {
					console.log(nums2[q])
				}
			}
			

// 6. перебрати циклом for та вивести  числа тільки парні  значення


			for (let item =  nums2.length; item >= 0; item--) {
				if(nums2[q] % 2===0) {
					console.log(nums2[q])
				}
			}


// 7. замінити кожне число кратне 3 на слово "okten"

			for (let item of nums2.reverse()) {
				if (item % 3 === 0) {
					item = 'okten'
				} console.log(item)
}


