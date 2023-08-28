import { useState } from 'react';
import { Center, Button, Text } from '@chakra-ui/react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <Center gap='32px'>
      <Button colorScheme='red' size='lg' onClick={decrement}>
        -
      </Button>
      <Text fontSize='6xl' fontWeight='bold'>
        {count}
      </Text>
      <Button colorScheme='green' size='lg' onClick={increment}>
        +
      </Button>
    </Center>
  );
}

export default Counter;
