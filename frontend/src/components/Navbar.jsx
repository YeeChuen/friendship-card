import {
  Box,
  Container,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import UserModal from "./UserModal";

const Navbar = ({handleAddFriend}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"900px"}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <FaUserFriends size={30} />{" "}
            <Text fontSize={"30px"}>Friendship Card</Text>
          </Flex>
          <Flex gap={3} alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun />}
            </Button>
            <UserModal handleAddFriend={(newFriend) => handleAddFriend(newFriend)}/>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
