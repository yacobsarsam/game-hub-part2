import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder:string;
}

export const SortSelector = ({onSelectSortOrder, sortOrder}:Props) => {

    const setorders = [
        { value:'', lable:'Relevance'},
        { value:'-added', lable:'Date added'},
        { value:'-name', lable:'Name'},
        { value:'-released', lable:'Release date'},
        { value:'-metacritic', lable:'Popularity'},
        { value:'-rating', lable:'Average rating'},
    ];

    const currentSortorder = setorders.find(order=> order.value === sortOrder);

    return (
        <Menu>

            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortorder?.lable || "Relevance"}
            </MenuButton>
            <MenuList>
                {setorders.map(
                    order =>
                        <MenuItem onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                            {order.lable}
                        </MenuItem>)}
            </MenuList>
        </Menu>
    );
};
export default SortSelector;