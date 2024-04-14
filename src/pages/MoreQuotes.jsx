import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const MoreQuotes = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          More Quotes
        </Heading>
        <Text fontSize="xl">"The supreme quality for leadership is unquestionably integrity. Without it, no real success is possible, no matter whether it is on a section gang, a football field, in an army, or in an office."</Text>
        <Text fontSize="xl">"You do not lead by hitting people over the head - that's assault, not leadership."</Text>
        <Text fontSize="xl">"What counts is not necessarily the size of the dog in the fight - it's the size of the fight in the dog."</Text>
        <Text fontSize="xl">"When you put on a uniform, there are certain inhibitions that you accept."</Text>
      </VStack>
    </Box>
  );
};

export default MoreQuotes;