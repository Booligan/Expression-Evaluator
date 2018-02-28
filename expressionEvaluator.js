const arithmetic = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y
};

calculator = (input) => {
    let array = input.split(" ");
    let operator = array.shift(); 
    let expressionOne, expressionTwo;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '+' || array[i] === '-') {
            let before = array[i - 1];
            let after = array[i + 1];

            array[i] = arithmetic[array[i]](parseInt(before), parseInt(after));
            array.splice(i - 1, 1);
            array.splice(i, 1);
        }
    }
     
   expressionOne = parseInt(array[0])
   expressionTwo = parseInt(array[1])
 
   return arithmetic[operator](expressionOne, expressionTwo);
}

