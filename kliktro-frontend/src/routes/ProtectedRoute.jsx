import { Outlet, Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import users from "../dummies/users.json";

export default function ProtectedRoute({ adminOnly = false }) {
  const getUser = (user) => {
    return users.find((saved) => {
      return (
        saved.email === user.email &&
        saved.password === user.password &&
        saved.is_admin === user.is_admin
      );
    });
  };

  const { user, loaded } = useAuth();

  if (!loaded) {
    return;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const savedUser = getUser(user);

  if (!savedUser) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !savedUser.is_admin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
