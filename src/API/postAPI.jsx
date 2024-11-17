import axios from "axios";

// This is our base URL
const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/fc625ce95a43cee7c5a10215",
});

// We need to create a get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api
    .get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
    .then((res) => {
      return res.data;
    });
};
