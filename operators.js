let a = 20;
let b = 30;

let add = a + b;
console.log({ add });

let subtract = a- b;
console.log({ subtract});

let division = a/b;
console.log({ division});

let multiply = a * b;
console.log({ multiply});
// arithmetic (upwards)

// comparison
let c = "20";

let looselyEqualTo = a == c;
console.log({ looselyEqualTo });

let strictlyEqualTo = a ===c;
console.log({ strictlyEqualTo});

let looselyNotEqualTo = a !=c;
console.log({ looselyNotEqualTo});

let strictlyNotEqualTo = a !==c;
console.log({ strictlyNotEqualTo});

// compound (a= a+5)
a+=5;
console.log({ a});

// decrement
a--;
console.log({ a});

// increment
a++;
console.log({ a});

// implicit coercion
console.log({ c});
let d = +c;
console.log({ d});

let e = c*1;
console.log({ e});

// explicit coersion
let f = Number(c);
console.log({f});


// let looselyEqualTo = a==c
// console.log({ loo})