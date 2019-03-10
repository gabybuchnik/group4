class RandomWord {
    constructor(arr) {
        this.arr = arr;
    }
    randomize(number = 6) {
        let newArr = [];
        if (!Array.isArray(this.arr)) {
            return "chars should be an array";
        }
        const res = this.arr.some((item, index) => {
            return typeof (item) !== "string";
        });
        if (res) {
            return "chars should include only strings";
        }
        if (isNaN(number)) {
            return "length should be a number.";
        }
        this.length = number;
        for (let i = 0; i < number; i++) {
            let letter = this.arr[Math.floor(Math.random() * this.arr.length)];
            newArr.push(letter);
        }
        return newArr;
    }
}

let word = new RandomWord(['a', 'b', 'g', 'u']);
let result = word.randomize();
console.log(`before : [${result}]`);
result = word.randomize(2);
console.log(`after  : [${result}]`);