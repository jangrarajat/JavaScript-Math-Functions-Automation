let a = 2;
let b = 4;
let c = 10.9;
let d = 10.4;

const mathfun = [
Math.round,
Math.ceil,
Math.floor,
Math.trunc,
Math.pow,
Math.sqrt,
Math.cbrt,
Math.abs,
Math.max,
Math.min,
Math.random
]

// console.log(mathfun.length)

let arlength = mathfun.length;

for(let i = 0 ; i< arlength ; i++){
    if(mathfun[i] === Math.pow) { console.log(mathfun[i],mathfun[i](a,b))}
         else if(mathfun[i]=== Math.sqrt || mathfun[i]===Math.cbrt ){console.log(mathfun[i],mathfun[i](d).toFixed(2))}
         else if(mathfun[i]===Math.random){console.log(mathfun[i],mathfun[3](mathfun[i]()*9000+1000))}
         else{ console.log(mathfun[i],mathfun[i](c , d))}
}
