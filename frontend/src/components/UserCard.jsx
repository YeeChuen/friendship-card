import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, useToast } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";

const UserCard = ({ user, setUsers, handleDelete, handleUpdate }) => {
	const toast = useToast();

    const handleDeleteCard = async (user) => {
        console.log("handle delete", user.id)
        handleDelete(user.id)
    }

	return (
		<Card>
			<CardHeader>
				<Flex gap={4}>
					<Flex flex={"1"} gap={"4"} alignItems={"center"}>
						<Avatar src={user.imgUrl} />

						<Box>
							<Heading size='sm'>{user.name}</Heading>
							<Text>{user.role}</Text>
						</Box>
					</Flex>

					<Flex>
						<EditModal user={user} setUsers={setUsers} handleUpdate = {(id, newFriend) => handleUpdate(id, newFriend)}/>
						<IconButton
							variant='ghost'
							colorScheme='red'
							size={"sm"}
							aria-label='See menu'
							icon={<BiTrash size={20} />}
                            onClick={() => handleDeleteCard(user)}
						/>
					</Flex>
				</Flex>
			</CardHeader>

			<CardBody>
				<Text>{user.description}</Text>
			</CardBody>
		</Card>
	);
};
export default UserCard;