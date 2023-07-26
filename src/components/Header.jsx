
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} pos={'sticky'} top={0} zIndex={1}>
      <Button variant={"unstyled"} color={"white"} px={'0.7rem'}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} px={'0.7rem'}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} px={'0.7rem'}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header
