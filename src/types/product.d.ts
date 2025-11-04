export interface Product {
  id: string | number;
  name: string;
  price: number;
  oldPrice?: string;
  image?: ImageSourcePropType;
}

export interface ProductsContextType {
  products: Product[];
  categories: { id: number; name: string }[];
  getProductsByCategory: (category: number) => void;
  getProductById: (id: number) => Promise<any>;
  loadProducts: () => void;
}
