import { Button, Container, Stack, Text } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import UserGrid from "./components/UserGrid"
import React, {useState, useEffect} from "react";

export const baseURL = "http://127.0.0.1:5000/api/friends";

function App() {
  const usersDummy = [
    {
      id: 1,
      name: "Segun Adebayo",
      role: "Creator, Chakra UI",
      description:
        "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
    },
    {
      id: 2,
      name: "Ryan Florence",
      role: "Co-creator, React Router",
      description:
        "I think the biggest thing that React Router tries to do is to make sure that the URL and the UI are always in sync with each other.",
    },
    {
      id: 3,
      name: "Kent C. Dodds",
      role: "Creator, Testing Library",
      description:
        "The more your tests resemble the way your software is used, the more confidence they can give you.",
    },
    {
      id: 4,
      name: "Michael Shilman",
      role: "Creator, Playroom",
      description:
        "With Playroom, you can create a zero-install code-oriented design environment that makes it easy to build and share components.",
    },
    {
      id: 5,
      name: "Cassidy Williams",
      role: "SWE 2",
      description:
        "I love the web platform and I want to make it as accessible as possible.",
    },
    {
      id: 6,
      name: "Chris Biscardi",
      role: "SWE 3",
      description:
        "I build things and write about it to help you become a better engineer.",
    },
    {
      id: 7,
      name: "Emma Bostian",
      role: "Senior SWE, Spotify",
      description:
        "I'm a software engineer with a passion for building scalable web applications.",
    },
  ];

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
