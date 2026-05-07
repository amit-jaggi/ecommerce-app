export const getOriginalPrice = (discountRate, sellingPrice) => {
    return sellingPrice / (1 - discountRate / 100);
};