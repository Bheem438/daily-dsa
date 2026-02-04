function linearSearch(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,6,8,0], 0))

// Binary Search

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length -1;

    while(right >= left){
        const mid = Math.floor((left+right)/2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,6,8], 8))