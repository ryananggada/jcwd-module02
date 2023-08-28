import { Avatar, Center, Stack, Text, Flex, Card } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

function ChitChatAfter() {
  const location = useLocation();

  return (
    <Center>
      <Stack minWidth='520px'>
        <Text fontSize='4xl' fontWeight='bold' marginBottom='24px'>
          ChitChat App
        </Text>
        <Flex gap='24px'>
          <Avatar />
          <Card backgroundColor='blue.300' padding='12px' maxWidth='256px'>
            <Text>{location.state.text}</Text>
          </Card>
        </Flex>
      </Stack>
    </Center>
  );
}

export default ChitChatAfter;
