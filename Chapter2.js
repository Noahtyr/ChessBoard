//let five = 5;
//let four = 5;

//let mood = "Light";
//let mood1 ="Dark";


//console.log(five*five);
//console.log(five*four*five);

//console.log(mood);
//console.log(mood1);

//let LuigisDebt = 140;
//LuigisDebt = LuigisDebt - 35;
//console.log(LuigisDebt);

//let one = 1, two = 2;
//console.log(one + two);


var name = "Noahtyr"
const greeting = "What up my boi"
console.log(greeting +" " + name);




let hash = " ";
for (i = 1; i < 7; i++) {
    console.log(hash += "#");
}
// This is our Triangle, the loop runs seven times i < 7 and for every loop, one extra # will be visible in the console +="#"

for(i=1; i <= 100; i++) {
    result = i;

    if(i % 3 == 0) {result = "Fizz"};
    if(i % 5 == 0) {result = "buzz"};
    if(i % 3 ==0 && i % 5 == 0) { result = "FizzBuzz"};
    console.log(result);

    // REMEMBER THIS: YOU CANNOT DO 5 , 3 ==0. YOU NEED TO DO THIS INSTEAD:  5 ==0 && 3 ==0

}
