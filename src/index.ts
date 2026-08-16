function greet(person: string): string {
    return  `Hello , ${person}`;
}

const username : string = "John";

console.log(greet(username));
//console.log(greet(12));  // error: Argument of type 'number' is not assignable to parameter of type 'string'.


// TypeScript github repo: https://github.com/microsoft/TypeScript

