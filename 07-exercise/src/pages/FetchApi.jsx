import { useState, useEffect } from 'react';
import {
  Center,
  Stack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  ButtonGroup,
  Button,
  Input,
} from '@chakra-ui/react';

function FetchApi() {
  const [usersList, setUsersList] = useState([]);
  const [editId, setEditId] = useState(-1);

  const [editName, setEditName] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editEmail, setEditEmail] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      setUsersList(users);
    }

    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    const newUsersList = usersList.filter((user) => user.id != id);
    setUsersList(newUsersList);
  };

  const handleEdit = (id) => {
    const tempUser = usersList.filter((usersList) => {
      return usersList['id'] == id;
    })[0];

    setEditName(tempUser.name);
    setEditUsername(tempUser.username);
    setEditEmail(tempUser.email);
    setEditId(id);
  };

  const handleUpdate = (id) => {
    const updatedUsersList = usersList.map((user) => {
      if (user.id == id) {
        user.name = editName;
        user.username = editUsername;
        user.email = editEmail;
        return user;
      }

      return user;
    });

    setEditId(-1);
    setUsersList(updatedUsersList);
  };

  const handleCancel = () => {
    setEditId(-1);
  };

  return (
    <Center>
      <Stack>
        <Text
          fontSize='4xl'
          fontWeight='bold'
          textAlign='center'
          marginBottom='24px'
        >
          Fetch API from JSON Placeholder
        </Text>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {usersList.map((user) => {
                return user.id === editId ? (
                  <Tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>
                      <Input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    </Td>
                    <Td>
                      <Input
                        value={editUsername}
                        onChange={(e) => setEditUsername(e.target.value)}
                      />
                    </Td>
                    <Td>
                      <Input
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                      />
                    </Td>
                    <Td>
                      <ButtonGroup>
                        <Button
                          colorScheme='cyan'
                          onClick={() => handleUpdate(user.id)}
                        >
                          Update
                        </Button>
                        <Button
                          colorScheme='orange'
                          onClick={() => handleCancel()}
                        >
                          Cancel
                        </Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ) : (
                  <Tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.email}</Td>
                    <Td>
                      <ButtonGroup>
                        <Button
                          colorScheme='yellow'
                          onClick={() => handleEdit(user.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          colorScheme='red'
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Center>
  );
}

export default FetchApi;
