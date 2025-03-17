
// EXAMPLE:
// for (initialization; condition; afterthought) {
// 	statements
// }
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// **********

// Count down from 10 to 1.
// for (let i = 10; i >= 1; i--) {
// 	console.log(i);
// }

// Output odd numbers from 1 to 10.
// for (let i = 1; i <= 10; i += 2) {
// 	console.log(i);
// }

// Output even number from 1 to 10.
// for (let i = 2; i <= 10; i +=2) {
// 	console.log(i);
// }
	
// Output multiples of 3, starting at 6 and ending at 60.
// for (let i = 3; i <= 60; i +=3) {
// 	console.log(i);
// }
	
// Output an increasing number of # symbols, from 1 to 7, as shown below.
// let hash = "";

// for (let i = 1; i <= 7; i++) {
// 	hash += '#'
// 	console.log(hash);
// }


// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.
// DYLAN'S ANSWER:
// for(let i = 1; i <= 20; i++){
//     if (i < 4){
//         if(i % 2 == 0 ){
//             console.log(`${i} is even`)
//         } else {
//             console.log(`${i} is odd`)
//         }
//     } else {
//         if(i % 2 !== 0 && i % 3 !== 0){
//             console.log(`${i} is prime`)
//         } else if (i % 2 === 0 ){
//             console.log(`${i} is even`)
//         } else {
//             console.log(`${i} is odd`)
//         }
//     }
// }

// Iterables:
// prints characters in the string
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

// FOR IN LOOP
// const str = "Hello World";

// for (const i in str) {
// 	console.log(str[i]);
// }

// FOR OF LOOPS:
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// CONTINUE STATEMENT IN FOR LOOP:
// WILL SKIP THE L's
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// CONTINUE STATEMENT WITH 'FOR OF' AND 'FOR IN':
// const str = "Hello World";

// for (const i in str) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// for (const c of str) {
// 	if (c == "l") {
// 		continue;
// 	}

// 	console.log(c);
// }

// WHILE LOOP PRACTICE:
// Count down to 0 from a given number.
// let x = 11;

// while (x > 0) {

// 	x--;
// 	if (x == 0) {
// 		break;
// 	}

// 	console.log(x);
	
// }

// Log integers in multiples of 3 as long as they are less than 35.
// let x = 3;

// while (x <= 35) {
// 	console.log(x);
// 	x+=3;
// }

// Print integers in multiples of 5 as long as they are less than 100.
// let x = 5;

// while (x < 100 ) {
// 	console.log(x);
// 	x+=5;
// }

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// Print all prime numbers between 0 and 20.


// DO WHILE LOOP:
// ALWAYS run the code at least once
// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while (x > 50);

// LABELED STATEMENTS: LABELED LOOPS
// myLoop: while (condition) {
	// do the things
// }

// -WITH BREAK control flow statement
// let x = 1;
// let y = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;

// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;

// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// 		} else if (y % 5 == 0) {
// 			break;
// 		}
// 	}
// }

// CONTINUE STATEMENTS control flow statements
// let x = 1;
// let y = 1;

// myLoop: while (true) {
// console.log(`Outer loop ${x}.`);
// x++;

// while (true) {
// 	console.log(`Inner loop ${y}.`);
// 	y++;

// 	if (x == 5 && y % 5 == 0) {
// 		break myLoop;
// 	} else if (y % 5 == 0) {
// 		continue myLoop;
// 	}
// }
// }