import { Button, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (timeInSec) => {
    const minutes = Math.floor(timeInSec / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSec % 60).toString().padStart(2, '0');
    console.log(seconds);
    return `${minutes}:${seconds}`;
  };

  const handleStart = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(true);
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <Center>
      <Stack>
        <Text fontSize='6xl' fontWeight='bold' align='center'>
          {formatTime(time)}
        </Text>
        <Flex gap='12px'>
          <Button onClick={handleStart} colorScheme='green' size='lg'>
            Start
          </Button>
          <Button onClick={handleStop} colorScheme='yellow' size='lg'>
            Stop
          </Button>
          <Button onClick={handleReset} colorScheme='red' size='lg'>
            Reset
          </Button>
        </Flex>
      </Stack>
    </Center>
  );
}

export default Timer;
