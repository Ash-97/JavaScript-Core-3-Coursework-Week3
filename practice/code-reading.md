# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1(){
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
Line 4 and 6 output different numbers because x on line 4 is in the function scope while the x on line 1 is in global scope so they both have different assigned values.

## Question 2

Take a look at the following code:

```
let x = 10

function f1(){
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
First console.log will output the value of x which is 10 and the second console.log will give a reference error because 'y' is defined in function scope not global.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
First console.log will output 9 which is the value of x assigned in global scope. Second console.log will output {x:10} as the function f2 is invoked before the log as such object assigned to y has been mutated.
