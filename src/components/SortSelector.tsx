import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "@/store.ts";

export const SortSelector = () => {

    const setOrders = [
        { value: '', lable: 'Relevance' },
        { value: '-added', lable: 'Date added' },
        { value: '-name', lable: 'Name' },
        { value: '-released', lable: 'Release date' },
        { value: '-metacritic', lable: 'Popularity' },
        { value: '-rating', lable: 'Average rating' },
    ];
    const sortOrder = useGameQueryStore(s=>s.gameQuery.sortOrder);
    const currentSortOrder = setOrders.find(order => order.value === sortOrder);

    const setSortOrder = useGameQueryStore(s=>s.setSortOrder);


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown /> as React.ReactElement}>
                Order by: {currentSortOrder?.lable || "Relevance"}
            </MenuButton>
            <MenuList>
                {setOrders.map(
                    order =>
                        <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
                            {order.lable}
                        </MenuItem>)}
            </MenuList>
        </Menu>
    );
};
export default SortSelector;