import { useState } from 'react';
import {
  Text,
  Container,
  Input,
  Button,
  Box,
  VStack,
  Flex,
  Checkbox,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import ToggleColorMode from './components/ToggleColorMode';

function App() {
  const [todos, setTodos] = useState([
    { value: 'Brew morning coffee', isDone: true },
    { value: 'Learn how to program in React', isDone: false },
    { value: 'Read 50 pages of book', isDone: true },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo) {
      const newTodos = [...todos, { value: newTodo, isDone: false }];
      setTodos(newTodos);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const copy = [...todos];
    copy.splice(index, 1);
    setTodos(copy);
  };

  const handleCheckTodo = (index) => {
    const copy = [...todos];
    copy[index].isDone = !copy[index].isDone;
    setTodos(copy);
  };

  const completedTodo = todos.filter((todo) => todo.isDone).length;

  return (
    <Container>
      <Text fontSize='3xl' align='center' fontWeight='bold'>
        Chores Todo List
      </Text>
      <VStack flexDirection='column' align='stretch'>
        {todos.map((item, index) => {
          return (
            <Flex key={index}>
              <Checkbox
                borderColor='green.500'
                colorScheme='green'
                isChecked={item.isDone}
                onChange={() => {
                  handleCheckTodo(index);
                }}
              >
                {item.value}
              </Checkbox>
              <Spacer />
              <IconButton
                variant='outline'
                colorScheme='red'
                aria-label='Delete todo'
                icon={<DeleteIcon />}
                onClick={() => {
                  handleDeleteTodo(index);
                }}
              />
            </Flex>
          );
        })}
      </VStack>
      <Box my='24px'>
        <Text fontSize='3xl' align='center' fontWeight='bold'>
          Done: {completedTodo}
        </Text>
        <Box my='16px'>
          <Text fontWeight='semibold' my='12px' fontSize='lg'>
            Add todo
          </Text>
          <Input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
        </Box>
        <Button onClick={() => handleAddTodo(newTodo)} colorScheme='cyan'>
          ADD TASK
        </Button>
      </Box>
    </Container>
  );
}

export default App;
