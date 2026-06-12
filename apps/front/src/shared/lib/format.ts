const priceFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
});

export const formatPrice = (price: number): string => priceFormatter.format(price);
