{
    const calculateResult = (amount, currency) => {
        const euroRate = 4.6511;
        const usdRate = 4.2225;
        const gbpRate = 5.2874;

        switch (currency) {
            case "EUR":
                return amount * euroRate;

            case "USD":
                return amount * usdRate;

            case "GBP":
                return amount * gbpRate;
        }
    };

    const updateResultText = (resultElement, amount, currencyElement, result) => {
        resultElement.innerHTML = `<strong> ${amount.toFixed(2)} ${currencyElement.value} = ${result.toFixed(2)} PLN </strong>`;
    };

    const onFormSubmit = (event, resultElement) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const result = calculateResult(amount, currencyElement.value);

        updateResultText(resultElement, amount, currencyElement, result);
    };

    const clearForm = (resultElement) => {
        resultElement.innerText = "--Wynik--";
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resultElement = document.querySelector(".js-result");

        formElement.addEventListener("submit", (event) => onFormSubmit(event, resultElement));
        formElement.addEventListener("reset", () => clearForm(resultElement));
    };

    init();

} 