import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import SearchInput from "@/components/SearchInput.tsx";
import router from "@/routes.tsx";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <HStack padding={10}>
             <Link to={'/'}>
                 <Image src={logo}  boxSize="60px" alt="Logo"  objectFit={"cover"}/>
             </Link>
            <SearchInput />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
