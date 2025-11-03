/**
 * @param {Object} params
 * @param {string} params.searchQuery
 * @param {boolean} params.inStockOnly
 * @param {number} params.priceFilter
 * @param {number} params.maxAvailablePrice
 * @returns {string}
 */
export const generateEmptyProductMessage = ({
  searchQuery,
  inStockOnly,
  priceFilter,
  maxAvailablePrice,
}) => {
  const conditions = [
    searchQuery && `matching "${searchQuery}"`,
    inStockOnly && "in stock",
    priceFilter < maxAvailablePrice && `under $${priceFilter}`,
  ].filter(Boolean);

  if (!conditions.length) return "No products found";
  if (conditions.length === 1) return `No products ${conditions[0]}`;

  return `No products ${conditions.slice(0, -1).join(", ")} and ${
    conditions[conditions.length - 1]
  }`;
};

export const parsePrice = (priceString) => Number(priceString.replace("$", ""));
