import Head from "next/head";
import DesktopNav from "@/components/nav/DesktopNav";
import { Box } from "@chakra-ui/react";
import Header from "@/components/header/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Razvan Electrics - Expert Electrical Services in Warwickshire, UK
        </title>
        <meta
          name="description"
          content="Razvan Electrics offers professional electrical services in Warwickshire, UK. Specializing in both residential and commercial projects, from repairs to installations. Reliable, efficient, and skilled electricians at your service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DesktopNav />
        <Header />
        <Box h="100dvh"></Box>
      </main>
    </>
  );
}
