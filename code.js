// helloWorld function 
function sayHello(input) {
    if (typeof input==="boolean") {
        return "Hello, World!";
    } else if(input===null) {
        return "Hello, Unknown!";
    } else if(typeof input==="number") {
        return "Hello, $Money$";
    } else {
        return "Hello, " + input + "!";
    }
}
function isFive() {
    return true;
}

function isEven() {
    return true;
}