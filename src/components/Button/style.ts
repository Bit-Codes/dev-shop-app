import styled from "styled-components/native";

export const Button = styled.Pressable`
  background-color: ${({ theme }: any) => theme.brand};
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  align-items: center;
`;
