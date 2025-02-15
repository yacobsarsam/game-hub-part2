import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

export const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {

    const setOrders = [
        { value: '', lable: 'Relevance' },
        { value: '-added', lable: 'Date added' },
        { value: '-name', lable: 'Name' },
        { value: '-released', lable: 'Release date' },
        { value: '-metacritic', lable: 'Popularity' },
        { value: '-rating', lable: 'Average rating' },
    ];

    const currentSortOrder = setOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown /> as React.ReactElement}>
                Order by: {currentSortOrder?.lable || "Relevance"}
            </MenuButton>
            <MenuList>
                {setOrders.map(
                    order =>
                        <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                            {order.lable}
                        </MenuItem>)}
            </MenuList>
        </Menu>
    );
};
export default SortSelector;