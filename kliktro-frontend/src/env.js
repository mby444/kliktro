const env = (key, defaultValue = null) => {
  return import.meta.env[key] || defaultValue;
};

export default env;
