import { ReactNode, useState } from "react";
import { AuthContext } from "../../hooks/useAuth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Aquí la lógica de inicio de sesión. Por ejemplo, después de hacer una petición a la API y obtener una respuesta exitosa:
    const logged = true;
    setIsAuthenticated(logged);
    return logged;
  };

  const logout = () => {
    setIsAuthenticated(false);
    //eliminar tokens o hacer otras acciones de limpieza.
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
