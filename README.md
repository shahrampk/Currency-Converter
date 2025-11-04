# 💱 React Currency Converter

## Project Overview

A modern and responsive web application built with **React** for real-time currency conversion. Users can select any two global currencies and get the current exchange rate and converted amount instantly.

## Features ✨

- **Real-Time Data:** Fetches up-to-date exchange rates from an external API (e.g., ExchangeRate-API).
- **User-Friendly Interface:** Simple design for easy currency selection and input.
- **Instant Calculation:** Converts the amount immediately as the user types or changes selections.
- **Swap Functionality:** Dedicated button to quickly reverse the "From" and "To" currencies.

## Technologies Used 🛠️

- **Frontend:** React (with Hooks - `useState`, `useEffect`)
- **Styling:** Tailwind CSS
- **API Client:** Fetch API
- **External Data:** (https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json)

## Getting Started 🚀

### Prerequisites

You must have **Node.js** and **npm** (or **yarn**) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shahrampk/Currency-Converter.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd [PROJECT_FOLDER_NAME]
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

Create a file named `.env` in the root directory and add your API key:
