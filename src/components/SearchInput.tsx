import { Button, HStack, Input, useEditable } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
interface Props {
    text: string | undefined
    setText: React.Dispatch<React.SetStateAction<string | undefined>>
}
export default function SearchInput({ text, setText }: Props) {




    return (
        <form >
            <HStack>
                <Input
                    placeholder='search games...'
                    maxWidth='400px'
                    value={text}

                    onChange={e => setText(e.target.value)}
                />
                <Button type='submit'>
                    Search
                </Button>
            </HStack>
        </form>
    )
}
