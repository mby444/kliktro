// ProductCRUDTable.jsx
import ProductCRUDRow from "./ProductCRUDRow";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductCRUDTable({ data }) {
  if (!data.length) {
    return <div>No products yet.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product, i) => (
          <ProductCRUDRow key={i} product={product} />
        ))}
      </TableBody>
    </Table>
  );
}
