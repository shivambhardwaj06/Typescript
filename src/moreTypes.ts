let response: any = "42";

//let numericLength: number = response.length; // This will cause a runtime error because 'response' is a string, not a number.
let numericLength: number = (response as string).length; // This is safe because we are asserting that 'response' is a string.

type Book = {
    name : string;
}
let bookString = '{"name":"The Great Gatsby"}';
let bookObject: Book = JSON.parse(bookString) as Book; // Type assertion to tell TypeScript that the parsed object is of type Book. 

console.log(bookObject.name); // Output: The Great Gatsby

const inputElement = document.getElementById("myInput") as HTMLInputElement; // Type assertion to specify that the element is an HTMLInputElement.


// unknown vs any

let value : any
value = 42; // value can be assigned any type
value = "Hello"; // value can be reassigned to a different type
value.toUpperCase(); // This is allowed, but it may cause a runtime error if 'value' is not a string.

let unknownValue : unknown;
unknownValue = 42;
unknownValue = "Hello"; // unknownValue can be reassigned to a different type
// unknownValue.toUpperCase(); // This will cause a compile-time error because TypeScript doesn't know the type of 'unknownValue'.
if(typeof unknownValue === "string"){
    unknownValue.toUpperCase(); // This is safe because we have checked that 'unknownValue' is a string.
}

try {

}catch (error) {
    if (error instanceof Error) {
        console.log(error.message); // This is safe because we have checked that 'error' is an instance of Error.
    }
    console.log(error); // This will log the error, but TypeScript doesn't know the type of 'error' here.
}
const data:unknown = "chai aur code";
const strData : string = data as string; // Type assertion to tell TypeScript that 'data' is a string.

type Role = 'admin' | 'user' | 'guest'; // Union type representing possible roles.

function RedirectBasedOnRole(role: Role) : void {
    if(role === 'admin'){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === 'user'){
        console.log("Redirecting to user dashboard");
        return;
    }
    if(role === 'guest'){
        console.log("Redirecting to guest dashboard");
        return;
    }
    //role; now we can see its type is never because we have handled all possible cases of the union type 'Role'.   
}

function neverReturns(): never {
    while (true) {}
}