import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function Searchbar({ isMobile = false, onSearch = Function() }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState("");
  const [inputMobile, setInputMobile] = useState("");

  const search = (value = "") => {
    if (!value.trim()) {
      return;
    }

    onSearch();
    navigate(`/products?search=${value}`);
  };

  useEffect(() => {
    setInput(searchParams.get("search") || "");
    setInputMobile(searchParams.get("search") || "");
  }, [searchParams.get("search")]);

  const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  const handleEnter = (ev) => {
    if (ev.key !== "Enter") {
      return;
    }
    search(ev.target.value);
  };

  const handleChangeMobile = (ev) => {
    setInputMobile(ev.target.value);
  };

  const handleEnterMobile = (ev) => {
    if (ev.key !== "Enter") {
      return;
    }
    search(ev.target.value);
  };

  const handleSearchClickMobile = () => {
    if (!inputMobile.trim()) {
      return;
    }
    search(inputMobile);
  };

  return isMobile ? (
    // Mobile component
    <div className="flex items-center gap-2 mt-2">
      <Input
        value={inputMobile}
        onChange={handleChangeMobile}
        onKeyDown={handleEnterMobile}
        placeholder="Search..."
        className="flex-1"
      />
      <Button variant="outline" size="sm" onClick={handleSearchClickMobile}>
        <Search className="w-4 h-4" />
      </Button>
    </div>
  ) : (
    // Desktop component
    <div className="hidden md:flex items-center gap-2">
      <div className="relative w-[200px]">
        <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
          <Search className="w-4 h-4" />
        </span>
        <Input
          value={input}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="Search products..."
          className="pl-8"
        />
      </div>
    </div>
  );
}
