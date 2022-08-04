let count = 10;
let row = "";

for (var i = 1; i <= count; i++) {
    for(var k = 0; k < count - i; k++) {
        row += " ";
    }
    for (var j = 0; j < (i * 2) - 1; j++) {
        row += "*";
    }
    console.log(row);
    row = "";
}