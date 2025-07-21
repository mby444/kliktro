import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Home() {
  const cart = useContext(CartContext);
  return <>Home</>;
}
