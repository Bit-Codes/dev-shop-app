import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/types/cart";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }: any) => theme.brand};
  padding: 16px;
  border-radius: 12px;
  margin-top: 24px;
`;

const Label = styled.Text`
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export default function AddToCartButton({ product }: { product: CartItem }) {
  const { addToCart } = useCart();
  return (
    <Button onPress={() => addToCart(product)}>
      <Label>Adicionar</Label>
    </Button>
  );
}
