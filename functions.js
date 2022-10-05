// ----Step 2 Write Code----
// 1) Sum Zero - run time guess: 0(1)
// Space Complexity: Linear
function addToZero(arr) {
    let numArray = false

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] === 0) {
                    numArray = true
                }
            }
        }
    }
    return numArray
}
addToZero([]);
// console.log(addToZero([]));
// console.log(addToZero([1]));
// console.log(addToZero([1, 2, 3]));
// console.log(addToZero([1, 2, 3, -2]));

// 2)Unique Characters - run time guess: 0(1)
// Space Complexity: Constant

function hasUniqueChars(string) {
    let specialChars = new Set([])
    for (let i = 0; i < string.length; i++) {
      specialChars.add(string[i])
    }
    return specialChars.size === string.length
  }

//   console.log(hasUniqueChars('Monday'));
//   console.log(hasUniqueChars('Moonday'));
//   console.log(hasUniqueChars('Monday!'));

// 3) Pangram Sentence - runtime guess: 0(1)
// Space Complexity: Constant

function pangram(str) {
    let sentence = new Set('abcdefghijklmnopqrstuvwxyz')
    for (let i of str.toLowerCase()){
        sentence.delete(i)
        if (sentence.size == 0) 
        return true
    }
    return false
} 

// console.log(pangram('The quick brown fox jumps over the lazy dog'));
// console.log(pangram('I like cats, but not mice'));


// 4) Longest word - runtime guess: 0(1)
// Space Complexity: Constant


function findLongestWord(str) {
    let wordSplit = str.toString().split(' ')
    let longestWord = 0
    
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i].length > longestWord) {
            longestWord = wordSplit[i].length
        }
    }
    return longestWord
}

console.log(findLongestWord("hello", 'Hi'))
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));