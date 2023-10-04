import { useAuth } from "../../hooks/useAuth";
import SignInUpLayout, { FormData } from "../Layouts/SignInUpLayout";

const Login = () => {
  const dataShapeObj: FormData = {
    username: "",
    password: "",
  };

  const { login } = useAuth();

  return (
    <SignInUpLayout
      heading="Login"
      btnText="Submit"
      dataShapeObj={dataShapeObj}
      authFn={login}
    />
  );
};

export default Login;
