import styled from "styled-components";
import homeImage from "./../assets/img/home.jpg";
import { Button } from "../components/shared/Button";
import { Link } from "react-router-dom";

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
            19deg,
            rgba(33, 212, 253, 0.7) 0%,
            rgba(183, 33, 255, 0.7) 100%
        ),
        ${(props) => `url(${props.homeImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;

    & h1 {
        color: #fff;
        font-size: clamp(1rem, 10vw, 4rem);
        text-transform: uppercase;
        width: 90%;
        max-width: 900px;
        text-align: center;
    }
`;

const HomeButton = styled(Button)`
    margin: 20px auto 0 auto;
    font-size: clamp(0.8rem, 2.5vw, 1rem);
`;

const Home = () => {
    return (
        <Hero homeImage={homeImage}>
            <h1>Tenis deportivos para ir más lejos</h1>
            <Link to="/login">
                <HomeButton>Comprar ya!</HomeButton>
            </Link>
        </Hero>
    );
};

export default Home;
