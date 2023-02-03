import readlineSync from "readline-sync";


const array = [];
let string = "";

while (string != "sair") {
  array.push(string);
  string = readlineSync
    .question("Escreva uma propriedade CSS ou digite 'sair' : ")
    .toLocaleLowerCase();
}
console.log((array.sort().join("\n")));
