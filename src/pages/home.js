import ProductList from "../components/store/productList/productList";

const Home = ({ user }) => {
    return (
        <>
            <h1>Home page</h1>
            <h3>Bienvenido {user}</h3>
            <ProductList />
        </>
    );
};

export default Home;
