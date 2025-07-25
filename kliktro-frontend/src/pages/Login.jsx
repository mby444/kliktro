import useAuth from "../hooks/useAuth";
import SubmitButton from "../components/SubmitButton";

export default function Login() {
  const { actionState } = useAuth();

  return (
    <div>
      {!!actionState.message && (
        <div className="error-message">{actionState.message}</div>
      )}
      <form action={actionState.loginAction}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          required
        />
        <label htmlFor="password">Password</label>
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
