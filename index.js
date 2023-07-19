// var a = 20;
// var b = '20';

// console.log(a==b);


maxValue = 0;

const list = [11,12,44,9,4]
for (var i = 0; i < list.length ; i++) {
    
                
    
    if (list[i]> maxValue)
    maxValue = list[i];
}

console.log(maxValue);

var x = 35;

if(x%2==0){
    console.log("even");
}

else{
    console.log("odd")
}

var year = 404;
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {

    console.log('leap year');
} else {
    console.log('not a leap year');
}

var c = 'asdba';

for(var i = 0 ; i<c.length/2; i++){
    if(c[i] !== c[c.length - 1 - i]){
        console.log('not palindrome')
        return
    }
}

console.log('palindrome')





function factorial(x) {

    
    if (x == 0) {
        return 1;
    }

    
    else {
        return x * factorial(x - 1);
    }
}


const num = prompt('Enter a positive number: ');


if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}


function verbing(k){

    var y = k.length-1;
    if(k.length<3){
        return
    }

    else{
        if(k[y]=='g' && k[y-1]=='n' && k[y-2]=='i'){
            console.log(k+'ly');
            
        }

        else{
            console.log(k+'ing');
        }
    }
}

console.log(verbing('ping'))



