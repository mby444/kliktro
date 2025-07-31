// Hooks
import useAuth from "@/hooks/useAuth";

// Components
import SubmitButton from "@/components/SubmitButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// Icons
import { AlertCircle } from "lucide-react";

// Router
import { Link } from "react-router";

export default function Login() {
  const { actionState } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {actionState.message && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{actionState.message}</AlertDescription>
            </Alert>
          )}

          <form action={actionState.loginAction} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                autoComplete="new-email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                required
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-2 pt-2">
              <Button asChild variant="outline" className="w-1/2">
                <Link to="/">Cancel</Link>
              </Button>

              <div className="w-1/2">
                <SubmitButton className="w-full" />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
