class circleArray {
    constructor(...data) {
        this.data = new Array(...data);
    }

    add(value) {
        this.data.push(value);
    }

    get(index) {
        let length = this.data.length;
        
        while (index * (-1) > length) {
            index = index + length ;
        }
        if (index < 0) {
            index = length + index;
        }

        while (index >= length) {
            index = index - length
        }

        return this.data[index];
    }
}


let circledArray = new circleArray();
circledArray.add("Київ");
circledArray.add("Харків");
circledArray.add("Херсон");

console.log(circledArray.get(4));
console.log(circledArray.get(-1));

