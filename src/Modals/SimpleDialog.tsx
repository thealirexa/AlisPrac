import {
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Stores/Store.ts";
import {write} from "../Stores/Slices/SimpleSlice.ts";

const SampleDialog = () => {
    const userText = useSelector((s: RootState) => s.simple.value)
    const dispatch = useDispatch()


    const {isOpen, onOpen, onClose} = useDisclosure()

    const onInputChange = (text: string) => {
        dispatch(write(text))
    };
    const requestFocus = () => document.getElementById("input")?.focus()

    useEffect(() => {
        const onPress = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.shiftKey && event.code === "F2") onOpen()
            if (event.ctrlKey && event.shiftKey && event.code === "F3") requestFocus()
        };
        window.addEventListener("keydown", onPress);
        return () => window.removeEventListener("keydown", onPress);
    }, []);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent py={16}>
                <ModalCloseButton/>
                <ModalBody>
                    <Input id={"input"} onChange={(e) => onInputChange(e.target.value)}/>
                    {userText && <Text>{`User typing : ${userText}`}</Text>}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SampleDialog