import { useAsyncError } from "react-router";

export default function ErrorElement({ defaultMessage = "Error." }) {
  return <div>{defaultMessage}</div>;
}
