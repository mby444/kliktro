import { useState } from "react";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
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
  Search,
  ShoppingCart,
  Menu as MenuIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import useAuth from "@/hooks/useAuth";

export default function Navbar({ isLogged = false, isAdmin = false }) {
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

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
        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-[200px]">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
              <Search className="w-4 h-4" />
            </span>
            <Input placeholder="Search products..." className="pl-8" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <a href="/cart" className="text-gray-700 hover:text-primary">
            <ShoppingCart className="w-6 h-6" />
          </a>

          {/* Mobile menu toggle */}
          <button onClick={toggleMobile} className="md:hidden">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-3 px-4 space-y-3">
          <a href="/" className="block text-gray-700 hover:text-primary">
            Home
          </a>
          <a
            href="/products"
            className="block text-gray-700 hover:text-primary">
            Products
          </a>
          <a href="/about" className="block text-gray-700 hover:text-primary">
            About
          </a>

          {isAdmin && (
            <Button
              asChild
              variant="secondary"
              className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Link
                to="/admin"
                className="flex items-center gap-1 text-sm justify-center">
                <Shield className="w-4 h-4" />
                Admin
              </Link>
            </Button>
          )}

          {isLogged ? (
            <Button
              asChild
              variant="secondary"
              className="w-full bg-red-100 text-red-700 hover:bg-red-200">
              <Link
                to="/logout"
                className="flex items-center gap-1 text-sm justify-center">
                <LogOut className="w-4 h-4" />
                Logout
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="secondary"
              className="w-full bg-green-100 text-green-700 hover:bg-green-200">
              <Link
                to="/login"
                className="flex items-center gap-1 text-sm justify-center">
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            </Button>
          )}

          <div className="flex items-center gap-2 mt-2">
            <Input placeholder="Search..." className="flex-1" />
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
