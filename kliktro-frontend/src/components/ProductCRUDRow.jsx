import { useNavigate } from "react-router";
import useProducts from "../hooks/useProducts";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";

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
    <TableRow>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{product.updated_at}</TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button
            onClick={handleEdit}
            size="sm"
            variant="secondary"
            className="cursor-pointer">
            Edit
          </Button>
          <Button
            onClick={handleRemove}
            size="sm"
            variant="destructive"
            className="cursor-pointer">
            Remove
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
