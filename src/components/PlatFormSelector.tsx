import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatform, { PlatForm } from "../hooks/usePlatform"
import { BsChevronDown } from "react-icons/bs";

interface Props {
    setSelectPlatform: React.Dispatch<React.SetStateAction<PlatForm | undefined>>
    selectPlatform: PlatForm | undefined
}

export default function PlatFormSelector({ selectPlatform, setSelectPlatform }: Props) {
    const { data } = usePlatform(selectPlatform);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data?.length > 0 && data?.map(item =>
                    <MenuItem
                        onClick={() => setSelectPlatform(item)}
                        key={item.id}>{item.name}</MenuItem>
                )}
            </MenuList>
        </Menu >
    )
}
