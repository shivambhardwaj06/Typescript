const chai = {
    name : "Masala chai",
    price: 20 ,
    isHot : true
}

// {
//     name : string;
//     price : number;
//     isHot : boolen
// }

let tea : {
    name : String;
    price : number;
    isHot: boolean
}

tea = {
    name : "Ginger Tea",
    price: 25,
    isHot : true
}

type Tea = {
    name : String;
    price : number;
    ingredients : string[]
}

const adrakChai : Tea = {
    name : "Adrak Chai",
    price : 25,
    ingredients:["ginger",'tea leaves']
}

type Item = {name: string,quantity:number}
type Address = {street:string,pin:number}

type Order = {
    id: string;
    items: Item[];
    address:Address
}

type Chai ={
    name : String;
    price : number;
    isHot: boolean
}

const updateChai = (updates : Partial<Chai>)=>{
    console.log("updating chai with ", updates);
}
// make all the property in datatype optional

updateChai({price:25})
updateChai({isHot:false})
updateChai({})


type ChaiOrder = {
    name?:string;
    quantity?:number
}

const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log(order);
}

placeOrder({
    name : "Masala Chai",
    quantity:2 // dena hi padega 
})


type  BasicChaiInfo = Pick<Chai,"name" |"price">;

const chaiInfo: BasicChaiInfo = {
    name : "Lemon tea",
    price:30
}


type ChaiNew = {
    name : String;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}
type PublicChai = Omit <Chai,"secretIngredients">;
