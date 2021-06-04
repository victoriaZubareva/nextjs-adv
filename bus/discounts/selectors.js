export const selectDiscounts = (state) => state.discounts;
export const selectDiscountById = (id) => (state) => state.discounts.find((discount) => discount.id === id);
