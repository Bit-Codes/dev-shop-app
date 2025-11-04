import { Tabs } from "expo-router";
import React, { Suspense } from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useCart } from "@/contexts/CartContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import * as S from "@/styles/mainLayout.style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { getTotalItems } = useCart();

  return (
    <Suspense fallback={<View style={{ flex: 1 }} />}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarButton: HapticTab,
          header: ({ options }) => (
            <S.HeaderContainer>
              <S.NotifierBtn>
                <MaterialIcons
                  size={24}
                  name="notifications-none"
                  color="#fff"
                />
              </S.NotifierBtn>
            </S.HeaderContainer>
          ),
          tabBarStyle: {
            elevation: 0,
            backgroundColor: "transparent",
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                size={28}
                name="home-filled"
                color={
                  focused
                    ? Colors[colorScheme ?? "light"].brand
                    : Colors[colorScheme ?? "light"].bgIcon
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categorias",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                size={28}
                name="widgets"
                color={
                  focused
                    ? Colors[colorScheme ?? "light"].brand
                    : Colors[colorScheme ?? "light"].bgIcon
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Carrinho",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "relative" }}>
                <MaterialIcons
                  size={28}
                  name="shopping-basket"
                  color={
                    focused
                      ? Colors[colorScheme ?? "light"].brand
                      : Colors[colorScheme ?? "light"].bgIcon
                  }
                />

                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    right: -5,
                    backgroundColor: "red",
                    borderRadius: 10,
                    minWidth: 20,
                    height: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {getTotalItems()}
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favoritos",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                size={28}
                name="favorite-outline"
                color={
                  focused
                    ? Colors[colorScheme ?? "light"].brand
                    : Colors[colorScheme ?? "light"].bgIcon
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                size={28}
                name="account-circle"
                color={
                  focused
                    ? Colors[colorScheme ?? "light"].brand
                    : Colors[colorScheme ?? "light"].bgIcon
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="product/[id]"
          options={{
            headerShown: false,
            href: null,
          }}
        />
      </Tabs>
    </Suspense>
  );
}
