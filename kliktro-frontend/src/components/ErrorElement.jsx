import { useAsyncError } from "react-router";

export default function ErrorElement({ defaultMessage = "Error." }) {
  const error = useAsyncError();

  if (error.status === 404) {
    return <div>Product is not found.</div>;
  }

  return <div>{defaultMessage}</div>;
}
