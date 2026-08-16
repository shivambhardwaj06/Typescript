const chaiFlavours : string[] = ["Masala","Adrak"]
const chaiPrice: number[] = [10,20]

const rating:Array<number> = [4.4,4.6]
type Chai = {
    name : string;
    price: number
}
const menu: Chai[]=[
    {name:"Masala",price:15},
    {name : "Adrak",price:25}
]

menu.push({name:"public",price:34})

const cities : readonly string[] =["Delhi","Jaipur"]
// cities.push("Pune")


//2d Array
 const table : number[][]=[
    [1,2,3],
    [4,5,6]
 ]

 let chaiTuple: [string,number];
 chaiTuple = ["Masala",20]
 //chaiTuple = [20,"Masala"] /// not valid


 let userInfo :[string,number,boolean?]

 userInfo= ["hitesh",100]

const location: readonly[ number,number]=[28.99,56.33]


const chaiItems : [name:string,price:number]=["Masala",25]


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED ,// 101
    CANCELLED //102
}

enum ChaiType {
    MASALA  = "masala",
    GINGER = "ginger"
}

function makeChai(type:ChaiType){
    console.log(`Making : ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala") error 

//heterogeneous values in enum

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}



const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const s = Sugars.HIGH

let t : [string, number] = ['chai',10]
t.push("extra")