// UI Components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Icons
import { AlertTriangleIcon } from "lucide-react";

export default function AsyncError({ message = "Something went wrong." }) {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Alert variant="destructive">
        <AlertTriangleIcon className="h-5 w-5" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
}
