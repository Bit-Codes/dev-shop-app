import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import ToastManager from "toastify-react-native";

import { Colors } from "@/constants/theme";
import AuthProvider from "@/contexts/AuthContext";
import CartProvider from "@/contexts/CartContext";
import ProductsProvider from "@/contexts/ProductsContext";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ToastManager />
      <ProductsProvider>
        <CartProvider>
          <StyledThemeProvider
            theme={colorScheme === "dark" ? Colors.dark : Colors.light}
          >
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Stack initialRouteName="(tabs)">
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ title: "Voltar" }} />
              </Stack>
              <StatusBar style="auto" />
            </ThemeProvider>
          </StyledThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
