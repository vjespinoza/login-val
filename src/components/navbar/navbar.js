import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import {
    NavbarContainer,
    NavbarList,
    NavbarListItem,
    NavbarLogo,
} from "./navbar.elements";
import Logo from "../../assets/svg/logo.svg";
import { Bag } from "@styled-icons/bootstrap/Bag";

const Navbar = ({ auth }) => {
    return (
        <NavbarContainer>
            <NavbarListItem>
                <Link to="/">
                    <NavbarLogo src={Logo} alt="runrs logo" />
                </Link>
            </NavbarListItem>

            <NavbarList>
                <NavbarListItem>
                    <Link to="/cart">
                        <Bag size="20" />
                    </Link>
                </NavbarListItem>
                <NavbarListItem>
                    {auth.token ? (
                        <p>
                            {`Bienvenido, ${auth.user.slice(
                                0,
                                auth.user.indexOf("@")
                            )}!`}
                            <span>|</span>
                            <span>Cerrar Sesión</span>
                        </p>
                    ) : (
                        <Link to="/login">
                            <Button>Iniciar Sesión</Button>
                        </Link>
                    )}
                </NavbarListItem>
            </NavbarList>
        </NavbarContainer>
    );
};

export default Navbar;
