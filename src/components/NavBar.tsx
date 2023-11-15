import { Box, HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

export default function NavBar() {
  return (
    <HStack padding='4px' justifyContent='space-between' borderBottom='1px solid grey'>
      <HStack width='100%' gap={10}>
        <HStack>
          <Image src="http://picsum.photos/200" boxSize='60px' rounded='100%' />
          <Text>GABE</Text>
        </HStack>
        <SearchInput />
      </HStack>
      <ColorModeSwitch />
    </HStack >
  )
}
