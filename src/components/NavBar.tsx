import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import SearchInput from "@/components/SearchInput.tsx";
interface Props {

}
const NavBar = () => {
    return (
        <HStack padding={10 }>
            <Image src={logo} boxSize="60px" alt="Logo" />
            <SearchInput />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
