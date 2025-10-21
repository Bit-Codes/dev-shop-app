import { useRouter } from "expo-router";
import React from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

const CardButton = styled.TouchableOpacity`
  width: 160px;
  background-color: ${({ theme }: any) => theme.background};
  border-radius: 16px;
  margin-right: 14px;
  elevation: 2;
  padding: 10px;
`;

const Img = styled.Image`
  width: 100%;
  height: 120px;
  resize-mode: contain;
  border-radius: 12px;
`;

const Name = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
`;

const Price = styled.Text`
  color: ${({ theme }: any) => theme.brand};
  font-weight: bold;
  font-size: 16px;
  margin-top: 4px;
`;

const OldPrice = styled.Text`
  color: gray;
  text-decoration: line-through;
  font-size: 12px;
`;

interface Props {
  id: string | number;
  name: string;
  price: string;
  oldPrice?: string;
  image?: ImageSourcePropType;
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
}: Props) {
  const router = useRouter();

  const handlePress = () => {
    router.navigate({ pathname: `/product/[id]`, params: { id } });
  };

  return (
    <CardButton activeOpacity={0.8} onPress={handlePress}>
      <Img source={image} />
      <Name numberOfLines={2}>{name}</Name>
      <Price>{price}</Price>
      {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
    </CardButton>
  );
}
