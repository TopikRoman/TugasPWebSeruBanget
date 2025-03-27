const currencySelects = document.querySelectorAll("select");
const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const currencies = Object.keys(data.rates);
    currencySelects.forEach((select) => {
      currencies.forEach((currency) => {
        let option = document.createElement("option");
        option.value = currency;
        option.textContent = currency;
        select.appendChild(option);
      });
    });
  });

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (amount === "" || isNaN(amount)) {
    alert("Masukkan jumlah yang valid");
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById(
        "result"
      ).textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    })
    .catch((error) => console.error("Error fetching exchange rate:", error));
}
