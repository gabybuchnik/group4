class StringUtils {
    constructor() {
        this.numberOfVowels = 0;
    }
    getVowels(str = "The quick brown fox") {
        let numberOfVowels = 0;
        str = str.toLowerCase();
        for (let letter of str) {
            if (letter === "a" || letter === "e" || letter === "u" || letter === "" || letter === "i" || letter === "o") {
                numberOfVowels++;
            }
        }
        return numberOfVowels;
    }
    removeChar(str, pos = 0) {
        str = str.replace(str[pos], "");
        return str;
    }
    incrementLetters(str) {
        let strNew = "";
        let asciChar = "";
        for (let letter of str) {
            //case break word 
            if (letter === " ") {
                strNew += " ";
                continue;
            }
            //case last charecter
            else if (letter === "z" || letter === "Z") {
                strNew += "a";
                continue;
            }
            //following charecter
            asciChar = letter.charCodeAt();
            asciChar++;
            strNew += String.fromCharCode(asciChar);
        }
        return strNew;
    }
}

let su1 = new StringUtils();
console.log(`getVowels : ${su1.getVowels("test")}`);
console.log(`removeChar : ${su1.removeChar("The quick brown fox")}`);
console.log(`incrementLetters : ${su1.incrementLetters("abcd efgh ijkl mnop qrst uvwx yz")}`);