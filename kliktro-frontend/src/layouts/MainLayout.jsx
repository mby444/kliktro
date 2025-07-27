import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "@/hooks/useAuth";

export default function MainLayout() {
  const { loaded, user } = useAuth();

  if (!loaded) {
    return;
  }

  const isLogged = !!user;
  const isAdmin = (isLogged && user.is_admin) || false;

  return (
    <>
      <Navbar isLogged={isLogged} isAdmin={isAdmin} />
      <Outlet />
      <Footer />
    </>
  );
}
