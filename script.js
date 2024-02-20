let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite o segundo número"));

if (num1 === num2) {
  alert("Os números inseridos são iguais");
} else {
  alert("Os números inseridos são diferentes");
}

const sum = num1 + num2;
const sub = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;
const restDiv = num1 % num2;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + multi);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);

if (sum % 2 === 0) {
  alert(`${sum} é par`);
} else {
  alert(`${sum} é ímpar`);
}
