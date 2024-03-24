const currencyFormatter = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
});

export default currencyFormatter;

