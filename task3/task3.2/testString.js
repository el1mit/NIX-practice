function testString(str) {
    var checkStr = "[]{}()";
    var stack = [];
    var i, char, bracketPos;

    for (i = 0; char = str[i]; i++) {
        bracketPos = checkStr.indexOf(char);

        if (bracketPos === -1) {
            continue;
        }

        if (bracketPos % 2 === 0) {
            stack.push(bracketPos + 1);
        } else if (stack.pop() !== bracketPos) {
            return false;
        }
    }

    return stack.length ? false : true;
}

console.log(testString("isu([syvstc]ts(crs))cs"));
console.log(testString("isu[syv(stc]ts(crs))cs"));


