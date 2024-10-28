import { HeaderStore, Product } from "@/types";
import axios from "axios";
import { create } from "zustand";

const useHeaderStore = create<HeaderStore>((set, get) => ({
    isBlackFridayOpen: true,
    isMenuOpen: false,
    searchValue: "",
    allProducts: [],
    results: [],

    setIsBlackFridayOpen: (isOpen: boolean) => set({ isBlackFridayOpen: isOpen }),
    setIsMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
    setSearchValue: (value: string) => { set({ searchValue: value }) },

    fetchProducts: async () => {
        try {
            const response = await axios.get("/api/products");
            set({ allProducts: response.data })
        } catch (error) {
            console.log((error as Error).message)
        }
    },
    searchProducts: () => {
        const { searchValue, allProducts } = get();
        const lowerCasedSearchValue = searchValue.toLowerCase().trim();

        if (lowerCasedSearchValue) {
            const filteredProducts = allProducts.filter(product =>
                product.name.toLowerCase().trim().includes(lowerCasedSearchValue) ||
                product.brand.toLowerCase().trim().includes(lowerCasedSearchValue) ||
                product.description.toLowerCase().trim().includes(lowerCasedSearchValue)
            )
            set({ results: filteredProducts })
        } else {
            set({ results: [] })
        }
    },

    clearResults: () => set({ results: [], searchValue: "" })
}));

export default useHeaderStore