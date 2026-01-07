 
 function longestSubarrayWithSumK(arr, k) {
       let map = new Map();
        let runningSum = 0;
        map.set(0, -1);
        let longest = 0;
        for(let i = 0; i<arr.length; i++){
            runningSum+=arr[i];
            if(map.has(runningSum - k)){
                let len = i - map.get(runningSum-k);
                if(len>longest) longest = len
            }
            if(map.has(runningSum)) continue;
            else map.set(runningSum, i)
            
        }
        
        return longest;
    }