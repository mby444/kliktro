import { Outlet } from "react-router";
import AuthContext from "../context/AuthContext";
import useAuthProvider from "../hooks/useAuthProvider";

export default function AuthProvider() {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={auth}>
      <Outlet />
    </AuthContext.Provider>
  );
}
