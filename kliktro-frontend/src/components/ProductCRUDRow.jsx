import { useNavigate } from "react-router";
import useProducts from "../hooks/useProducts";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import dayjs from "dayjs";

export default function ProductCRUDRow({ product }) {
  const navigate = useNavigate();
  const { removeProduct } = useProducts();

  const handleEdit = () => {
    navigate(`/admin/edit/${product.id}`);
  };

  const handleRemove = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      removeProduct(product.id);
      Swal.fire("Deleted!", "The product has been deleted.", "success");
    }
  };

  const formattedDate = dayjs(product.updated_at).format("DD MMMM YYYY, HH:mm");

  return (
    <TableRow>
      <TableCell>{product.name}</TableCell>
      <TableCell>Rp {product.price.toLocaleString()}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button
            onClick={handleEdit}
            size="sm"
            variant="secondary"
            className="cursor-pointer p-2">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleRemove}
            size="sm"
            variant="destructive"
            className="cursor-pointer p-2">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
