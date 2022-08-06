function findWord(str, substr) {
    let strClean = str.replaceAll(/[,.?!@#$%^&*()"':;–_-~`=+<>]+/g, "");
    let arrWords = strClean.split(/\s/gi);
    
    for (let i in arrWords) {
        if (arrWords[i].search(substr) !== -1) {
            return  arrWords[i];
        }
    }

    return false;
}

console.log(findWord("Ми знаємо, що монохромний колір – це градації сірого", "хром"))
