// 2 sum problem

function twoSum(arr, target){
    const map = new Map();
    for(let i=0;i<arr.length;i++){
        const diff = target - arr[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }else {
            map.set(arr[i], i); 
        }
    }
}
console.log(twoSum([2,7,13,10], 23))