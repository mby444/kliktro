import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/utils/stringFormatter";
import { useState } from "react";

export default function CartItemCard({
  item,
  onUpdate = Function(),
  onRemove = Function(),
}) {
  const [qtyInput, setQtyInput] = useState(item.qty);

  const increaseQty = () => {
    if (qtyInput < item.stock) {
      setQtyInput(qtyInput + 1);
      onUpdate({ ...item, qty: qtyInput + 1 });
    }
  };

  const decreaseQty = () => {
    if (qtyInput > 1) {
      setQtyInput(qtyInput - 1);
      onUpdate({ ...item, qty: qtyInput - 1 });
    }
  };

  const handleRemoveQty = () => {
    onRemove(item.id);
  };

  return (
    <div className="flex gap-4 border p-4 rounded-xl items-center">
      <img
        src={item.image_url}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2 flex-grow">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-gray-600">{formatRupiah(item.price)}</div>
        <div className="flex items-center gap-2">
          <Button
            onClick={decreaseQty}
            disabled={qtyInput <= 1}
            variant="outline"
            size="sm">
            −
          </Button>
          <span className="px-4 py-2 border rounded-md select-none">
            {qtyInput}
          </span>
          <Button
            onClick={increaseQty}
            disabled={qtyInput >= item.stock}
            variant="outline"
            size="sm">
            +
          </Button>
        </div>
        <div className="flex gap-2 mt-2">
          <Button onClick={handleRemoveQty} variant="destructive">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
