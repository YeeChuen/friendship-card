import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

function EditModal({ user, handleUpdate}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [inputs, setInputs] = useState({
		name: user.name,
		role: user.role,
		description: user.description,
	});
	const toast = useToast();

    const handleEdit = async () => {
        handleUpdate(user.id, inputs)
    }

	return (
		<>
			<IconButton
				onClick={onOpen}
				variant='ghost'
				colorScheme='blue'
				aria-label='See menu'
				size={"sm"}
				icon={<BiEditAlt size={20} />}
			/>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<form onSubmit={() => handleEdit()}>
					<ModalContent>
						<ModalHeader>My new BFF 😍</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<Flex alignItems={"center"} gap={4}>
								<FormControl>
									<FormLabel>Full Name</FormLabel>
									<Input
										placeholder='John Doe'
										value={inputs.name}
										onChange={(e) => setInputs((prev) => ({ ...prev, name: e.target.value }))}
									/>
								</FormControl>

								<FormControl>
									<FormLabel>Role</FormLabel>
									<Input
										placeholder='Software Engineer'
										value={inputs.role}
										onChange={(e) => setInputs((prev) => ({ ...prev, role: e.target.value }))}
									/>
								</FormControl>
							</Flex>
							<FormControl mt={4}>
								<FormLabel>Description</FormLabel>
								<Textarea
									resize={"none"}
									overflowY={"hidden"}
									placeholder="He's a software engineer who loves to code and build things."
									value={inputs.description}
									onChange={(e) => setInputs((prev) => ({ ...prev, description: e.target.value }))}
								/>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} type='submit'>
								Update
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</>
	);
}

export default EditModal;
