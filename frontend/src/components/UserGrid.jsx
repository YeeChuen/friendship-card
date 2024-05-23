import { Grid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserGrid = ({ users, setUsers, handleDelete, handleUpdate }) => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            setUsers={setUsers}
            handleDelete={(id) => handleDelete(id)}
            handleUpdate={(id, newFriend) => handleUpdate(id, newFriend)}
          />
        );
      })}
    </Grid>
  );
};

export default UserGrid;
