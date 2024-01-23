import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navData from "./navData";

export default function DesktopNav() {
  const path = usePathname();

  return (
    <Box w="100%">
      <Flex
        px="5%"
        py="5px"
        w="100%"
        h="80px"
        alignItems="center"
        justifyContent="space-between"
        bg="primary.400"
        position="relative"
        zIndex={6}
      >
        {navData.contactNav.map((item) => {
          if (item.isLink) {
            return (
              <ChakraLink href={item.href} isExternal>
                <Flex alignItems={"center"} gap="5px">
                  {item.icon}
                  <Text fontSize="md" fontWeight="500">
                    {item.text}
                  </Text>
                </Flex>
              </ChakraLink>
            );
          }
          return (
            <Flex alignItems={"center"} gap="5px">
              {item.icon}
              <Text fontSize="md" fontWeight="500">
                {item.text}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        w="100%"
        height="80px"
        py="10px"
        px="5%"
        bg="#333850"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        zIndex={5}
        top={0}
      >
        <Box>
          <Image
            src="/logo-white-yellow.svg"
            alt="Razvan Electrics logo - An R with an electric plug inside"
            width={200}
            height={100}
          />
        </Box>

        <Flex gap="50px">
          {navData.mainNav.map((item) => (
            <ChakraLink as={Link} to={item.path} href={item.path}>
              <Heading
                color={"white"}
                fontWeight="600"
                _hover={{
                  color: "primary.400",
                }}
                size="sm"
              >
                {item.text}
              </Heading>
            </ChakraLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
