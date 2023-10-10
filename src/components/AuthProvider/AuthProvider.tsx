import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/useAuth";
import { IFormData } from "../Layouts/SignInUpLayout";
import useLogin from "../../hooks/useLogin";
// import { Spinner } from "@chakra-ui/react";
import useSignup from "../../hooks/useSignup";
import useUser from "../../hooks/useUser";

export interface User {
  email: string;
  username: string;
  token: string;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  console.log("currentUser ", currentUser);

  const {
    mutate: mutateLogin,
    // isLoading: isLoadingLogin,
    error: errorLogin,
  } = useLogin();

  const {
    mutate: mutateSignup,
    // isLoading: isLoadingSignup,
    // error: errorSignup,
  } = useSignup();

  const { data: userData, error: userError } = useUser(
    localStorage.getItem("token") || ""
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setCurrentUser({
        email: "",
        username: userData?.username || "",
        token: localStorage.getItem("token") || "",
      });
      if (userError) setIsAuthenticated(false);

      setIsAuthenticated(true);
    }
  }, [userData, userError]);

  if (errorLogin) return null; // [] its a truty value
  // if (isLoading) return <Spinner />;

  const login = async (user: IFormData): Promise<boolean> => {
    return new Promise((resolve) => {
      mutateLogin(user, {
        onSuccess: (loginApiResponse) => {
          console.log("loginApiResponse ", loginApiResponse);
          const token = String(loginApiResponse.token);
          localStorage.setItem("token", token);
          console.log("EL USUAARIO", user);
          setCurrentUser({
            email: user.email,
            username: loginApiResponse.username || "user",
            token: token,
          });
          setIsAuthenticated(true);
          resolve(true); // Login exitoso, se retorna true
        },
        onError: (error) => {
          // handle error
          console.log(error);
          setIsAuthenticated(false);
          resolve(false); // Error en el login, se retorna false
        },
      });
    });
  };

  const signup = (user: IFormData): Promise<boolean> => {
    return new Promise((resolve) => {
      mutateSignup(user, {
        onSuccess: (signupApiResponse) => {
          console.log("signupApiResponse ", signupApiResponse);
          const token = String(signupApiResponse.token);
          // if (!localStorage.getItem("token"))
          localStorage.setItem("token", token);
          setCurrentUser({
            email: user.email,
            username: user.username || "user",
            token: token,
          });
          setIsAuthenticated(true);
          resolve(true); // Login exitoso, se retorna true
        },
        onError: (error) => {
          // handle error
          console.log("error ", error);
          setIsAuthenticated(false);
          resolve(false); // Error en el login, se retorna false
        },
      });
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    //eliminar tokens o hacer otras acciones de limpieza.
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
