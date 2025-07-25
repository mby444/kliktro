import { useState, useEffect } from "react";
import { saveData, restoreData } from "../utils/localStorage";

// This custom hook used by /src/providers/CartProvider.jsx
const useCartProvider = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const storeToLocalStorage = () => {
    saveData("cart_items", items);
  };

  const restoreFromLocalStorage = () => {
    const restored = restoreData("cart_items", []);

    if (!restored.length) {
      return;
    }

    setItems(restored);
  };

  const excludeItem = (id) => {
    return items.filter((item) => item.id !== id);
  };

  const isEmpty = () => {
    return items.length === 0;
  };

  const hasItem = (id) => {
    return items.findIndex((item) => item.id === id) !== -1;
  };

  const addItem = (item) => {
    const newItemList = excludeItem(item.id);
    setItems([...newItemList, item]);
  };

  const updateItem = (updatedItem) => {
    const updatedIndex = items.findIndex((item) => item.id === updatedItem.id);

    if (updatedIndex === -1) {
      console.log("Can't update item, it's not found.");
      return;
    }

    const newItemList = items.map((item, i) => {
      if (i === updatedIndex) {
        return updatedItem;
      }
      return item;
    });

    setItems(newItemList);
  };

  const removeItem = (id) => {
    setItems(excludeItem(id));
  };

  const calculateTotalPrice = () => {
    const result = items
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);

    setTotalPrice(result);
  };

  useEffect(() => {
    restoreFromLocalStorage();
  }, []);

  useEffect(() => {
    storeToLocalStorage();
    calculateTotalPrice();
  }, [items]);

  return {
    items,
    totalPrice,
    isEmpty,
    hasItem,
    addItem,
    updateItem,
    removeItem,
  };
};

export default useCartProvider;
