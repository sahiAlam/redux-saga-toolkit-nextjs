"use client";
import { useEffect } from "react";
import { fetchUserByIdStart } from "@/redux/slices/users.slice";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

const page = ({ params }: { params: { user_id: string } }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.users.currentUser);
  const loading = useSelector((state: any) => state.loading);

  useEffect(() => {
    dispatch(fetchUserByIdStart(params.user_id));
  }, []);

  if (loading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <>
      <Typography variant="h2">{user?.name}</Typography>
    </>
  );
};

export default page;
