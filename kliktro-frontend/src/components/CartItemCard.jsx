import { useState } from "react";

export default function CartItemCard({
  item,
  onUpdate = Function(),
  onRemove = Function(),
}) {
  const [qtyInput, setQtyInput] = useState(item.qty);

  const handleQtyInputChange = (ev) => {
    const value = parseInt(ev.target.value);

    if (value < 1) {
      setQtyInput(1);
      return;
    }

    if (value > item.stock) {
      setQtyInput(item.stock);
      return;
    }
    setQtyInput(value);
  };

  const handleUpdateQty = () => {
    onUpdate({ ...item, qty: qtyInput });
  };

  const handleRemoveQty = () => {
    onRemove(item.id);
  };

  return (
    <div>
      <img src={item.image_url} alt={item.name} />
      <div>Name: {item.name}</div>
      <div>Price: {item.price}</div>
      <div>Amount: {item.qty}</div>
      <div>
        <input type="number" onChange={handleQtyInputChange} value={qtyInput} />
        <div className="flex gap-2">
          <button
            onClick={handleUpdateQty}
            className="bg-gray-400 cursor-pointer">
            Update
          </button>
          <button
            onClick={handleRemoveQty}
            className="bg-gray-400 cursor-pointer">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
