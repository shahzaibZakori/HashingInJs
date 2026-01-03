
function isPanagram(sentence){
    let set = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''));
    return set.size === 26;
}

let sentence1 = "The quick brown fox jumps over the lazy dog.";
let sentence2 = "Hello World!";
console.log(isPanagram(sentence1)); // true
console.log(isPanagram(sentence2)); // false