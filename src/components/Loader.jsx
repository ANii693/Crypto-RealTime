/* eslint-disable no-unused-vars */
import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(5)"}>
        <Spinner size={"xl"} />
      </Box>
    </VStack>
  );
};

export default Loader;