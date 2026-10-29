const API_BASE_URL = "http://localhost:5151";

//Fetching all products
export const getProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if(!response.ok){
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products: ", error);
    }
};

//Fetching product by id
export const getProductById = async (id) => {
    try {
        const response = await fetch (`${API_BASE_URL}/products/${id}`)
        if(!response.ok){
            throw new Error ("Failed to fetch product");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching product: ", error);
        throw error;
    }
};