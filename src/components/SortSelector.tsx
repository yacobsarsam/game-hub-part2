import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

export const SortSelector = () => {

    return (
        <Menu>

            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Ordered bu: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem> Relevance </MenuItem>
                <MenuItem> Date added </MenuItem>
                <MenuItem> Name </MenuItem>
                <MenuItem> Release date </MenuItem>
                <MenuItem>  Popularity</MenuItem>
                <MenuItem> Avarage rating </MenuItem>
            </MenuList>
        </Menu>
    );
};
export default SortSelector;