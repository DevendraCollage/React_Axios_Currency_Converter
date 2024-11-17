/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { currencyConverter } from "./API/postAPI";

const App = () => {
  const [amount, setAmount] = useState(0); // Amount to Convert
  const [fromCurrency, setFromCurrency] = useState("USD"); // Base Currency
  const [toCurrency, setToCurrency] = useState("INR"); // Target Currency
  const [convertedAmount, setConvertedAmount] = useState(null); // Converted Amount we have to store in this state
  const [loading, setLoading] = useState(false); // Loading State
  const [error, setError] = useState(null); // Error State

  const handleConvertCurrency = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await currencyConverter(fromCurrency, toCurrency, amount);
      console.log(res); // Inspect the response structure
      if (res.conversion_result) {
        setConvertedAmount(res.conversion_result);
      } else {
        throw new Error("Unexpected API response structure");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false); // Ensure loading is stopped on error
      setError("Error Fetching Conversion Rate");
      console.error(error);
    }
  };

  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              type="number"
              id="currency_amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div className="currency-selector">
          <div>
            <label>
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              To:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
        </div>

        <button
          onClick={handleConvertCurrency}
          disabled={loading || amount <= 0}
        >
          {loading ? "Converting..." : "Convert"}
        </button>

        <hr />
        {convertedAmount && (
          <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)}
              {toCurrency}
            </h2>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default App;
