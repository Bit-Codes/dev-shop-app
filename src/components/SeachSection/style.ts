import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SearchInput = styled.TextInput`
  border-radius: 8px;
  background-color: ${({ theme }: any) => theme.bgIcon};
  padding: 16px;
  justify-content: center;
  text-align: center;
`;

export const SearchInputBox = styled(SafeAreaView)`
  width: 100%;
  padding: 0 24px;
`;

export const PromotionalBanner = styled.View``;
