import { useFormStatus } from "react-dom";
import { Loader2Icon } from "lucide-react";
import { Button } from "./ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="cursor-pointer">
      {pending ? (
        <>
          <Loader2Icon className="animate-spin" />
          Submitting...
        </>
      ) : (
        <>Submit</>
      )}
    </Button>
  );
}
