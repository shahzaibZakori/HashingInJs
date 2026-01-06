/* 
! in Map key cant be duplicate
* Map maintain the insertion order
* Map key can be of any data type
* Map size can be found using size property
* Map has built-in methods like set, get, delete, has, clear
* Map is iterable
* Value can be duplicate  in Map
* Map can store objects as keys 
* Map is different from Object in terms of key types and order maintenance 
*/

let arr =  [1,2,3,4,2,3,3,7,1,8,7,9,4,9,3,0,1,0,7,6,5,4,3,2,1,7,8,9,0];

let freqMap = new Map();

for(let i = 0; i<arr.length; i++){
    let elem = arr[i]
    freqMap.set(elem, (freqMap.get(elem) || 0 ) + 1)
}

console.log(freqMap)