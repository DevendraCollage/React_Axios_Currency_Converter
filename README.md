# Currency Converter App

A simple and efficient currency converter built with React and Axios. Convert between different currencies in real-time using the latest exchange rates.

## Features

- Real-time currency conversion
- Support for multiple currencies worldwide
- Clean and responsive user interface
- Exchange rate data from reliable API
- Easy-to-use dropdown selectors
- Instant conversion updates

## Technologies Used

- React 18.x
- Axios
- CSS
- Exchange Rates API

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0 or higher)
- npm (v6.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/DevendraCollage/React_Axios_Currency_Converter
```

2. Navigate to the project directory:

```bash
cd currency-converter
```

3. Install dependencies:

```bash
bun install
```

4. Create a `.env` file in the root directory and add your API key:

```env
REACT_APP_EXCHANGE_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
bun run dev
```

## Usage

1. Select your base currency from the first dropdown
2. Enter the amount you want to convert
3. Select the target currency from the second dropdown
4. The converted amount will be display

## Project Structure

```
currency-converter/
├── src/
│   ├── API/
│   │   └── postAPI.jsx
│   │
|   └── index.css
│   └── App.jsx
├── public/
└── package.json
```

## Support

If you find this project helpful, please give it a ⭐️!
