import Button from "@/components/Button";
import * as S from "@/styles/auth.style";
import { Divider } from "@/styles/components/Divider";

export default function Register() {
  return (
    <S.FormContainer>
      <S.FormBox style={{ elevation: 4 }}>
        <S.FormTitle>Cadastro</S.FormTitle>
        <S.FormSubTitle>Bem vindo!</S.FormSubTitle>
        <S.FormInputBox>
          <S.FormInputlabel>Nome</S.FormInputlabel>
          <S.FormInput placeholder="Nome" />
        </S.FormInputBox>
        <S.FormInputBox>
          <S.FormInputlabel>Email</S.FormInputlabel>
          <S.FormInput placeholder="example@example.com" />
        </S.FormInputBox>
        <S.FormInputBox>
          <S.FormInputlabel>Senha</S.FormInputlabel>
          <S.FormInput placeholder="*****" secureTextEntry />
        </S.FormInputBox>
        <Button text="Cadastrar" />
        <Divider />
        <S.HelperText href="/(auth)">Entrar</S.HelperText>
      </S.FormBox>
    </S.FormContainer>
  );
}
