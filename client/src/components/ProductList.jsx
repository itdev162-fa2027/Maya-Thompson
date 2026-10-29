import { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Runs whenever data is updated
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await getProducts();
                setProducts(data);
                setError(null);
            } catch (err) {
                setError("Failed to load products. Please try again later.")
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading){
        return <div className="loading">Loading products...</div>;
    }

    if (error){
        return <div className="error">{error}</div>;
    }
    
    if (products.length === 0){
        return (
            <div className="empty-state">
                <h2> No products available</h2>
                <p>Check back soon for new items!</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product ={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;