export function formateCurrency(value: string) {
    const decimalIndex = value.indexOf('.');
    if (decimalIndex !== -1) {
        return value.substring(0, decimalIndex);
    }
    return value;
}