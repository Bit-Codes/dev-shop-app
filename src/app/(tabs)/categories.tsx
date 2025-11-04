import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/contexts/ProductsContext";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const Header = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }: any) => theme.text};
  margin-bottom: 20px;
`;

const CategoriesList = styled.FlatList`
  margin-bottom: 20px;
` as any;

const CategoryCard = styled.TouchableOpacity<{ selected?: boolean }>`
  background-color: ${({ theme, selected }: any) =>
    selected ? theme.brand : theme.brandSecondary};
  border-radius: 12px;
  padding: 12px 20px;
  margin-right: 12px;
  min-width: 100px;
  align-items: center;
  justify-content: center;
`;

const CategoryLabel = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-weight: 600;
  font-size: 14px;
`;

const ProductsSection = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }: any) => theme.text};
  margin-bottom: 16px;
`;

const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const EmptyText = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 16px;
  text-align: center;
  opacity: 0.6;
`;

export default function Categories() {
  const { categories, products, getProductsByCategory, loadProducts } =
    useProducts();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryPress = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    if (categoryId === null) {
      loadProducts();
    } else {
      getProductsByCategory(categoryId);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <CategoriesList
          data={[{ id: null, name: "Todos" }, ...categories]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item.id?.toString() || "all"}
          renderItem={({ item }: any) => (
            <CategoryCard
              selected={selectedCategory === item.id}
              onPress={() => handleCategoryPress(item.id)}
              activeOpacity={0.7}
            >
              <CategoryLabel>{item.name}</CategoryLabel>
            </CategoryCard>
          )}
        />
      </Header>

      <ProductsSection>
        <SectionTitle>
          {selectedCategory === null ? "Todos os Produtos" : "Produtos"}
        </SectionTitle>
        {products.length === 0 ? (
          <EmptyContainer>
            <EmptyText>Nenhum produto encontrado nesta categoria</EmptyText>
          </EmptyContainer>
        ) : (
          <FlatList
            data={products ?? []}
            renderItem={({ item }) => <ProductCard {...item} />}
            keyExtractor={(item, index) =>
              item.id?.toString() || index.toString()
            }
            numColumns={2}
            columnWrapperStyle={{
              paddingBottom: 20,
              justifyContent: "space-between",
            }}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </ProductsSection>
    </Container>
  );
}
