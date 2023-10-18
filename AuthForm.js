import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  useToast,
} from "native-base";
import * as React from "react";
import { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = [{ login: "anton", password: "123" }];
  const user = users.find(
    (user) => user.login === email && user.password === password
  );

  const toast = useToast();
  const handleLogin = () => {
    if (user) {
      toast.show({
        title: "Авторизація пройшла успішно",
        position: "bottom",
        type: "success",
        duration: 3000,
      });
    } else {
      toast.show({
        title: "Помилка авторизації",
        position: "bottom",
        type: "danger",
        duration: 3000,
      });
    }
  };

  return (
    <Center w="100%" h="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email </FormControl.Label>
            <Input
              fontSize={16}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              fontSize={16}
              type="password"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            />
          </FormControl>
          <HStack mt="6" justifyContent="center">
            <Button onPress={() => handleLogin()} flex={1}>
              Sign in
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default AuthForm;
