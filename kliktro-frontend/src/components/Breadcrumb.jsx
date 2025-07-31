import { useLocation } from "react-router";
import { Home } from "lucide-react";
import { Link } from "react-router";

export default function Breadcrumb() {
  const location = useLocation();
  const splittedPath = location.pathname.split("/").slice(1);
  const last = splittedPath[splittedPath.length - 1];

  const upperFirstLetter = (word) =>
    word ? word.charAt(0).toUpperCase() + word.slice(1) : "";

  return (
    <div className="flex items-start sm:items-center text-sm text-gray-700 mt-8 mb-4">
      <Link to="/" className="flex items-center text-black hover:underline">
        <Home size={16} className="mr-1" />
      </Link>

      {splittedPath.map((pathname, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-1">/</span>
          <Link
            to={`/${pathname}`}
            className={`text-black ${pathname === last ? "font-medium" : ""}`}>
            {upperFirstLetter(pathname)}
          </Link>
        </span>
      ))}
    </div>
  );
}
