// Boolean true false 

var t = true
var f = false

console.log(t, f)

/**
 * 
 * Boolean Operators
 * 
 * < => less than
 * > => greater than
 * == => is equal to 
 * === => is strictly equal to 
 * <= => is less than or equal to
 * >= => is greater than or equal to
 */

console.log(5 > 8) //false
console.log(5 < 8) //true
console.log(5 == 5 ) //true
console.log(5 === 5) //true


console.log(4 == 4) // true
console.log('four' == 'four') // true
console.log(4 === '4') // false
console.log(4 == '4') // true
console.log(4 === 4) // true

console.log('four' == 'Four'); // false
console.log('four' > 'Four'); // true

/**
 * 
 * Logical Operators
 * 
 * && => and
 * || => or
 *  ! => not
*/
console.clear()

console.log(t && t); // true
console.log(t || f); // true
console.log(f || t); // true
console.log(t && f); // false
console.log(f && f); // false
console.log(t || t); // true
console.log(f || f); // false

console.log(!t); // false
console.log(!f); // true

console.log('true or false and not true or not false:', ((t || f ) && (!t || !f)));

/**
 * Building the evil robot
 * 
 * Conditionals
 * 
 * if statement
 * 
 *  syntax
 * 
 *       if (condition) {
 *           // do stuff
 *       }
 */

let num = '6'

if (num > 18) {
    console.log(`${num} is greater than five.`);
}

/**
 * 
 * if/else statement
 * 
 * if (condition) {
 *      // do stuff
 *  } else {
 *     // do something else
 * }
 */

if (num > 4) {
    console.log(`${num} is greater than 4`);
} else {
    console.log(`${num} is not greater than 4`);
}

/**
 * 
 * else if statement
 * 
 * if (condition) {
 * // do stuff
 * } else if (another condition) {
 * // do other stuff
 * } else {
 * // do something else
 * }
 */

/* write a program that tells if a number is odd or even 
    if the number is odd, console "odd". If the number is even, console "even"

*/
if (isNaN(num)) {  

    console.log('not a number');

} else {

    if (num === 0) {
        console.log('even');
    } else if (num % 2 == 1) {
        console.log('odd');
    } else {
        console.log('even');
    }
}

console.log('6' & 2);

// write a program that will tell if a number is positive or negative

if (isNaN(num)!== 'number') {
    console.log('not a number');
} else {
    if (num === 0) {
        console.log('zero');
    }else if (num > 0) {
        console.log('postive');
    } else if (num > 0) {
        console.log('negative');
    }
}

/**
 * 
 * switch
 * 
 * snytax:
 * 
 * switch (expression) {
 *       case A
 *       // do stuff
 *          break;
 *         case 0;
 *         // do stuff
 *           break;
 *           case 0;
 *           // do stuff
 *           break
 *          }
 */

const now = new Date()

console.log(now.getDay());

const today = new Date() .getDay()

switch (today) {
    case 0:
        console.log('Sunday');
        break;

    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thurday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('saturday');
        break;
    default:
        console.log('Error');
        break;
    
}

// ternary operator

/**
 * 
 * Syntax:
 * 
 *      condition ? do stuff : do something else
 */

let isGameActive = false

isGameActive ? console.log(`Game on`) : console.log(`Game over`)

/**
 * Build a new and improved temperature converter
 * 
 * Covert a temperature from celsius to fahrenheit. If the temperature in fahrenheit is below freezing point, console "freezing". If the temperature is above the "boiling". Otherwise console the temperature
 */

let cel = 100

let fah = (cel * (9/ 5)) + 32

if (isNaN(cel)) {
    console.log('not a number');
} else {
    if (fah <= 32) {
        console.log('freezing');
    } else if (fah >= 212) {
        console.log('boiling');
    } else {
        console.log(fah);
    }
}

// build a light switch. If the light is on, turn it off. If the light is off, turn it on

let lightIson = true


// if (lightIson) {
//     lightIson = !lightIson
// } else {
//     lightIson = true
// }

// console.log(`The light is on?:`, lightIson)

lightIson ? lightIson = !lightIson : lightIson = true

console.log('The light is on:', lightIson)







