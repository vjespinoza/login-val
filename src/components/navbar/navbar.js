import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import { NavbarContainer, NavbarList, NavbarListItem } from "./navbar.elements";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarList>
                <NavbarListItem>
                    <Link to="/home">Home</Link>
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
