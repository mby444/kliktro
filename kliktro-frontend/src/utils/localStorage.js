export const saveData = (key, value) => {
  const stored = typeof value === "string" ? value : JSON.stringify(value);
  window.localStorage.setItem(key, stored);
};

export const restoreData = (key, defaultValue = null) => {
  const restored = window.localStorage.getItem(key);

  if (!restored) {
    return defaultValue;
  }

  return JSON.parse(restored);
};
