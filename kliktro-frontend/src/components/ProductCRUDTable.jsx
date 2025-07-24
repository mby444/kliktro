import { useAsyncValue } from "react-router";
import ProductCRUDRow from "./ProductCRUDRow";

export default function ProductCRUDTable() {
  const { data } = useAsyncValue();

  if (!data.length) {
    return <div>No products yet.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Last Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, i) => (
          <ProductCRUDRow key={i} product={product} />
        ))}
      </tbody>
    </table>
  );
}
