export const validator = {
  validId: (d) => {
    const reg = /^\d+$/;
    const isDigitOnly = reg.test(d.id);

    if (!isDigitOnly) {
      throw new Error("Invalid product ID.");
    }
  },
  noEmptyField: (d) => {
    const isAllFilled =
      d.name.trim() &&
      d.description.trim() &&
      d.price.trim() &&
      d.stock.trim() &&
      !!d.image &&
      d.category.trim();

    if (!isAllFilled) {
      throw new Error("All fields are required.");
    }
  },
  validPrice: (d) => {
    const reg = /^\d+$/;
    const isDigitOnly = reg.test(d.price);

    if (!isDigitOnly) {
      throw new Error("Invalid price amount.");
    }

    const isValidRange = parseInt(d.price) >= 1000;

    if (!isValidRange) {
      throw new Error("Price can't be less than Rp 1000.");
    }
  },
  validStock: (d) => {
    const reg = /^\d+$/;
    const isDigitOnly = reg.test(d.stock);

    if (!isDigitOnly) {
      throw new Error("Invalid stock amount.");
    }

    const isValidRange = parseInt(d.stock) >= 0;

    if (!isValidRange) {
      throw new Error("Stock can't be less than 0.");
    }
  },
  validImage: (d) => {
    if (!d.image.size) throw new Error("Product image is required.");

    if (!d.image.type.startsWith("image/")) {
      throw new Error("File must be an image.");
    }

    if (d.image.size > 2 * 1024 * 1024) {
      throw new Error("File is too large, maximum size is 2 MB.");
    }
  },
};

export const fixer = {
  fix: (d) => {
    return {
      ...d,
      id: parseInt(d.id),
      price: parseInt(d.price),
      stock: parseInt(d.stock),
    };
  },
};
