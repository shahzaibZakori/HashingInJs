let arr = [1, 2, 1, 3,1,3,10,1,9,10,9];
let set = new Set();

for(let i =0; i< arr.length; i++){
    if(set.has(arr[i])){
        set.delete([arr[i]])
    }else {
        set.add(arr[i])
    } 
}

console.log(set)