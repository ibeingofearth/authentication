import React from 'react';
import {
        ChakraProvider,
        Box,
        VStack,
        Grid,
        theme,
        FormControl,
        FormLabel,
        Checkbox,
        Input,
        Stack,
        Text,
        Link,
        Button,
        FormHelperText,
} 
from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <form >
          <Box margin={55} textAlign="center" fontSize="l">
    <Grid minH="9px" p={100} justifyItems="center">
          <VStack spacing={18}>
            <Text >LOGIN</Text>
              <FormControl>
              <FormLabel>Email Id</FormLabel>
              <Input type='email' required />
              <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>     
                <FormControl id="password"> 
                <FormLabel>Password</FormLabel>
                <Input type="password" required/>
                </FormControl>
                    <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>  
          <Button
          type='submit'
          bg={'blue.400'}
          color={'white'}
          _hover={{
          bg: 'blue.500',
          }}>
          Sign in
          </Button>    
          </VStack>
    </Grid>
  </Box>
            </form>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
