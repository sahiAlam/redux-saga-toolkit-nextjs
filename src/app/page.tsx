import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Typography variant="h3" my={5}>
        Welcome
      </Typography>
      <Link href="/users">Go To Users</Link>
    </>
  );
}
