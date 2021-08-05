import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import {
    NavbarContainer,
    NavbarList,
    NavbarListItem,
    NavbarLogo,
    MobileMenuIcon,
    NavBarMobile,
} from "./navbar.elements";
import Logo from "../../assets/svg/logo.svg";
import { Bag, List } from "@styled-icons/bootstrap/";

const Navbar = ({ auth, setAuth, setCart }) => {
    const [toggleMobile, setToggleMobile] = useState(false);

    const handleToggleMobile = () => {
        setToggleMobile((toggleMobile) => !toggleMobile);
    };

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
            <MobileMenuIcon>
                <List onClick={handleToggleMobile} size="25" />
            </MobileMenuIcon>
            <NavBarMobile toggleMobile={toggleMobile}>
                {auth.token ? (
                    <div>
                        <div>
                            <h4>
                                {`Bienvenido, ${auth.user.slice(
                                    0,
                                    auth.user.indexOf("@")
                                )}!`}
                            </h4>
                            <Link to="/">Home</Link>
                            <Link to="/store">Tienda</Link>
                            <Link to="/cart">
                                Ver carrito <Bag size="15" />
                            </Link>
                        </div>
                        <div>
                            <Button
                                onClick={() => {
                                    handleSessionEnd();
                                    handleToggleMobile();
                                }}
                            >
                                Cerrar Sesión
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/store">Tienda</Link>
                        <Link to="/cart">
                            Ver carrito <Bag size="15" />
                        </Link>
                        <Link to="/login">
                            <Button onClick={handleToggleMobile}>
                                Iniciar Sesión
                            </Button>
                        </Link>
                    </div>
                )}
            </NavBarMobile>
        </NavbarContainer>
    );
};

export default Navbar;
