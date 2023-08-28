import { Link } from 'react-router-dom';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' m='16px'>
      <Box p='2'>
        <Link to='/'>
          <Heading size='md'>Menu</Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Link to='/counter'>
          <Button colorScheme='green'>Counter</Button>
        </Link>
        <Link to='/timer'>
          <Button colorScheme='green'>Timer</Button>
        </Link>
        <Link to='/filter'>
          <Button colorScheme='green'>Filter</Button>
        </Link>
        <Link to='/fetch-api'>
          <Button colorScheme='green'>Fetch API</Button>
        </Link>
        <Link to='/chit-chat'>
          <Button colorScheme='green'>ChitChat</Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
