import products from "../../data/products.json";
import img from "../../assets/img/Nike-Men-1.jpg";

const ProductList = () => {
    return (
        <div>
            {products.map((shoe) => {
                return (
                    <div key={shoe.id}>
                        <h1>{shoe.name}</h1>
                        <p>{shoe.price}</p>
                        <img src={img} alt={shoe.name}></img>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
