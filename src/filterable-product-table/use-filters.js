import { useState } from "react";

import { MAX_PRODUCT_PRICE } from "../constants";

export default function useFilters() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("category");
  const [priceFilter, setPriceFilter] = useState(MAX_PRODUCT_PRICE);

  const clearFilters = () => {
    setFilterText("");
    setInStockOnly(false);
    setSortBy("category");
    setPriceFilter(MAX_PRODUCT_PRICE);
  };

  return {
    filterText,
    inStockOnly,
    sortBy,
    priceFilter,
    setFilterText,
    setInStockOnly,
    setSortBy,
    setPriceFilter,
    clearFilters,
  };
}
