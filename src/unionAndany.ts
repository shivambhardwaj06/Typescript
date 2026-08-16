let subs : number |string = '1M';
let apiRequestStatus : 'success' | 'failure' | 'pending' = 'success';

apiRequestStatus = 'failure'; // valid
// apiRequestStatus = 'error'; // invalid, error: Type '"error"' is not assignable to type '"success" | "failure" | "pending"'. 

const orders = ['12','20','30']
let currentorder : string | undefined;
for (let order of orders){
    if(order === '20'){
        currentorder = order;
        break;
    }
    currentorder = undefined;
}
 
console.log(currentorder); // currentorder is of type string | undefined, because it may not be assigned if the loop doesn't find '20'.