import {Button, Flex, PinInput, PinInputField, Text,} from "@chakra-ui/react";
import {useState} from "react";
import {MdClose} from "react-icons/md";
import SampleDialog from "../Modals/SimpleDialog.tsx";

const Verification = () => {
    const [pin, setPin] = useState("")

    const onChange = (pin: string) => {
        setPin(pin)
    }
    const clear = () => {
        setPin("")
    }

    return (
        <Flex direction={"column"} justify={"center"} alignItems={"start"} gap={4}>
            <Text fontWeight={"bold"}>Enter your four digits verification code</Text>
            <Flex w={"100%"} justify={"center"} gap={4}>
                <PinInput autoFocus value={pin} onChange={onChange}>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                </PinInput>
            </Flex>
            <Flex w={"100%"} justify={"end"} gap={4}>
                <Button colorScheme="blue" variant="outline">
                    Verify
                </Button>
                <Button colorScheme="red" variant="outline" onClick={() => clear()} leftIcon={<MdClose/>}>
                    clear
                </Button>
            </Flex>
            <SampleDialog/>
        </Flex>
    );
};

export default Verification;