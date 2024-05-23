import { Button, Container, Stack, Text } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import UserGrid from "./components/UserGrid"
import React, {useState, useEffect} from "react";

export const baseURL = "https://friendshipcard.onrender.com/api/friends";

function App() {
	const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();

    setUsers(data);
  };

  const handleAddFriend = async (newFriend) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFriend),
    };
    
    const response = await fetch(baseURL, options);

    const data = await response.json();
    fetchFriends()
  };

  const handleDeleteFriend = async (id) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(baseURL + "/" + id, options);
    fetchFriends()
  }

  const handleUpdateFriend = async (id, newFriend) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFriend),
    };
    
    const response = await fetch(baseURL + "/" + id, options);

    const data = await response.json();
    fetchFriends()
  }

  return (
    <Stack minH={"100vh"}>
      <Navbar handleAddFriend = {(newFriend) => handleAddFriend(newFriend)}/>
      <Container maxW={"1200px"} my={4}></Container>
      <Text 
        fontSize={{base: "3x1", md: "50"}}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAlign={"center"}
        mb={8}
      >
        <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>MyFriends</Text> 🚀
      </Text>
      <UserGrid users = {users} setUsers={setUsers} handleDelete = {(id) =>  handleDeleteFriend(id)} handleUpdate = {(id, newFriend) => handleUpdateFriend(id, newFriend)}/>
    </Stack>
  )
}

export default App
