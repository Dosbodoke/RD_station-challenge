import axios from "axios";

export interface Product {
  id: number;
  name: string;
  category: string;
  preferences: string[];
  features: string[];
}

const baseURL = "http://localhost:3001";

const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data as Product[];
  } catch (error) {
    console.error("Erro ao obter os produtos:", error);
    throw error;
  }
};

export default getProducts;
