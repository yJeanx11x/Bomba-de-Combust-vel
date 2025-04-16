// Preço Dos Combustível
const gas = 6.32;
const etha = 4.13;
const dis = 3.55;

const money = document.querySelector("#money");
const combust = document.querySelector("select");
const btnAbtc = document.querySelector("#btnAbtc");

btnAbtc.addEventListener("click", () => {

// Seleciona qual Combustível Que Deseje abastecer.
  switch (combust.value) {
    case "Gasolina":
      const abastecerGas = (money.value / gas).toFixed(2);
      console.log(`${abastecerGas} L`);
      break;

    case "Etanol":
      const abastecerEtha = (money.value / etha).toFixed(2);
      console.log(`${abastecerEtha} L`);
      break;
      case "Diesel":
        const abastecerDis = (money.value / dis).toFixed(2);
        console.log(`${abastecerDis} L`);
        break;
        case "Selecionar":
        console.log(`Selecione uma opição abaixo`);
        break;
        
    default:
      break;
  }
});
