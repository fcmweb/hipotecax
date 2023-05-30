export function formateador(cifra) {
    let money = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(cifra);
        return money;
}
