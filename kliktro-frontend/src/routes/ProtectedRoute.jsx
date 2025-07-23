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

  const auth = useAuth();
  const user = auth.user;

  if (!auth.loaded) {
    console.log("Unloaded");
    return;
  }

  console.log(auth);
  if (!user) {
    console.log("Not passed 1");
    return <Navigate to="/login" />;
    // return <div>Hellooooooooooooooooooooooooooooooooooooooo</div>;
  }

  const savedUser = getUser(user);

  if (!savedUser) {
    console.log("Not passed 2", savedUser, user);
    return <Navigate to="/login" />;
  }

  if (adminOnly && !savedUser.is_admin) {
    console.log("Not passed 3");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
