//Recursion is a programming technique where a function calls itself
//repeatedly to solve a problem. For example

//program to countdown till1

//recursive function
function counter(count){

    //display count
  console.log(count);

  //condition for stopping

  if(count > 1 ){

    //decrease count
   count = count -1

   //call counter whit new value of count
   counter (count);



  } else{

  //terminate execution

  };


};

//access function
counter(5);

//Example: Find Factorial of a number

function factorial (num){

    if (num > 1){
     return num * factorial (num-1);

    }

    else{

       return 1;

    };

};

let x =3;

//store result of factorial() in variable
let y = factorial(x);
console.log(`The factorial of ${x} is  ${y}`);
