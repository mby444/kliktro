import { useState } from "react";
import { Link } from "react-router";
import SubmitButton from "./SubmitButton";

export default function ProductForm({ data = {}, action = Function() }) {
  const [input, setInput] = useState(data);

  const handleInputChange = (ev) => {
    const { id: key, value } = ev.target;
    setInput({ ...input, [key]: value });
  };

  return (
    <form action={action} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900">
          Product Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={input.name || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Description..."
          value={input.description || ""}
          onChange={handleInputChange}></textarea>
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900">
          Price
        </label>
        <input
          name="price"
          type="number"
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={input.price || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="stock"
          className="block mb-2 text-sm font-medium text-gray-900">
          Stock
        </label>
        <input
          name="stock"
          type="number"
          id="stock"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={input.stock || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="image_url"
          className="block mb-2 text-sm font-medium text-gray-900">
          Product Photo URL
        </label>
        <input
          name="image_url"
          type="url"
          id="image_url"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={input.image_url || ""}
          onChange={handleInputChange}
        />
      </div>
      {/* <div className="mb-5">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="product_photo">
          Upload file
        </label>
        <input
          name=""
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          aria-describedby="product_photo_help"
          id="product_photo"
          type="file"
        />
        <div
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="product_photo_help">
          A photo of your product
        </div>
      </div> */}
      <div className="mb-5">
        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select product category
        </label>
        <select
          name="categories"
          id="categories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          defaultValue={input.category || ""}
          onChange={handleInputChange}>
          <option value="">-- Select --</option>
          <option value="Audio">Audio</option>
          <option value="Television">Television</option>
          <option value="Computers">Computers</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Camera">Camera</option>
          <option value="Computer Accessories">Computer Accessories</option>
          <option value="Wearable">Wearable</option>
          <option value="Tablet">Tablet</option>
          <option value="Accessories">Accessories</option>
          <option value="Drone">Drone</option>
        </select>
      </div>
      <Link to="/admin" className="bg-gray-500 mx-4">
        Back
      </Link>
      <SubmitButton />
    </form>
  );
}
