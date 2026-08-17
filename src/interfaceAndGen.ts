interface Chai {
    flavor : string;
    price : number;
    milk?:boolean;

}

// type and interface are 90 % reconvertable hai

const masala:Chai = {
    flavor : "masala",
    price:30,
}


interface Shop{
    readonly id:number;
    name : string
}

const s: Shop = {id:1,name : "Chaicode caffe"}
// s.id = 2 
//s.id=3// not acceptable


interface DiscountCalculator{
    (price : number): number
}

const apply50: DiscountCalculator = (p) => p*0.5 + 2 // + "string" is not acceptable

interface TeaMachine{
    start(): void;
    stop() : void
}

// koi bhi chiz agar TeaMachine ko define karege toh usme yeh 2 method hone hi hone chaiye 

const machine : TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}


// index signature

interface ChaiRatings {
    [flavor : string] : number
}

const ratings: ChaiRatings = {
    masala : 4.5,
    ginger : 4.5,
    ok : 4.5,
}

// unique features of interface

interface User {
    name : string
}

interface User {
    age: number
}


// extending interface implicitely
const u : User = {
    name : "Hitesh",
    age: 42
}

interface A {a : string}
interface B {b : string}

interface C extends A, B {} // explicitly


