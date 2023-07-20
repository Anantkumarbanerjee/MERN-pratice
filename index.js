// // var a = 20;
// // var b = '20';

// // console.log(a==b);


// maxValue = 0;

// const list = [11,12,44,9,4]
// for (var i = 0; i < list.length ; i++) {
    
                
    
//     if (list[i]> maxValue)
//     maxValue = list[i];
// }

// console.log(maxValue);

// var x = 35;

// if(x%2==0){
//     console.log("even");
// }

// else{
//     console.log("odd")
// }

// var year = 404;
// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {

//     console.log('leap year');
// } else {
//     console.log('not a leap year');
// }

// var c = 'asdba';

// for(var i = 0 ; i<c.length/2; i++){
//     if(c[i] !== c[c.length - 1 - i]){
//         console.log('not palindrome')
//         return
//     }
// }

// console.log('palindrome')





// function factorial(x) {

    
//     if (x == 0) {
//         return 1;
//     }

    
//     else {
//         return x * factorial(x - 1);
//     }
// }


// const num = prompt('Enter a positive number: ');


// if (num >= 0) {
//     const result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }
// else {
//     console.log('Enter a positive number.');
// }


// function verbing(k){

//     var y = k.length-1;
//     if(k.length<3){
//         return
//     }

//     else{
//         if(k[y]=='g' && k[y-1]=='n' && k[y-2]=='i'){
//             console.log(k+'ly');
            
//         }

//         else{
//             console.log(k+'ing');
//         }
//     }
// }

// console.log(verbing('ping'))


// var n =2;
// function square(num){
//     var ans = num*num
//     return ans
// }

// function cube(num){
//     var ans = num*num*num
//     return ans
// }
// var square1 = square(n)
// var cube1 = cube(n)




// const radiuses = [3,4,8,9,12]

// function circumference(r){
//     return Math.PI*2*r;
// }
// function area(r){
//     return Math.PI*r*r;
// }
// function diameter(r){
//     return 2*r;
// }




// const numbers = [10, 5, 8, 15, 3];

// const binaryEquivalents = numbers.map((number) => {
//   return number.toString(2);
// });

// console.log(binaryEquivalents);




// const number = [10,10,5,5];
// function sum(number){
//     const output = 0;
//     for(let i = 0 ; i<number.length ; i++){
//         output = output+number[i];
//     }
//     return output;
// }

// //summing up the numbers using reduce
// const sum = numbers.reduce((accumulator,currentNumber)=> {
//     return accumulator + currentNumber;
// } , 0);


//calculate total balance using reduce
const transaction = [
    {type: "income", amount:1000},
    {type: "expense", amount:400},
    {type: "income", amount:200},
    {type: "expense", amount:700},
];

const totalBalance = transaction.reduce((accumulator,currentNumber)=>
{
    if(transaction.type === "income"){
        return accumulator + currentNumber;
    }

    else{
        return accumulator - currentNumber;
    }
},0
);

function calculateBalance(transaction){
    const op = 0;
    for(let i = 0 ; i<transaction.length ; i++){
    if(transaction.type === "income"){
        op = op+transaction.amount;
    }

    else if(transaction.type === "expense"){
        op = op-transaction.amount;
    }
}
console.log(op);
return op;
}