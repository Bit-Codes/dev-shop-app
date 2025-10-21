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

export default function AddToCartButton() {
  return (
    <Button onPress={() => console.log("Added to cart")}>
      <Label>Add to cart</Label>
    </Button>
  );
}
