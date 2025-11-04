import AddToCartButton from "@/components/AddToCartButon";
import { useProducts } from "@/contexts/ProductsContext";
import { formatBRL } from "@/utils/formatBRL";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

const Content = styled(ScrollView)`
  padding: 16px;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 250px;

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
  const { getProductById } = useProducts();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await getProductById(Number(id));
        setProduct(productData);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };

    loadProduct();
  }, [id, getProductById]);

  return (
    product && (
      <Container>
        <Content>
          <ProductImage source={{ uri: product.image }} />
          <Title>{product.name}</Title>

          <Price>{formatBRL(product.price)}</Price>

          <Description>{product.description}</Description>

          <AddToCartButton product={product} />
        </Content>
      </Container>
    )
  );
}
