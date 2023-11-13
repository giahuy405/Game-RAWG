import { Box, HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'

export default function NavBar() {
  return (
    <HStack padding='4px' justifyContent='space-between' borderBottom='1px solid grey'>
      <HStack >
        <Image src="http://picsum.photos/200" boxSize='60px' rounded='100%' />
        <Text>GABE</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  )
}
