import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Quotes = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Quotes
        </Heading>
        <Text fontSize="xl">"In preparing for battle I have always found that plans are useless, but planning is indispensable."</Text>
        <Text fontSize="xl">"Leadership is the art of getting someone else to do something you want done because he wants to do it."</Text>
        <Text fontSize="xl">"Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed."</Text>
        <Text fontSize="xl">"I hate war as only a soldier who has lived it can, only as one who has seen its brutality, its futility, its stupidity."</Text>
      </VStack>
    </Box>
  );
};

export default Quotes;
