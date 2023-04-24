import Head from "next/head";
import { Inter } from "next/font/google";
import { Typography } from "@mui/material";
import Navbar from "@/components/landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Persona Generator</title>
        <meta
          name="description"
          content="Persona generator application - A Chatgpt integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Typography component="h1">Captured by Rehman Aziz</Typography>
    </>
  );
}
