import React from "react";
import { Box, VStack, Heading, Text, Image, Divider, Stack, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaFlag, FaUniversity, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Dwight D. Eisenhower
        </Heading>
        <Image src="https://images.unsplash.com/photo-1580129970121-275fb1d64250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkd2lnaHQlMjBlaXNlbmhvd2VyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMTMxMTQyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dwight Eisenhower" borderRadius="full" boxSize="300px" objectFit="cover" margin="auto" />
        <Text fontSize="xl" textAlign="center">
          34th President of the United States
        </Text>
        <Divider />
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About
          </Heading>
          <Text fontSize="lg">Dwight David Eisenhower (October 14, 1890 – March 28, 1969) was an American military officer and statesman who served as the 34th president of the United States from 1953 to 1961. During World War II, he served as Supreme Commander of the Allied Expeditionary Force in Europe, and achieved the rare five-star rank of General of the Army.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Accomplishments
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaFlag} color="blue.500" />
              Supreme Commander of the Allied Expeditionary Force in Europe during World War II
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="blue.500" />
              Achieved the rank of General of the Army (5 stars)
            </ListItem>
            <ListItem>
              <ListIcon as={FaUniversity} color="blue.500" />
              Served as President of Columbia University
            </ListItem>
            <ListItem>
              <ListIcon as={FaFlag} color="blue.500" />
              34th President of the United States (1953-1961)
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Legacy
          </Heading>
          <Text fontSize="lg">Eisenhower's presidency was marked by the end of the Korean War, a period of economic prosperity, and the early stages of the Cold War and the Civil Rights Movement. He launched the Interstate Highway System, the Defense Advanced Research Projects Agency (DARPA), and the space race with the Soviet Union. He is remembered as one of the greatest U.S. presidents of the 20th century.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
