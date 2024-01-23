import React from "react";
import Image from "next/image";
import { Box, Text, Heading, Flex, Button } from "@chakra-ui/react";
export default function Header() {
  return (
    <Box h="90dvh" w="100%" position="relative" px="5%">
      <Image
        src="/header-photo.jpg"
        fill="responsive"
        alt="A comical photo of a 70s style man entangled in wires with a desperate look on his face, looking similar to something out of Fawlty Towers"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        zIndex={1}
      />
      <Box
        h="100%"
        w="100%"
        bg="linear-gradient(to right, rgba(241, 196, 14, 1) 40%, rgba(241, 196, 14, 0))"
        position="absolute"
        top="0"
        left="0"
        zIndex={2}
      ></Box>
      <Flex w="100%" h="100%" alignItems="center">
        <Box position="relative" zIndex={3} w="43%">
          <Text fontSize="lg" fontWeight="500">
            Looking for an Electrician in Warwickshire?
          </Text>
          <Heading
            as="h1"
            fontSize="7xl"
            fontWeight="800"
            color="white"
            mt="12px"
            mb="24px"
            lineHeight={1}
          >
            We're your Warwickshire Electrical Experts
          </Heading>
          <Text fontSize="lg" fontWeight="400">
            Discover Top-Notch Electrical Services with Razvan Electrics in
            Warwickshire. Expertise in Residential & Commercial Projects - From
            Stratford-upon-Avon to all across Warwickshire.
          </Text>
          <Button
            mt="32px"
            colorScheme="secondary"
            bgColor="secondary.800"
            size="lg"
          >
            Schedule a Call
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
