import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import SearchInput from "@/components/SearchInput.tsx";
interface Props {
    onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}:Props) => {
    return (
        <HStack padding={10 }>
            <Image src={logo} boxSize="60px" alt="Logo" />
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
