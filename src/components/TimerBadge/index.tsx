import React from "react";
import styled from "styled-components/native";

const Badge = styled.View`
  background-color: ${({ theme }: any) => theme.brand};
  border-radius: 6px;
  padding: 4px 10px;
  align-self: flex-start;
`;

const Text = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-weight: bold;
`;

export default function TimerBadge() {
  return (
    <Badge>
      <Text>02:59:23</Text>
    </Badge>
  );
}
