import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";

const NavBar = () => {
    return (
        <HStack justifyContent={"space-between"} padding={10 }>
            <Image src={logo} boxSize="60px" alt="Logo" />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
