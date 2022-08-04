function isEven(number) {
    return number & 1 ? false : true;
}

console.log(isEven(3));
console.log(isEven(10));
console.log(isEven(1242));
console.log(isEven(-5));
