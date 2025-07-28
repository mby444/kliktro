import { Ban } from "lucide-react";

export default function EmptyProduct() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
      <Ban size={48} className="mb-4" />
      <h2 className="text-xl font-semibold">No products yet</h2>
      <p className="text-sm text-gray-400">Please check back later.</p>
    </div>
  );
}
