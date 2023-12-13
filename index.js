function receivesAFunction(something) {
    return something();
}

function returnsANamedFunction() {
    function adds(num1, num2) {
        return num1 + num2;
    }
    return adds;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("whoops");
    }
}