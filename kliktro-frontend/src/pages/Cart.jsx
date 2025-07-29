import useCart from "../hooks/useCart";
import CartItemCard from "../components/CartItemCard";
import Breadcrumb from "@/components/Breadcrumb";
import EmptyCart from "@/components/EmptyCart";
import { Card, CardContent } from "@/components/ui/card";
import { formatRupiah } from "@/utils/stringFormatter";

export default function Cart() {
  const cart = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Breadcrumb />
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      {cart.isEmpty() ? (
        <EmptyCart />
      ) : (
        <>
          <div className="space-y-4 md:space-x-4 md:grid md:grid-cols-2">
            {cart.items.map((item, i) => (
              <CartItemCard
                key={i}
                item={item}
                onUpdate={cart.updateItem}
                onRemove={cart.removeItem}
              />
            ))}
          </div>
          <Card className="mt-6 p-4">
            <CardContent className="text-right text-xl font-semibold">
              Total:{" "}
              <span className="text-primary">
                {formatRupiah(cart.totalPrice)}
              </span>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
