(() => {

    function add(a: number, b: number): number {
        return a + b
    }

    console.log(add(12, 8))

    function log(message: string): void {
        console.log(message)
    }

    log("TypeScript is awesome!")

    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage)
        throw new Error(errorMessage)
    }

    function performJob(cb: (m: string) => void) {
        cb("Task Completed Successfully!")
    }

    let logMsg = (msg: string): void => {
        console.log("LOG:", msg)
    }

    performJob(logMsg)

    type User = {
        name: string;
        age: number;
        greet: () => string;
    }

    let user: User = {
        name: "Elmer",
        age: 27,
        greet() {
            console.log(`Hello, ${this.name}`)
            return this.name
        }
    }

    user.greet()
})()