import { useState } from 'react';
import {
  Center,
  Stack,
  Text,
  Textarea,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function ChitChat() {
  const [textInput, setTextInput] = useState('');

  const navigate = useNavigate();

  const sendText = () => {
    navigate('/chit-chat/after', { state: { text: textInput } });
  };

  return (
    <Center>
      <Stack minWidth='520px'>
        <Text fontSize='4xl' fontWeight='bold' marginBottom='24px'>
          ChitChat App
        </Text>
        <Flex alignItems='flex-end' gap='24px'>
          <Textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <IconButton
            isRound={true}
            colorScheme='blue'
            icon={<ArrowForwardIcon />}
            onClick={() => sendText()}
          />
        </Flex>
      </Stack>
    </Center>
  );
}

export default ChitChat;
