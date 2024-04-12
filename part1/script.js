console.log("Direto do arquivo externo");

//alert("CUIDADO!! SEU PC PODE ESTAR EM PERIGO!!!");


const PI = 3.14;
console.log (PI);

//Legado (não recomendado)
var nome = "Joãozinho";
console.log (nome);

//Maneira correta
let sobrenome = "da Silva";
console.log (sobrenome);

// Continha
let n1 = 2;
let n2 = 3;
console.log(n1 + n2);

//Boleanoo
let bool = true;
console.log(bool);
bool = false;
console.log(bool);

//Undefined
let sem_definir;
console.log(sem_definir);

// null
let variavelNula = null;
console.log(sem_definir == variavelNula);
console.log( "" == variavelNula);

// String
let string = "Texto";
let string2 = String("Texto");

// Potenciação x² = 2²
let x = 2;
console.log(x * x);
console.log(x ** 2);

//Resto
let a = 3;
let b = 2;

console.log(a / b);
console.log(a % b);

//Operadores lógicos

let var01 = true;
let var02 = false;

//And
console.log(var01 && var02);

//Or
console.log(var01 || var02);

//Not
console.log(!var01);

//Comparação
console.log(bool === "0");

//Diferença
console.log(10 != 10);

//Maior
console.log(10 > 3);

//Menor
console.log(10 < 3);

//Comparação de strings
console.log("A" > "B");
console.log("B" > "A");