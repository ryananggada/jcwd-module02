import { useState } from 'react';
import {
  Center,
  Stack,
  Flex,
  Card,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

function Filter() {
  const list = [
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon',
    'Strawberry',
  ];

  const [searchVal, setSearchVal] = useState('');

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchVal.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <Center>
      <Stack minWidth='420px'>
        <FormControl my='16px'>
          <FormLabel>Search</FormLabel>
          <Input type='text' value={searchVal} onChange={handleSearch} />
        </FormControl>

        <Flex flexDirection='column' alignItems='center' gap='18px'>
          {filteredList.map((item) => {
            return (
              <Card key={item} variant='filled' p='18px' minWidth='192px'>
                {item}
              </Card>
            );
          })}
        </Flex>
      </Stack>
    </Center>
  );
}

export default Filter;
