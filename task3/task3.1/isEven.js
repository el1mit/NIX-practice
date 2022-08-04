function isEven(number) {
    if (number & 1) {
        return false;
    }
    return true;
}

console.log(isEven(3));
console.log(isEven(10));
console.log(isEven(1242));
console.log(isEven(-5));
