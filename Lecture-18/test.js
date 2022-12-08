function moveCapitalLetters1(str) {
    return str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
}

function moveCapitalLetters2(str) {
    let tem = "";
    let tem1 = "";
    for (let char of str){
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            tem += char;
        } else {
            tem1 += char;
        }
    }
    return tem + tem1;
}

function moveCapitalLetters3(str) {
    
    let j = 0;
    let i = 0;

    let arr = str.split('');

    while (i < arr.length) {
        if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
            j++;
        }
        i++;
    }

    return arr.join('');
}

function moveCapitalLetters(str) {
    
}

console.log(moveCapitalLetters1("hApPy"));
console.log(moveCapitalLetters1("moveMENT"));
console.log(moveCapitalLetters1("shOrtCAKE"));
console.log(moveCapitalLetters1("sAbEElKHAN"));