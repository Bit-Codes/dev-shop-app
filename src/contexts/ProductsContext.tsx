import { productService } from "@/services/api";
import { Product, ProductsContextType } from "@/types/product";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await productService.getProducts();
      const categories = await productService.getCategories();
      setCategories(categories);
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const getProductById = async (id: number) => {
    return await productService.getProductById(id);
  };
  const getProductsByCategory = async (category: number) => {
    try {
      const response = await productService.getProductByCategory(category);

      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductById,
        getProductsByCategory,
        categories,
        loadProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => {
  return useContext(ProductsContext);
};
