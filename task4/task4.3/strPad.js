function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {
    let addLen = fullLen - input.length;
    let addRepeat = Number((addLen / fillStr.length).toFixed()) + 1;
    let resFillStr = fillStr.repeat(addRepeat);
    resFillStr = resFillStr.slice(0, addLen);

    if (addLen > 0) {
        switch (fillType) {
            case 'FILL_RIGHT':
                return input += resFillStr;
    
            case 'FILL_LEFT':  
                return input = resFillStr + input;
    
            case 'FILL_BOTH':
                let start = resFillStr.slice(0, addLen / 2);
                let end = resFillStr.slice((addLen / 2));
                return input = start + input + end;
        }
    }

    return input;
} 

console.log(strPad('star', 10, '_*_')); // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT')); // _*__star
console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**
