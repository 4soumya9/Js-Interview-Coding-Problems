// Write code to find the maximum length subarray matching the given sum.
// arr = [10, 5, 2, 7, 1, 9];
// k = 15;

function maxlengthSubarray(arr,k){
    let map = new Map();
    let sum=0;
    let maxLen=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

        if(sum === k){
            maxLen= i+1;
        }   

        if(map.has(sum-k)){
            maxLen = Math.max(maxLen,i-map.get(sum-k))
        }

        if(!map.has(sum)){
            map.set(sum,i)
        }
    }
    return maxLen;

}

arr = [10, 5, 2, 7, 1, 9];
k = 15;
console.log(maxlengthSubarray(arr,k));