function fibRecursive(num) {
    if (num <= 1) return 1;

    return (fibRecursive(num - 1) + fibRecursive(num - 2));
}

console.log(fibRecursive(10));


function fibonacciSequence(num){
    let num1 = 1;
    let num2 = 1;

    while (num >= 0) {
        let num3 = (num1 + num2);
    
        num1 = num2;
        num2 = num3;
        console.log(num2);
        num--;
    }

    return num2;
}

console.log(fibonacciSequence(10));
