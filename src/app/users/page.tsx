"use client";
import { useEffect } from "react";
import { fetchUsersStart } from "@/redux/slices/users.slice";
import { List, ListItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users);
  const loading = useSelector((state: any) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, []);

  // loading state
  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <List>
        {users.map((user: any) => (
          <Link href={`users/${user.id}`}>
            <ListItem key={user.id}>{user.username}</ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
