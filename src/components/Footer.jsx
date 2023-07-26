import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";


import pic from "../assets/pic2.jpg";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Unlock the power of crypto knowledge with our ultimate app, delivering real-time data on coins, exchanges, rankings, graphs, and comprehensive details, right at your fingertips.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["7", "0"]} src={pic} />
          <Text>Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;