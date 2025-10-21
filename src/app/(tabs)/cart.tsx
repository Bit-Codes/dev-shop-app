import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
  padding: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }: any) => theme.text};
`;

const AddressBox = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.card};
  border-radius: 12px;
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const AddressText = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${({ theme }: any) => theme.text};
`;

const SelectAll = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const SelectText = styled.Text`
  color: ${({ theme }: any) => theme.text};
  margin-left: 6px;
`;

const ItemCard = styled.View`
  background-color: ${({ theme }: any) => theme.card};
  border-radius: 12px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const Img = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 10px;
`;

const ItemInfo = styled.View`
  flex: 1;
`;

const ItemName = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-weight: 600;
  font-size: 14px;
`;

const ItemPrice = styled.Text`
  color: ${({ theme }: any) => theme.brand};
  font-weight: bold;
  font-size: 16px;
  margin-top: 4px;
`;

const QtyBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const QtyBtn = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.brand};
  border-radius: 50px;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
`;

const QtyText = styled.Text`
  margin: 0 8px;
  color: ${({ theme }: any) => theme.text};
`;

const CheckoutBtn = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.brand};
  padding: 16px;
  border-radius: 14px;
  align-items: center;
  margin-top: auto;
`;

const CheckoutText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

const items = [
  {
    id: "1",
    name: "Nintendo Switch Lite, Yellow",
    price: "£109.00",
  },
  {
    id: "2",
    name: "The Legend of Zelda: Tears of the Kingdom (Nintendo Switch)",
    price: "£39.00",
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(items);

  return (
    <Container>
      <Header>
        <Title>Cart</Title>
        <MaterialIcons name="more-horiz" size={24} color="#888" />
      </Header>

      <AddressBox>
        <MaterialIcons name="location-on" size={20} color="#888" />
        <AddressText>92 High Street, London</AddressText>
        <MaterialIcons name="chevron-right" size={22} color="#888" />
      </AddressBox>

      <SelectAll>
        <MaterialIcons name="check-circle" size={22} color="#6dd97f" />
        <SelectText>Select all</SelectText>
      </SelectAll>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard>
            <MaterialIcons name="check-circle" size={22} color="#6dd97f" />
            {/* <Img source={item.image} /> */}
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemInfo>

            <QtyBox>
              <QtyBtn>
                <MaterialIcons name="remove" size={18} color="#fff" />
              </QtyBtn>
              <QtyText>1</QtyText>
              <QtyBtn>
                <MaterialIcons name="add" size={18} color="#fff" />
              </QtyBtn>
            </QtyBox>
          </ItemCard>
        )}
      />

      <CheckoutBtn>
        <CheckoutText>Checkout</CheckoutText>
      </CheckoutBtn>
    </Container>
  );
}
