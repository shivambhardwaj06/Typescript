// class Chai {
//     flavour : string;
//     price: number;
//     constructor(flavour: string, price:number){
//         this.flavour = flavour // this reference to the new object
//         this.price=price
        
//     }
// }
// const masalaChai = new Chai("Ginger",20)
// masalaChai.flavour = "masala"


// access modifier

class Chai {
    public flavor : string = "Masala"
    private secretIngredients = "cardamom"

    reveal(){
        return this.secretIngredients // ok
    }


}


class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName //ok
    }
}

new Branch().getName

class Walet {
    #balance = 100 // private class
    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

w.getBalance



const c = new Chai()
c.reveal()

const d = new Chai()



class Cup{
    readonly capacity : number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}


class ModernChai {
    private _sugar = 2
    //getter
    get sugar(){
        return this._sugar

    }

    set sugar (value:number){
        if(value>5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const e = new ModernChai()
e.sugar = 3

class EkChai {
    static shopName = "Chaicode caffee"

    constructor(public flavour: string){}

}

console.log(EkChai.shopName);

abstract class Drink {
    abstract make () : void
}

class MyChai extends Drink{
    make (){
        console.log("Brewing Chai");
    }
}
// "make naam ka function hona chahiye, lekin uske andar kya hoga ye child class decide karegi."

class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){} 
    // ChaiMaker ko kaam karne ke liye ek Heater chahiye.
//     const heater = new Heater();

// const chaiMaker = new ChaiMaker(heater);
    make(){
        this.heater.heat()
    }
}