import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { Envelope, Key } from "phosphor-react-native";
import { Heading, Icon, useTheme, VStack } from "native-base";

import Logo from "../assets/logo_primary.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Alert } from "react-native";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { colors } = useTheme();

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe e-mail e senha.");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        if (error.code === "auth/invalid-email") {
          return Alert.alert("Entrar", "E-mail inválido.");
        }

        if (error.code === "auth/wrong-password") {
          return Alert.alert("Entrar", "E-mail ou senha inválida.");
        }

        if (error.code === "auth/user-not-found") {
          return Alert.alert("Entrar", "E-mail ou senha inválida.");
        }

        return Alert.alert("Entrar", "Não foi possível acessar.");
      });
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        placeholder="E-mail"
        onChangeText={setEmail}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
      />

      <Input
        mb={8}
        secureTextEntry
        placeholder="Senha"
        onChangeText={setPassword}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
      />

      <Button
        title="Entrar"
        w="full"
        isLoading={isLoading}
        onPress={handleSignIn}
      />
    </VStack>
  );
}
