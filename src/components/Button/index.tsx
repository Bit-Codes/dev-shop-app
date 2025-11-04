import { PressableProps as ReactButtonProps, Text } from "react-native";
import * as S from "./style";

interface ButtonProps extends ReactButtonProps {
  text: string;
}

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <S.Button onPress={onPress}>
      <Text>{text}</Text>
    </S.Button>
  );
};

export default Button;
