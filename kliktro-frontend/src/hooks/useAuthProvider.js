import { useState, useEffect, useActionState } from "react";
import { useNavigate } from "react-router";
import { saveData, restoreData } from "../utils/localStorage";
import users from "../dummies/users.json";

// This custom hook used by /src/providers/AuthProvider.jsx
const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  const storeToLocalStorage = () => {
    if (!user) {
      return;
    }
    saveData("user", user);
  };

  const restoreFromLocalStorage = () => {
    const restored = restoreData("user", null);

    if (!restored) {
      return;
    }

    setUser(restored);
  };

  const getAndValidateUser = (email, password) => {
    const user = users.find((user) => user.email === email);

    if (!user) {
      throw new Error(`${email} haven't been signed yet.`);
    }

    if (password !== user.password) {
      throw new Error("Invalid password.");
    }

    return user;
  };

  const action = (prevState, formData) => {
    "use server";

    const email = formData.get("email").toLowerCase();
    const password = formData.get("password");

    try {
      const user = getAndValidateUser(email, password);
      const redirectPath = user.is_admin ? "/admin" : "/";
      setUser(user);
      navigate(redirectPath);
    } catch (error) {
      return error.toString();
    }
  };

  const [message, loginAction] = useActionState(action, null);

  useEffect(() => {
    restoreFromLocalStorage();
    setLoaded(true);
  }, []);

  useEffect(() => {
    storeToLocalStorage();
  }, [user]);

  return { user, loaded, actionState: { message, loginAction } };
};

export default useAuthProvider;
