function Square (height, width, color) {
    let div = document.createElement('div');
    div.className = "square";
    div.style.height = `${height}px`;
    div.style.width = `${width}px`;
    div.style.backgroundColor = color;
    document.body.append(div);
    this.square = div;
}

function Triangle (a, b, c, color) {
    let div = document.createElement('div');
    div.className = "triangle";
    div.style.borderRight = `${a}px solid transparent`;
    div.style.borderLeft = `${b}px solid transparent`;
    div.style.borderBottom = `${c}px solid ${color}`;
    document.body.append(div);
    this.triangle = div;
}

let square = new Square(300, 600, "black");
let triangle = new Triangle(250, 250, 500, "red");
