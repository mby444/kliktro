import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Shield,
  LogIn,
  LogOut,
  ShoppingCart,
  Menu as MenuIcon,
} from "lucide-react";
import useAuth from "@/hooks/useAuth";
import Searchbar from "./Searchbar";

export default function Navbar({ isLogged = false, isAdmin = false }) {
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-primary">Kliktro</div>

        {/* Desktop Menu */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-primary">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/products"
                  className="text-sm text-gray-700 hover:text-primary">
                  Products
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/about"
                  className="text-sm text-gray-700 hover:text-primary">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {isAdmin && (
              <NavigationMenuItem>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer">
                  <Link to="/admin" className="flex items-center gap-1 text-sm">
                    <Shield className="w-4 h-4" />
                    Admin
                  </Link>
                </Button>
              </NavigationMenuItem>
            )}

            {isLogged ? (
              <NavigationMenuItem>
                <Button
                  onClick={logout}
                  asChild
                  variant="secondary"
                  className="bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer">
                  <div className="flex items-center gap-1 text-sm">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </div>
                </Button>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer">
                  <Link to="/login" className="flex items-center gap-1 text-sm">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                </Button>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search */}
        <Searchbar onSearch={closeMobile} />
        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-gray-700 hover:text-primary">
            <ShoppingCart className="w-6 h-6" />
          </Link>

          {/* Mobile menu toggle */}
          <button onClick={toggleMobile} className="md:hidden">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/90 backdrop-blur-md p-6 transition-all animate-in fade-in slide-in-from-top duration-300 md:hidden shadow-lg rounded-b-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold">Menu</div>
            <button
              onClick={closeMobile}
              className="text-gray-600 hover:text-black transition">
              <MenuIcon className="w-6 h-6 rotate-90" />
            </button>
          </div>

          <nav className="space-y-4">
            <Link
              to="/"
              onClick={closeMobile}
              className="block text-gray-800 text-base font-medium hover:text-primary transition">
              Home
            </Link>
            <Link
              to="/products"
              onClick={closeMobile}
              className="block text-gray-800 text-base font-medium hover:text-primary transition">
              Products
            </Link>
            <Link
              to="/about"
              onClick={closeMobile}
              className="block text-gray-800 text-base font-medium hover:text-primary transition">
              About
            </Link>

            {isAdmin && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-2 text-blue-700 hover:bg-blue-50 transition">
                <Link to="/admin" onClick={closeMobile}>
                  <Shield className="w-4 h-4" />
                  Admin Panel
                </Link>
              </Button>
            )}

            {isLogged ? (
              <Button
                onClick={() => {
                  logout();
                  closeMobile();
                }}
                variant="outline"
                className="w-full justify-start gap-2 text-red-700 hover:bg-red-50 transition">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-2 text-green-700 hover:bg-green-50 transition">
                <Link to="/login" onClick={closeMobile}>
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </Button>
            )}
          </nav>

          <div className="mt-6">
            <Searchbar isMobile={true} onSearch={closeMobile} />
          </div>
        </div>
      )}
    </header>
  );
}
