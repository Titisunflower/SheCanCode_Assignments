var s = "1000";
var n = Number(s);
var bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);