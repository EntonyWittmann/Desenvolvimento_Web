const valorConta = 100;
const percentualGorjeta = 15;

const gorjeta = valorConta * (percentualGorjeta / 100);

const total = valorConta + gorjeta;

console.log(
  `Valor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${gorjeta.toFixed(2)}, Total a pagar: R$${total.toFixed(2)}`
);