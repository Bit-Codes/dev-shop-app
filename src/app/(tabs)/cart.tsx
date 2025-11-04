import { useCart } from "@/contexts/CartContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
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

const EmptyCartContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyCartText = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 18px;
  text-align: center;
  margin-top: 16px;
`;

const TotalContainer = styled.View`
  background-color: ${({ theme }: any) => theme.card};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
`;

const TotalText = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export default function CartScreen() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  console.log(items);

  return (
    <Container>
      <Header>
        <Title>Carrinho ({getTotalItems()})</Title>
        <MaterialIcons name="more-horiz" size={24} color="#888" />
      </Header>

      {items.length === 0 ? (
        <EmptyCartContainer>
          <MaterialIcons name="shopping-cart" size={64} color="#888" />
          <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
        </EmptyCartContainer>
      ) : (
        <>
          <AddressBox>
            <MaterialIcons name="location-on" size={20} color="#888" />
            <AddressText>Endereço de entrega</AddressText>
            <MaterialIcons name="chevron-right" size={22} color="#888" />
          </AddressBox>

          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemCard>
                <Img source={{ uri: item.image }} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                </ItemInfo>

                <QtyBox>
                  <QtyBtn
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <MaterialIcons name="remove" size={18} color="#fff" />
                  </QtyBtn>
                  <QtyText>{item.quantity}</QtyText>
                  <QtyBtn
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <MaterialIcons name="add" size={18} color="#fff" />
                  </QtyBtn>
                </QtyBox>
              </ItemCard>
            )}
          />

          <TotalContainer>
            <TotalText>Total: R$ {getTotalPrice().toFixed(2)}</TotalText>
          </TotalContainer>

          <CheckoutBtn>
            <CheckoutText>Finalizar Compra</CheckoutText>
          </CheckoutBtn>
        </>
      )}
    </Container>
  );
}
