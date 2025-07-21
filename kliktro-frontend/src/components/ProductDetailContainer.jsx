import { useAsyncValue } from "react-router";

export default function ProductDetailContainer() {
  const { data } = useAsyncValue();
  return (
    <div>
      <img src={data.image_url} alt={data.name} />
      <div>Name: {data.name}</div>
      <div>Price: {data.price}</div>
      <div>Stock: {data.stock}</div>
      <div>{data.description}</div>
    </div>
  );
}
