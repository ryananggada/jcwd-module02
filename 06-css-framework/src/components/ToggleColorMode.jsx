import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Center, Button, useColorMode } from '@chakra-ui/react';

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <Button onClick={() => toggleColorMode()}>
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Center>
  );
}

export default ToggleColorMode;
