// import { Type } from './../node_modules/typescript/dist/api/async/types.d';
// function makeChai(order:{type:string;sugar:number;strong:boolean}){
//     console.log(order);
// }
// function serveChai(order : {type:string;sugar:number;strong:boolean}){
//     console.log(order);
// }

type ChaiOrder = {
    type : String;
    sugar : number;
    strong: boolean;
};

function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water : number ;
    milk : number;
}
//implements → rules/structure follow karna

class MasalaChai implements TeaRecipe { // MasalaChai class promise karti hai ki woh TeaRecipe ke rules follow karegi.
    water = 100;
    milk = 50;
}

interface CupSize {
    size : "small" | "large"
}

class Chai implements CupSize{
    size : "small" | "large"  = "large";

}
// error -2
// type Response = {ok : true} | {ok:false}
// class myRes implements Response{
//     ok:boolean = true;
// }


type TeaType = "masala"  | "ginger" | "lemon"  // Literal Types

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves:number}
type Extra = {masala:number}

type MasalaChaiFinal = BaseChai & Extra // intersaction

const cup: MasalaChaiFinal = {
    teaLeaves : 2,
    masala:1
}


type User = {
    username : string;
    bio? : string;
}

const u1 : User = {username : "Hitesh"}
const u2: User = {username: "Hitesh", bio: "hitesh.ai"}  // optional

type Config = {
    readonly appName :  string,
    version:number
}
const cfg: Config = {
    appName: "Masterji",
    version:1
}
//cfg.appName = "ChaiCode" as this is read only

