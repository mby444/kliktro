// Footer.jsx
import { Link } from "react-router";

// FIXME: Footer still not responsive, specifically in form
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
              <Link to="/categories" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/deals" className="hover:text-white">
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
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-white">
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

// export default function Footer() {
//   return (
//     <footer className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//         <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//           <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24">
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">Tailblocks</span>
//           </Link>
//           <p className="mt-2 text-sm text-gray-500">
//             Air plant banjo lyft occupy retro adaptogen indego
//           </p>
//         </div>
//         <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
//               CATEGORIES
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
//               </li>
//             </nav>
//           </div>
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
//               CATEGORIES
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
//               </li>
//             </nav>
//           </div>
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
//               CATEGORIES
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
//               </li>
//             </nav>
//           </div>
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
//               CATEGORIES
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
//               </li>
//               <li>
//                 <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
//               </li>
//             </nav>
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray-100">
//         <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//           <p className="text-gray-500 text-sm text-center sm:text-left">
//             © 2020 Tailblocks —
//             <Link
//               to="https://twitter.com/knyttneve"
//               rel="noopener noreferrer"
//               className="text-gray-600 ml-1"
//               target="_blank">
//               @knyttneve
//             </Link>
//           </p>
//           <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//             <Link className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//               </svg>
//             </Link>
//             <Link className="ml-3 text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24">
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//               </svg>
//             </Link>
//             <Link className="ml-3 text-gray-500">
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24">
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//               </svg>
//             </Link>
//             <Link className="ml-3 text-gray-500">
//               <svg
//                 fill="currentColor"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="0"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24">
//                 <path
//                   stroke="none"
//                   d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
//                 <circle cx="4" cy="4" r="2" stroke="none"></circle>
//               </svg>
//             </Link>
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }
