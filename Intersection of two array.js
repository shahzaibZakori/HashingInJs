var intersection = function(nums1, nums2) {
    let ans = [];
    let map1 = new Map();
    let map2 = new Map();
    for(let i = 0; i<Math.max(nums1.length, nums2.length); i++){
        if(i<nums1.length) map1.set(nums1[i], i);
        if(i<nums2.length) map2.set(nums2[i], i);
    }
    // iterate over unique keys in map1 and add to answer if present in map2
    for (let key of map1.keys()) {
        if (map2.has(key)) {
            ans.push(key);
        }
    }
    return ans
};

console.log(intersection([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4]))