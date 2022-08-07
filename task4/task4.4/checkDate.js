function checkDate(date) {
    let reg = /^\d\d?-\d\d?-\d\d\d\d$/gi;

    return reg.test(date);
}

console.log(checkDate("25-07-2021"));
console.log(checkDate("25-7-2021"));
console.log(checkDate("1-1-2021"));
console.log(checkDate("2-12-1979"));