const currencySelects = document.querySelectorAll("select");
const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

// Peta mata uang ke nama lengkapnya
const currencyNames = {
  USD: "United States Dollar",
  IDR: "Indonesian Rupiah",
  EUR: "Euro",
  GBP: "British Pound",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CNY: "Chinese Yuan",
  INR: "Indian Rupee",
  BRL: "Brazilian Real",
  MXN: "Mexican Peso",
  RUB: "Russian Ruble",
  KRW: "South Korean Won",
  SAR: "Saudi Riyal",
  SGD: "Singapore Dollar",
  CHF: "Swiss Franc",
  ZAR: "South African Rand",
  MYR: "Malaysian Ringgit",
  HKD: "Hong Kong Dollar",
  SEK: "Swedish Krona",
  NOK: "Norwegian Krone",
  DKK: "Danish Krone",
  NZD: "New Zealand Dollar",
  THB: "Thai Baht",
  VND: "Vietnamese Dong",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  AED: "United Arab Emirates Dirham",
  EGP: "Egyptian Pound",
  COP: "Colombian Peso",
  CLP: "Chilean Peso",
  KES: "Kenyan Shilling",
  TRY: "Turkish Lira",
  IQD: "Iraqi Dinar",
  LKR: "Sri Lankan Rupee",
  TWD: "New Taiwan Dollar",
  BHD: "Bahraini Dinar",
  OMR: "Omani Rial",
  JOD: "Jordanian Dinar",
  KWD: "Kuwaiti Dinar",
  LKR: "Sri Lankan Rupee",
  UGX: "Ugandan Shilling",
  UGX: "Ugandan Shilling",
  PEN: "Peruvian Nuevo Sol",
  RON: "Romanian Leu",
  HUF: "Hungarian Forint",
  PLN: "Polish Zloty",
  CZK: "Czech Koruna",
  HRK: "Croatian Kuna",
  ISK: "Icelandic Króna",
  KGS: "Kyrgyzstani Som",
  TJS: "Tajikistani Somoni",
  BDT: "Bangladeshi Taka",
  MDL: "Moldovan Leu",
  BYN: "Belarusian Ruble",
  ALL: "Albanian Lek",
  MKD: "Macedonian Denar",
  MNT: "Mongolian Tugrik",
  NPR: "Nepalese Rupee",
  GEL: "Georgian Lari",
  KZT: "Kazakhstani Tenge",
  AMD: "Armenian Dram",
  BWP: "Botswana Pula",
  MWK: "Malawian Kwacha",
  ZMW: "Zambian Kwacha",
  RWF: "Rwandan Franc",
  MMK: "Myanmar Kyat",
  LAK: "Lao Kip",
  KMF: "Comorian Franc",
  DJF: "Djiboutian Franc",
  GNF: "Guinean Franc",
  MRU: "Mauritanian Ouguiya",
  SLL: "Sierra Leonean Leone",
  CDF: "Congolese Franc",
  SYP: "Syrian Pound",
  SDG: "Sudanese Pound",
  AFN: "Afghan Afghani",
  MZN: "Mozambican Metical",
  ETB: "Ethiopian Birr",
  GHS: "Ghanaian Cedi",
  BAM: "Bosnia and Herzegovina Convertible Mark",
  MKD: "Macedonian Denar",
  KWD: "Kuwaiti Dinar",
  KZT: "Kazakhstani Tenge",
  LKR: "Sri Lankan Rupee",
  ISK: "Icelandic Króna",
  JMD: "Jamaican Dollar",
  HTG: "Haitian Gourde",
  CDF: "Congolese Franc",
  BND: "Brunei Dollar",
  BGN: "Bulgarian Lev",
  BIF: "Burundian Franc",
  AFN: "Afghan Afghani",
  BAM: "Bosnian Convertible Mark",
  KMF: "Comoros Franc",
  SHP: "Saint Helena Pound",
  WST: "Samoan Tala",
  TOP: "Tongan Paʻanga",
  FJD: "Fijian Dollar",
  PAB: "Panamanian Balboa",
  PYG: "Paraguayan Guarani",
  GTQ: "Guatemalan Quetzal",
  UYU: "Uruguayan Peso",
  HNL: "Honduran Lempira",
  VEF: "Venezuelan Bolívar",
};

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const currencies = Object.keys(data.rates);
    currencySelects.forEach((select) => {
      currencies.forEach((currency) => {
        let option = document.createElement("option");
        option.value = currency;
        option.textContent = `${currency} - ${
          currencyNames[currency] || currency
        }`;
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
