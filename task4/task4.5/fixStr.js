function fixStr(str) {
    return str.replace(/(\w+), (\w+)/gi, '$2 $1');
}

console.log(fixStr("Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo"));
