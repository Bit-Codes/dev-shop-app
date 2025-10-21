import AddToCartButton from "@/components/AddToCartButon";
import RatingBadge from "@/components/RatingBad";
import StatBadge from "@/components/StarBadge";
import { Colors } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

const Content = styled(ScrollView)`
  padding: 16px;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 250px;
  resize-mode: contain;
  border-radius: 12px;
`;

const Title = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
`;

const Price = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 22px;
  font-weight: bold;
  margin-top: 14px;
`;

const Description = styled.Text`
  color: ${({ theme }: any) => theme.text};
  margin-top: 16px;
  font-size: 15px;
  line-height: 22px;
`;

const DeliveryText = styled.Text`
  text-align: center;
  color: gray;
  margin-top: 12px;
  font-size: 13px;
`;

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = "light"; // ou useColorScheme()

  // Mock de produto — normalmente vem de uma API
  const product = {
    id,
    name: "Nintendo Switch, Gray",
    price: "£169.00",
    rating: 4.8,
    reviews: 117,
    satisfaction: "94%",
    comments: 8,
    description:
      "The Nintendo Switch gaming console is a compact device that can be taken everywhere. This portable super device is also equipped with 2 gamepads.",
  };

  return (
    <Container>
      <Content>
        {/* <ProductImage source={product.image} /> */}
        <Title>{product.name}</Title>

        <Row>
          <RatingBadge rating={product.rating} reviews={product.reviews} />
          <StatBadge icon="happy-outline" value={product.satisfaction} />
          <StatBadge icon="chatbubble-outline" value={product.comments} />
        </Row>

        <Price>{product.price}</Price>

        <Description>
          {product.description}{" "}
          <Description style={{ color: Colors[colorScheme].brand }}>
            Read more
          </Description>
        </Description>

        <AddToCartButton />
        <DeliveryText>Delivery on 26 October</DeliveryText>
      </Content>
    </Container>
  );
}
