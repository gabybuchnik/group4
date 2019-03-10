class Word {
    constructor(chars) {
        this.chars = chars;
    }
    setLength() {
        this.length = this.chars.length;
    }
}

const findLongestString = (sentence = "Web Development Tutorial") => {
    let arrSentence = [];
    let wordArr = [];
    let wordLength;
    let max = { maxLength: 0, theString: '' };
    arrSentence = sentence.split(' ');
    for (const [index, item] of arrSentence.entries()) {
        wordArr.push(new Word(item));
        wordArr[index].setLength();
        if (item.length > max.maxLength) {
            max.maxLength = item.length;
            max.theString = item;
        }
    }
    return max.theString;
}
let sentence = "test last word longest";
let maxLengthOfWord = findLongestString(sentence);
console.log(`Max length of word : ${maxLengthOfWord}`);