"use strict";
(() => {
    function add(a, b) {
        return a + b;
    }
    console.log(add(12, 8));
    function log(message) {
        console.log(message);
    }
    log("TypeScript is awesome!");
    function logAndThrow(errorMessage) {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }
    function performJob(cb) {
        cb("Task Completed Successfully!");
    }
    let logMsg = (msg) => {
        console.log("LOG:", msg);
    };
    performJob(logMsg);
    let user = {
        name: "Elmer",
        age: 27,
        greet() {
            console.log(`Hello, ${this.name}`);
            return this.name;
        }
    };
    user.greet();
})();
