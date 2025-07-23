import { useActionState } from "react";
import { useNavigate } from "react-router";
import SubmitButton from "../components/SubmitButton";
import { saveData } from "../utils/localStorage";
import users from "../dummies/users.json";

export default function Login() {
  const navigate = useNavigate();

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
      saveData("user", user);
      navigate(redirectPath);
    } catch (error) {
      return error.toString();
    }
  };

  const [message, loginAction] = useActionState(action, null);

  return (
    <div>
      {!!message && <div className="error-message">{message}</div>}
      <form action={loginAction}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          required
        />
        <SubmitButton />
      </form>
    </div>
  );
}
