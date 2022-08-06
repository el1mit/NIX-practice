function isPowOfTwo(num) {
    if (num < 1) {
        return false;
    }

    return (num & (num - 1)) === 0
}

console.log(isPowOfTwo(14));
console.log(isPowOfTwo(16));
