import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const FormBox = styled(ThemedView)`
  width: 80%;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  gap: 16px;
`;

export const FormTitle = styled(ThemedText)`
  font-size: 24px;
`;

export const FormContainer = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const FormSubTitle = styled(ThemedText)`
  font-size: 16px;
`;

export const FormInput = styled.TextInput`
  padding: 8px;
  border-radius: 6px;
  width: 100%;
  background-color: #e2e2e2;
`;

export const FormInputlabel = styled(ThemedText)`
  font-size: 18px;
`;

export const FormInputBox = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const HelperText = styled(Link)`
  color: ${({ theme }: any) => theme.brandSecondary};
  font-size: 14px;
`;

export const ErrorText = styled.Text`
  color: #d30a0a;
  font-size: 12px;
`;
