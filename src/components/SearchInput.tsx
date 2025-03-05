import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";
import useGameQueryStore from "@/store.ts";

const SearchInput = () => {

    const ref = useRef<HTMLInputElement>(null);
    const setSearchText= useGameQueryStore(s=> s.setSearchText);
    return (
        <form onSubmit={(event)=> {
            event.preventDefault();
            if(ref.current) setSearchText(ref.current.value);
        }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>}></InputLeftElement>
            <Input ref={ref} borderRadius={20} placeholder="Search game..." variant={"filled"} />

        </InputGroup>
        </form>
    );

}
export default SearchInput;