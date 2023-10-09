import { ReactNode, useState } from "react";
import { AuthContext } from "../../hooks/useAuth";
import { IFormData } from "../Layouts/SignInUpLayout";
import useLogin from "../../hooks/useLogin";
import { Spinner } from "@chakra-ui/react";

export interface User {
  email: string;
  token: string;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const { mutate, isLoading, error } = useLogin();

  if (error) return null; // [] its a truty value
  // if (isLoading) return <Spinner />;

  const login = async (user: IFormData): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      mutate(user, {
        onSuccess: (loginApiResponse) => {
          console.log("loginApiResponse ", loginApiResponse);
          const token = String(loginApiResponse.token);
          localStorage.setItem("token", token);
          setCurrentUser({
            email: user.email,
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

  const signup = () => {
    const registered = true;
    setIsAuthenticated(registered);
    return registered;
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
