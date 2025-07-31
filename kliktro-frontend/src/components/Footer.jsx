import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Kliktro</h2>
          <p className="text-sm text-gray-400">
            Discover top electronic products with just a click. Shop easily,
            securely, and quickly.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/products" className="hover:text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link to="./" className="hover:text-white">
                Deals
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="./" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="./" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="./" className="hover:text-white">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest deals and product updates
          </p>
          <form className="flex flex-col items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full flex-1 px-4 py-2 rounded-md text-sm text-gray-900 bg-white placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full px-5 py-2 rounded-md text-sm font-medium text-white bg-gray-900 border border-gray-900 cursor-pointer hover:bg-gray-800 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Kliktro. All rights reserved.
      </div>
    </footer>
  );
}
