# 301-assessment

1. **What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?**<br>

> Answer:

llibraries we use to run a server are:
+ express.
* cors.
- dotenv
* superagent

2. **Explain this snippet of code from a server-side application?**<br>
`response.status(200).send('Hello World');`<br>

> Answer:

server will response to the cliant a string said "Hello World" and the status  with (200), to tell that everything is OK.

3. **Write a function that takes an array of numbers as an argument and outputs the square of each number in that array?**<br>

> Answer:

write a function:
```
function squareNumbers(arr){
  let squaredArray = [];
  arr.forEach((value)=>{
    let x = value * value;
    squaredArray.push(x);
  });
  return squaredArray;
}
var myArray = [1,2,3,8,6,7];
var squaredArray = squareNumbers(myArray);

console.log('myArray= ',myArray);
console.log('\n squaredArray= ',squaredArray);
```

