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

    const resultElement = document.querySelector(".js-result");

    const updateResultText = (amount, currencyElement, result) => {
        resultElement.innerHTML = `<strong> ${amount.toFixed(2)} ${currencyElement.value} = ${result.toFixed(2)} PLN </strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const result = calculateResult(amount, currencyElement.value);

        updateResultText(amount, currencyElement, result);
    };

    const clearForm = () => {
        resultElement.innerText = `--Wynik--`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", clearForm);
    };

    init();
}