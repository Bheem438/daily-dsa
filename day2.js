// Power of 2
// return true if it is power of two/4.
// ex: n = 1 --> 2^0 = 1 --> true
// ex: n = 16 --> 2^4 = 16 ---> true
// ex: n=3 ---> false

const powerOfTwo = (n) => {
    if(n === 1){
        return true;
    }
    if(n < 1 && n%2 === 0){
        return false;
    }

    return powerOfTwo(n/2);
}
console.log(powerOfTwo(1))
console.log(powerOfTwo(16))
console.log(powerOfTwo(3))
console.log(powerOfTwo(128))