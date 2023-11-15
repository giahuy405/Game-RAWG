import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
export interface OptionSort {
    value: string
    label: string
}

interface Props {
    sortGame: OptionSort | undefined
    setSortGame: React.Dispatch<React.SetStateAction<OptionSort | undefined>>
}

export default function Sort({ setSortGame }: Props) {

    const data = [
        { value: "", label: "Revelance" },
        { value: "-added", label: "Date" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release day" },
        { value: "-metacritic", label: "Popularity" },
    ]

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Sort games
            </MenuButton>
            <MenuList>

                {data.map((item: OptionSort) =>
                    <MenuItem
                        onClick={() => setSortGame(item)}
                        key={item.value} >{item.label}</MenuItem>
                )}
            </MenuList>
        </Menu >
    )
}
