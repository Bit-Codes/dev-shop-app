import { authService } from "@/services/api";
import { AuthContextType } from "@/types/auth";
import { User } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Toast } from "toastify-react-native";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authService.getCurrentUser();
      if (user) {
        setUser(user.user);
        return;
      }
      logout();
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await authService.login(email, password);
      setUser(data.user);
      AsyncStorage.setItem("@token", data.accessToken);
      Toast.success("Login concluído");
      router.push("/(tabs)");
    } catch (error: any) {
      Toast.error(error.message);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const data = await authService.register(name, email, password);
      setUser(data.user);
      AsyncStorage.setItem("@token", data.accessToken);
      Toast.success("Registro concluído");
      router.push("/(tabs)");
    } catch (error: any) {
      Toast.error(error.message);
    }
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = (): AuthContextType => useContext(AuthContext);
