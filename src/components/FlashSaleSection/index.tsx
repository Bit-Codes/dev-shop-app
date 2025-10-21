import React from "react";
import styled from "styled-components/native";
import ProductCard from "../ProductCard";
import TimerBadge from "../TimerBadge";

const Container = styled.View`
  margin-top: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const Title = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;

const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 12px;
  padding-left: 16px;
`;

export default function FlashSaleSection() {
  const products = [
    {
      name: "Apple iPhone 15 Pro 128GB",
      price: "£699.00",
      oldPrice: "£739.00",
    },
    {
      name: "Samsung Galaxy Buds Pro",
      price: "£69.00",
      oldPrice: "£86.00",
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Flash Sale</Title>
        <TimerBadge />
      </Header>
      <Scroll>
        {products.map((item) => (
          <ProductCard
            id={item.name}
            key={item.name}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            // image={item.image}
          />
        ))}
      </Scroll>
    </Container>
  );
}
