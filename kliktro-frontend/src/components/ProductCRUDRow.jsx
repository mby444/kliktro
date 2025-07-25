import { useNavigate } from "react-router";
import useProducts from "../hooks/useProducts";

export default function ProductCRUDRow({ product }) {
  const navigate = useNavigate();
  const { removeProduct } = useProducts();

  const handleEdit = () => {
    navigate(`/admin/edit/${product.id}`);
  };

  const handleRemove = () => {
    // TODO: Confirmation box should be using sweetalert2
    if (!confirm("Are you sure?")) {
      return;
    }
    removeProduct(product.id);
  };

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
