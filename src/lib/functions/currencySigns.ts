const currencySigns: Record<string, string> = {
    PLN: "zł",
    USD: "$",
    EUR: "€",
};

export default function getCurrencySign(currencyCode: string) {
    return currencySigns[currencyCode] || currencyCode;
}