import React from "react";
import { Box, Text, Heading, Flex, Grid, GridItem } from "@chakra-ui/react";
import aboutData from "./aboutData";
import Image from "next/image";
export default function About() {
  return (
    <Flex
      p="5%"
      height="90dvh"
      w="100%"
      alignItems="center"
      justifyContent={"space-between"}
      id="about"
      position="relative"
      gap={100}
    >
      <Box w="50%">
        <Text fontSize="lg" fontWeight="500" color="primary.600">
          {aboutData.eyebrow}
        </Text>
        <Heading
          as="h2"
          fontSize="3xl"
          fontWeight="800"
          color="secondary.800"
          mt="12px"
          mb="52px"
          lineHeight={1}
        >
          {aboutData.title}
        </Heading>
        <Box>
          {aboutData.content.map((paragraph, index) => (
            <Text
              key={`about-paragraph-${index}`}
              color="secondary.800"
              fontSize="text.md"
              mb="16px"
            >
              {paragraph}
            </Text>
          ))}
        </Box>
      </Box>
      <Box w="50%" h="100%">
        <Grid
          h="100%"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={2}
        >
          <GridItem
            borderRadius="8px"
            overflow="hidden"
            rowSpan={5}
            colSpan={3}
            bg="tomato"
            position="relative"
          >
            <Image
              src="/about-residential-panel.jpeg"
              fill="responsive"
              style={{ objectFit: "cover" }}
            />
          </GridItem>
          <GridItem
            borderRadius="8px"
            overflow="hidden"
            colSpan={2}
            rowSpan={2}
            bg="papayawhip"
            position="relative"
          >
            <Image
              src="/about-razvan-documents.jpeg"
              fill="responsive"
              style={{ objectFit: "cover" }}
            />
          </GridItem>

          <GridItem
            borderRadius="8px"
            overflow="hidden"
            colSpan={2}
            rowSpan={2}
            bg="tomato"
            position="relative"
          >
            <Image
              src="/about-electric-charging-point.jpeg"
              fill="responsive"
              style={{ objectFit: "cover" }}
            />
          </GridItem>
          <GridItem
            borderRadius="8px"
            overflow="hidden"
            colSpan={2}
            bg="papayawhip"
            position="relative"
          >
            <Image
              src="/about-residential-lights.jpeg"
              fill="responsive"
              style={{ objectFit: "cover" }}
            />
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}
