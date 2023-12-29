import {Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import {useEffect} from "react";

const SampleDialog = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const onInputChange = (text: string) => {
        console.log({text})
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
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SampleDialog