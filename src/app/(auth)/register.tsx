import Button from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";
import * as S from "@/styles/auth.style";
import { Divider } from "@/styles/components/Divider";
import { RegisterFormData } from "@/types/auth";
import { Controller, useForm } from "react-hook-form";

export default function Register() {
  const { register } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    register(data.name, data.email, data.password);
  };

  return (
    <S.FormContainer>
      <S.FormBox style={{ elevation: 4 }}>
        <S.FormTitle>Cadastro</S.FormTitle>
        <S.FormSubTitle>Bem vindo!</S.FormSubTitle>
        <S.FormInputBox>
          <S.FormInputlabel>Nome</S.FormInputlabel>
          <Controller
            control={control}
            name="name"
            rules={{
              required: "Nome é Obrigatório",
            }}
            render={({ field }) => (
              <S.FormInput
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                placeholder="Ex: João"
              />
            )}
          />
          {errors.name?.message && (
            <S.ErrorText>{errors.name?.message}</S.ErrorText>
          )}
        </S.FormInputBox>
        <S.FormInputBox>
          <S.FormInputlabel>Email</S.FormInputlabel>

          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email Obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            }}
            render={({ field }) => (
              <S.FormInput
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                keyboardType="email-address"
                placeholder="example@example.com"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email?.message && (
            <S.ErrorText>{errors.email?.message}</S.ErrorText>
          )}
        </S.FormInputBox>
        <S.FormInputBox>
          <S.FormInputlabel>Senha</S.FormInputlabel>

          <Controller
            control={control}
            name="password"
            rules={{
              required: "Senha Obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve conter pelo menos 6 caracteres",
              },
            }}
            render={({ field }) => (
              <S.FormInput
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                secureTextEntry
                placeholder="*******"
                autoCapitalize="none"
              />
            )}
          />
          {errors.password?.message && (
            <S.ErrorText>{errors.password?.message}</S.ErrorText>
          )}
        </S.FormInputBox>
        <Button text="Cadastrar" onPress={handleSubmit(onSubmit)} />
        <Divider />
        <S.HelperText href="/(auth)">Entrar</S.HelperText>
      </S.FormBox>
    </S.FormContainer>
  );
}
