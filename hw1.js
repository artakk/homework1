// 1. Write a function which receives an array and a number as arguments 
// and returns a new array from the elements of the given array which 
// are larger than the given number.

const obj = {
    arr1 : [10,25,16,-5,30,15,24],
    arr2: [1,1,2,-3,0,8,4,0],
    num1 : 16,
    num2: 9,
}
   function bigNumb() {
       for(let i = 0; i < obj.arr1.length; i++) {
           if(obj.arr1[i] > obj.num1 ) {
               console.log(obj.arr1[i]);
           } else {console.log("Such values do not exiest.");}
    }
   }
function bigNum() {
    for (let j = 0; j < obj.arr2.length; j++) {
if(obj.arr2[j] > obj.num2) {
    console.log(obj.arr2[j]);
} else {console.log("Such values do not exiest.");}
    }
}

// 2.Write a function,which receives two numbers as arguments and finds 
// all numbers between them such that each digit of the number is even.
// The numbers obtained should be printed in a comma-separated sequence
// on a single line.


let a = 19;
let b = 43;
let c = 99;
let d = 199;
let str = "";
let str1 = "";

let e = 99;
let f = 199;

function evenNumb() {
    for (let i = a; i < 100; i++) {
        if (  i === b )   {
            break;
        } else if ( i % 2 === 0 &&  Math.floor(i/10)  % 2 === 0 ) {
            str += i + " ,";
        } 
        else {
          console.log("Such numbers does not exist.");  
        }
    }
    console.log(str);
}

function evenNumb1() {
    for (let i = e; i < 100; i++) {
        if (  i === f )   {
            break;
        } else if ( i % 2 === 0 &&  Math.floor(i/10)  % 2 === 0 ) {
            str1 += i + " ,";
        } 
        else {
            console.log("Such numbers does not exist.");  
            }
    }
    console.log(str1);
}
 // 3. Write a recursive function to determine 
 // whether all digits of the number are odd or not.

 let k = 4211133;
 let m = 7791;
 let t = 5; 

 function isOdd(num){
    if((num % 2) === 1 && num % 10 === 1){
        return(true);
    }else if (num === 0){
        return(isOdd(num / 10));
    } else {
        return  (false);
    }
}
// 4.Given an array of numbers.Write a recursive 
// function to find its minimal positive elements.
// (If such element does not exist,return -1).

let arr3 = [56,-9,87,-23,0,-105,55,1]
let arr4 = [45,-9,15,5,-78];
let arr5 = [-5,-9,-111,-1000,-7];


function sortArr(a,b) {
    return a - b;
}
arr3.sort(sortArr);
arr4.sort(sortArr);
arr5.sort(sortArr);


function min(arr) {
    if (arr.length === 1){
      return arr[0];
    } 
      else if(arr[0] > arr[1] && arr >= 0) {
      return min(arr.slice(1));   
    } else if (arr[1] >= 0) {
return arr[1];
    } else if (arr[4] < 0 ) {
        return "-1";
    } 
      else {
      return min([arr[0]].concat(arr.slice(2))); 
    }
  }

  console.log(min(arr3))






// 5. Given an array of numbers which is almost
// sorted in ascending order. Find the index where
// sorting order is violated.
let a1 = [2,12,15,48,64];
let b1 = [-9,-4,-4,3,12,4,5]

function IsDigAreMax(number,previous,next) {
    if(number > previous && number > next) {
        return false;
    } else {
    return true;
}
}

function findErr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(!(IsDigAreMax(arr[i],arr[i-1],arr[i+1]))) {
            return i;
        }
    }
    return -1;
}

console.log(findErr(b1))




console.log(isOdd(m));


    bigNumb();
   bigNum();
    evenNumb();
    evenNumb1();
