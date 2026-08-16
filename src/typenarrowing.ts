function getChai(kind : string | number){
    if (typeof kind === "string"){
        return  `I want ${kind} chai`;
    }
    return `I want ${kind} cups of chai`;
}

function serveChai(msg? : string){
    if (msg){
        return  `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size : "medium" | "large" | "small" | number){
    if(size==="small"){
        return 'small cup of chai';
    }
    if(size==="medium"){
        return 'medium cup of chai';
    }
    if(size==="large"){
        return 'large cup of chai';
    }
    return `chai order #${size}`;
}

class KulhadChai{
    serve(){
        return 'Serving kulhad chai';
    }
}
class CuttingChai{
    serve(){
        return 'Serving cutting chai';
    }
}

function serve(chai : KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    return chai.serve();

}


type ChaiOrder = {
    sugar:number;
    type : string;
}


function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'sugar' in obj &&
        'type' in obj &&
        typeof obj.sugar === 'number' &&
        typeof obj.type === 'string'
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`;
    }
    return `Serving ${item} chai`;
}

type MasalaChai = {
    type : 'masala';
    spiceLevel : number; 
}

type GingerChai = {
    type : 'ginger';
    gingerLevel : number;
}
type ElaichiChai = {
    type : 'elaichi';
    elaichiLevel : number;
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai){
    switch(order.type){
        case 'masala':
            return `Making masala chai with spice level ${order.spiceLevel}`;
        case 'ginger':
            return `Making ginger chai with ginger level ${order.gingerLevel}`;
        case 'elaichi':
            return `Making elaichi chai with elaichi level ${order.elaichiLevel}`;
    }
}

function brew(order: MasalaChai | GingerChai ){
    if("spiceLevel" in order){
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    }
}


const data: unknown = ["hello", "world"];
function isStringArray(arr: unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}
if (isStringArray(data)) {
    console.log(data[0]!.toUpperCase());
}

