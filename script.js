console.log("-------Task 12-------"); // Task 12
//Write a JavaScript program that will find the sum of all items in the given array,  
//make it dynamic, so the result will change if the array is changed. 
let arry = [4,5,6,7,true, undefined, NaN, "random string"];
let result = 0;
for(let i = 0; i <= arry.length-1; i++){
	result = result + arry[i];
}
console.log(typeof result);
if (typeof result !== "string" && typeof result !== NaN){
	console.log(`The sum of the numbers in the array is ${result}`);
}
