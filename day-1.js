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


// Check Palindrome or not
// ex: 121 --> true
// ex: -121 ---> false
// ex: 10 ---> false

function isPalindrome(num){
    const originalValue = num;
    let revrse = 0;
   while(num > 0) {
    revrse = revrse*10+(num%10);
    num = Math.floor(num/10);
   }

    return revrse === originalValue;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));