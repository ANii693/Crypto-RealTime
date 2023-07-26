// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Box } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={'4'} 
      right={'4'}
      onClick={toggleColorMode}
      icon={<Box as={SwitchIcon} color={useColorModeValue('whitesmoke' , 'whitesmoke')} />}
      zIndex={'overlay'}
      transition={"all 0.5s"}
      _hover={{
        background: useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')
      }}
      {...props}
    />
  );
};




