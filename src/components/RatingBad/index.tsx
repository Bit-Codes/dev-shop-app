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
  rating: number;
  reviews: number;
}

export default function RatingBadge({ rating, reviews }: Props) {
  return (
    <Badge>
      <Ionicons name="star" size={16} color="#f4d03f" />
      <Text>
        {rating} ({reviews} reviews)
      </Text>
    </Badge>
  );
}
