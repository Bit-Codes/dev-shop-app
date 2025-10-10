import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { navigate } = useRouter();
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigate("/");
        }}
      >
        <Text>Vibrar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
