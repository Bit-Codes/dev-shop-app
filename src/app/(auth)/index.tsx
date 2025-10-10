import Button from "@/components/Button";
import * as S from "@/styles/auth.style";
import { Divider } from "@/styles/components/Divider";

export default function Login() {
  return (
    <S.FormContainer>
      <S.FormBox style={{ elevation: 4 }}>
        <S.FormTitle>Login</S.FormTitle>
        <S.FormSubTitle>Bem vindo!</S.FormSubTitle>
        <S.FormInputBox>
          <S.FormInputlabel>Email</S.FormInputlabel>
          <S.FormInput placeholder="example@example.com" />
        </S.FormInputBox>
        <S.FormInputBox>
          <S.FormInputlabel>Senha</S.FormInputlabel>
          <S.FormInput placeholder="*****" secureTextEntry />
        </S.FormInputBox>
        <Button text="Entrar" />
        <Divider />
        <S.HelperText href="/(auth)/register">Cadastre-se</S.HelperText>
      </S.FormBox>
    </S.FormContainer>
  );
}
