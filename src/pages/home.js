import styled from "styled-components";
import homeImage from "./../assets/img/home.jpg";

const Hero = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${(props) => `url(${props.homeImage}) no-repeat center center`};
    background-size: cover;
`;

const Home = () => {
    return <Hero homeImage={homeImage} />;
};

export default Home;
