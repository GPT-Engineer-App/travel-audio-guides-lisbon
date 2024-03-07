import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const LoginSignup = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button width="full" mt={4}>
          Login
        </Button>
        <Button width="full" mt={4}>
          Signup
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginSignup;
