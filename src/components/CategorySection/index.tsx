import { useProducts } from "@/contexts/ProductsContext";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 10px 0;
`;

const Title = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
`;

const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 8px;
  padding-left: 16px;
`;

const CategoryCard = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.brandSecondary};
  border-radius: 12px;
  padding: 14px 20px;
  margin-right: 10px;
`;

const Label = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-weight: 600;
`;

export default function CategorySection() {
  const { categories, getProductsByCategory, loadProducts } = useProducts();

  return (
    <Container>
      <Title>Categories</Title>
      <Scroll>
        <CategoryCard onPress={() => loadProducts()}>
          <Label>Todos</Label>
        </CategoryCard>
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            onPress={() => getProductsByCategory(cat.id)}
          >
            <Label>{cat.name}</Label>
          </CategoryCard>
        ))}
      </Scroll>
    </Container>
  );
}
