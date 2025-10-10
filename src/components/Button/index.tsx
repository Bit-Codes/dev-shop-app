import { Text } from "react-native";
import * as S from "./style";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <S.Button>
      <Text>{text}</Text>
    </S.Button>
  );
};

export default Button;
