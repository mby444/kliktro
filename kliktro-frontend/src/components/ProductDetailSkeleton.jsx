import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow rounded-lg flex flex-col md:flex-row gap-8">
      {/* Gambar Produk */}
      <div className="relative w-full md:w-1/2">
        <Skeleton className="w-full h-[300px] rounded-lg" />
      </div>

      {/* Informasi Produk */}
      <div className="w-full md:w-1/2 space-y-4">
        <Skeleton className="h-8 w-3/4" /> {/* Nama Produk */}
        <Skeleton className="h-6 w-1/2" /> {/* Harga */}
        <Skeleton className="h-4 w-1/3" /> {/* Kategori */}
        <Skeleton className="h-4 w-1/4" /> {/* Stok */}
        <Skeleton className="h-20 w-full" /> {/* Deskripsi */}
        {/* Tombol Qty */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-10 w-12" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
        {/* Tombol Add to Cart */}
        <Skeleton className="h-10 w-[160px]" />
      </div>
    </div>
  );
}
