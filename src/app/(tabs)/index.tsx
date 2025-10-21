import CategorySection from "@/components/CategorySection";
import FlashSaleSection from "@/components/FlashSaleSection";
import SearchSection from "@/components/SeachSection";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { navigate } = useRouter();
  return (
    <SafeAreaView>
      <SearchSection />
      <CategorySection />
      <FlashSaleSection />
    </SafeAreaView>
  );
}
