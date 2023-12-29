import {Container} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <Container mt={12}>
            <Outlet/>
        </Container>
    );
};

export default Layout;
