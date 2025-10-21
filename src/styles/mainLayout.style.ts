import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HeaderContainer = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 4px 16px;
  height: 30px;
`;

export const NotifierBtn = styled.Pressable`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }: any) => theme.bgIcon};
  justify-content: center;
  align-items: center;
`;
