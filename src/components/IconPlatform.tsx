import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGame"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons"

interface Props {
    platFormArr: { platform: Platform }[]
}
export default function IconPlatform({ platFormArr }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        'playstation4': FaPlaystation,
        'playstation3': FaPlaystation,
        'xbox-one': FaXbox,
        'nintendo-switch': SiNintendo,
        'macos': FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        'xbox360': BsGlobe,
    }

    return (
        <HStack>
            {platFormArr?.map(item2 =>
                <Text key={item2.platform.id}>
                    <Icon as={iconMap[item2.platform.slug]} color='gray.500' />
                </Text>
            )}
        </HStack>
    )
}
