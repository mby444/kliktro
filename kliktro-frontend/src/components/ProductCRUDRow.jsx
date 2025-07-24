import { NavLink } from "react-router";

export default function ProductCRUDRow({ product }) {
  const handleEdit = () => {};

  const handleRemove = () => {};

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.category}</td>
      <td>{product.updated_at}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleRemove}>Remove</button>
      </td>
    </tr>
  );
}
