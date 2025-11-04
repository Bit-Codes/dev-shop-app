import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import SearchSection from "@/components/SeachSection";
import { ThemedText } from "@/components/themed-text";
import { useProducts } from "@/contexts/ProductsContext";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default function HomeScreen() {
  const { navigate } = useRouter();
  const { products } = useProducts();

  return (
    <SafeAreaView>
      <SearchSection />
      <CategorySection />
      <ProductsSection>
        <ThemedText>Produtos</ThemedText>
        <FlatList
          data={products ?? []}
          renderItem={({ item }) => <ProductCard {...item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{
            paddingBottom: 20,
            flex: 1,
          }}
        />
      </ProductsSection>
    </SafeAreaView>
  );
}

const ProductsSection = styled.View`
  padding: 16px;
`;
const ProductsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
