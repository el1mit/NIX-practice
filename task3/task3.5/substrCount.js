function substrCount(input, needle, offset, length) {
    let searchStr = input.slice(offset, offset + length);
    let regex = new RegExp(needle, "gi");
    let count = (searchStr.match(regex) || []).length;
    return count;
}

console.log(substrCount('Good Golly Miss Molly', 'll', 7, 10));
