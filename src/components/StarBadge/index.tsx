import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

const Badge = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: any) => theme.brandSecondary};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Text = styled.Text`
  color: ${({ theme }: any) => theme.text};
  margin-left: 4px;
  font-weight: 500;
`;

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  value: string | number;
}

export default function StatBadge({ icon, value }: Props) {
  return (
    <Badge>
      <Ionicons name={icon} size={16} color="#111" />
      <Text>{value}</Text>
    </Badge>
  );
}
