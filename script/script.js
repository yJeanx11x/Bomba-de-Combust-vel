const money = document.querySelector("#money");
const combust = document.querySelector("select");
const btnAbtc = document.querySelector("#btnAbtc");
const litros = document.querySelector("#litros");

// Preço Dos Combustível
const gas = 6.32;
const etha = 4.13;
const dis = 3.55;

btnAbtc.addEventListener("click", () => {
  // Seleciona qual Combustível Que Deseje abastecer.
  switch (combust.value) {
    case "Gasolina":
      const abastecerGas = (money.value / gas).toFixed(2);
      litros.innerHTML = `${abastecerGas} L`;
      break;

    case "Etanol":
      const abastecerEtha = (money.value / etha).toFixed(2);
      litros.innerHTML = `${abastecerEtha} L`;
      break;
    case "Diesel":
      const abastecerDis = (money.value / dis).toFixed(2);
      litros.innerHTML = `${abastecerDis} L`;
      break;
    case "Selecionar":
      if ("Selection" == "Selection") {
        litros.innerHTML = "0.00 L";
        money.value = ``;
      }
      break;

    default:
      break;
  }
});

function moedaBRL(real) {
  const moeda = real
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    .replace(".", ",");

  return moeda;
}
