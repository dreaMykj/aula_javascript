//Funções de string
let texto = String(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore adipisci ducimus, in earum suscipit eum laboriosam facilis animi praesentium natus pariatur commodi. Ullam rem quis ad incidunt est velit magni."
    );

console.log("TAMANHO: " + texto.length);
console.log("MAIÚSCULO: " + texto.toUpperCase());
console.log("MINÚSCULO: " + texto.toLowerCase());
console.log("Caracter na posição: " + texto.charAt(2));

//Funções de numeros
let num = 10;

console.log("BINÁRIO: " + num.toString(2));

//Biblioteca MATH
console.log("PI: " + Math.PI);
console.log("PI Redondo: " + Math.round(Math.PI));
console.log("PI com 4 depois da vírgula: " + Math.PI.toFixed(4));

//Decisão
let idade = 16;

if(idade >= 18){
    console.log("Você pode apostar no jogo do tigrinho");
}
else{
    console.log("Você NÃO pode apostar no jogo do tigrinho");
}

let textinho = "";

if(textinho){
    console.log("Tem algo definido");
}
else if (textinho == ""){
    console.log("Espaço em branco");
}
else{
    console.log("Tem muita coisa escrita lá. Conteúdo: " + textinho);
}

let opcao = 1;
switch(opcao){
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    default:
        console.log("Diferente");
        break;
}

let idade2 = 18;

let msg = idade2 >= 18 ? "Maior de 18" : "Menor de 18"; 

console.log(msg);

//Laços
for(let i=0;i<10;i++){
    console.log(i+1);
}

let x = 0;

while(true){
    console.log(x);
    x++;

    if(x >= 10) break;
}