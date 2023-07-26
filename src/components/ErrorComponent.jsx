/* eslint-disable react/prop-types */
import { Alert, AlertIcon } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import React from "react";

const ErrorComponent = ({ message }) => {
  return (

    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
      justifyContent={"center"}
    >
      <AlertIcon />
      {message}
    </Alert>

  );
};

export default ErrorComponent;