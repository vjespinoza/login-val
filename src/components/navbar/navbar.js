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

const Navbar = ({ auth, setAuth, setCart }) => {
    const handleSessionEnd = () => {
        setAuth({ token: "", user: "" });
        setCart([]);
    };

    return (
        <NavbarContainer>
            <NavbarListItem logo>
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
                            <span onClick={handleSessionEnd}>
                                Cerrar Sesión
                            </span>
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
