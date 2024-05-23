import {
  Button,
  Flex,
  FormControl,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormLabel,
  Input,
  Textarea,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

const UserModal = ({ handleAddFriend }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ inputs, setInputs ] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.name === "" || inputs.role === "" || inputs.description === "" || inputs.gender === "") {
        onClose();
        return
    }

    handleAddFriend(inputs);

    setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      })
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>New BFF 😍</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                <FormControl>
                  <FormLabel>Full name:</FormLabel>
                  <Input placeholder="full name" value={inputs.name} onChange={(e) => {
                    setInputs({...inputs, name: e.target.value})
                  }}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Role:</FormLabel>
                  <Input placeholder="role" value={inputs.role} onChange={(e) => {
                    setInputs({...inputs, role: e.target.value})}}/>
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description:</FormLabel>
                <Textarea resize={"none"} placeholder="description" value={inputs.description} onChange={(e) => {
                    setInputs({...inputs, description: e.target.value})}}/>
              </FormControl>
              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio value="male" onChange={(e) => {setInputs({...inputs, gender: e.target.value})}}>Male</Radio>
                  <Radio value="female"  onChange={(e) => {setInputs({...inputs, gender: e.target.value})}}>Female</Radio>
                </Flex>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Add
              </Button>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default UserModal;
