// sorting people by their heights in descending order

let people = ["Maria", "Emma", "Olivia", "Zakori"];
let heights = [170, 160, 180, 175];

let map = new Map();

for (let i = 0; i < people.length; i++) {
    map.set(heights[i], people[i]);
}

// sort heights in descending order
heights.sort((a, b) => b - a);

for(let i = 0; i< heights.length; i++){
    console.log(map.get(heights[i]));
}