import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


interface Props {
  text: string | undefined
  setText: React.Dispatch<React.SetStateAction<string | undefined>>
}
export default function NavBar({ setText, text }: Props) {

  return (
    <HStack padding='4px' justifyContent='space-between' borderBottom='1px solid grey'>
      <HStack width='100%' gap={10}>
        <HStack>
          <Image src="http://picsum.photos/200" boxSize='60px' rounded='100%' />
          <Text>GABE</Text>
        </HStack>
        <SearchInput setText={setText} text={text} />
      </HStack>
      <ColorModeSwitch />
    </HStack >
  )
}
