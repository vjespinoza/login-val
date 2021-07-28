import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import {
    NavbarContainer,
    NavbarList,
    NavbarListItem,
    NavbarLogo,
} from "./navbar.elements";
import Logo from "../../assets/svg/logo.svg";
import { CartFill } from "@styled-icons/bootstrap/CartFill";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarListItem>
                <Link to="/home">
                    <NavbarLogo src={Logo} alt="runrs logo" />
                </Link>
            </NavbarListItem>

            <NavbarList>
                <NavbarListItem>
                    <Link to="/home">
                        <CartFill size="20" />
                    </Link>
                </NavbarListItem>
                <NavbarListItem>
                    <Link to="/">
                        <Button>Iniciar Sesión</Button>
                    </Link>
                </NavbarListItem>
            </NavbarList>
        </NavbarContainer>
    );
};

export default Navbar;
