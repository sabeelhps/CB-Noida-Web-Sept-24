// const r = 2;

// const area = Math.PI * r * r;

// console.log(area);

const radii = [2, 3, 1, 4, 6, 7, 8];

function areas(radii) {
    const res = [];
    for (let radius of radii) {
        const area = Math.PI * radius * radius;
        res.push(area);
    }

    return res;
}

// console.log(areas(radii));


// ---------------------------reverse words--------


const sentence = "The blue fox jumps over a white lazy dog";

// expected ans = "dog lazy white a over jumps fox blue The";


function reverseSentence(sentence) {
    const words = sentence.split(" ");
    words.reverse();
    return words.join(" ");
}

console.log(`Reversed sentence for \n${sentence} \n${reverseSentence(sentence)}`)


// --------------------------counts digit------------

const num = 34125;

// expected ans = 5

function countDigit(num) {
    let numofDigit = 0;

    while (num !== 0) {
        num = parseInt(num / 10);
        // numofDigit = numofDigit + 1;
        numofDigit++;
    }

    return numofDigit;
}

// console.log(`Number of digit in ${num} is : ${countDigit(num)}`);


// ------------------------Count vowels----------

const str = "Hello World";

// expected ans = 3

function countVowels(str) {
    let count = 0;

    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    return count;
}

// console.log(`Count of vowels in ${str} is : ${countVowels(str)}`);


// -------------------------calculate square root

const numsArr = [49, 64, 81, 16, 50, 30];

// expected ans = [7, 8, 9, 4]

function squareRoot(numsArr) {
    const res = [];
    for (let num of numsArr) {
        res.push(Math.sqrt(num).toFixed(2));
    }
    return res;
}


// console.log(`Square root of ${numsArr} is : ${squareRoot(numsArr)}`);


// ------------------------frequency of each letter-------

const message = "Hello World";

// expected ans - print frequency of each letter

function calculateFrequency(message) {
    const mp = new Map();

    for (let char of message) {
        if (char === " ") continue;
        
        if (mp.has(char)) {
            mp.set(char, mp.get(char) + 1);
        } else {
            mp.set(char, 1);
        }
    }

    return mp;
}

console.log(calculateFrequency(message));



// ------------------------Sum of number elements

const list = [1, 2, 3, "3476", 6, "43874", "2178832"];

// eexpected ans = 12 

function sumOfNumbers(list) {
    let sum = 0;
    for (let num of list) {
        if (typeof num === "number") {
            // sum = sum + num;
            sum += num;
        }
    }

    return sum;
}


// console.log(`Sum of all numbers in : ${list} is ${sumOfNumbers(list)}`)

// ------------------------------sum of all even digit

const number = 376347;

// expected ans = 10

function countEvenDigit(num) {
    
    let sum = 0;

    while (num !== 0) {
        const rem = num % 10;
        if (rem % 2 === 0) {
            sum = sum + rem;
        }
        num = parseInt(num / 10);
    }

    return sum;
}


// console.log(`Sum of all even digit in ${number} is : ${countEvenDigit(number)}`)

// ---------------------Capitalize the first letter of each word

const str1 = "The blue fox jumps over a white lazy dog";

// expected ans = "The Blue Fox Jumps Over A White Lazy Dog";

function capitalizeFirstLetter(str) {
    let res = [];
    const words = str.split(" ");
    for (let word of words) {
        res.push(word.replace(word[0], word[0].toUpperCase()));
    }
    const ans = res.join(" ");
    return ans;
}

capitalizeFirstLetter(str1);


// ----------------------Remove repeated words from sentence-


const sentence1 = "I dont repeat mistakes i date mistakes mistakes date repeat";

function removeDuplicateWords(sentence) {
    const words = sentence.split(" ");
    const set = new Set(words);
    
    let res = [];
    for (let word of set) {
        res.push(word);
    }
   
    return res.join(" ");
}

console.log(sentence1);
console.log(removeDuplicateWords(sentence1));


// -----------------flattening the array


const myArr = [[1, 2], [3, 4, 5], ["Hello", true], [5, [true, false]], 99, 100];

// expected result [1,2,3,4,5,"Hello",true,5,[true,false], 99, 100];






