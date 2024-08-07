export function calculateDiscountedPrice(originalPrice: number, discountPercentage: number) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice.toFixed(2);
}