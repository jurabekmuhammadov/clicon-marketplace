import {create} from "zustand";
import axios from "axios";
import {Products} from "@/types";

interface ProductStore {
    products: Products[];
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get('/api/products');
            set({ products: response.data, loading: false });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

export default useProductStore;