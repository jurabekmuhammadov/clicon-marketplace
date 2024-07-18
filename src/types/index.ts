export type Product = {
    id: number;
    name: string;
    images: string[];
    description: string;
    price: number;
    category: string;
    star_rating: number;
    feedbacks: number;
    brand: string;
    availability: boolean;
    new_arrival: boolean;
    discount: number;
    best_deal: boolean;
}
export type Categories = {
    id: number;
    name: string;
    img: string;
}
export type Brands = {
    name: string;
}

export type HeaderStore = {
    isBlackFridayOpen: boolean;
    isMenuOpen: boolean;
    setisBlackFridayOpen: (isOpen: boolean) => void;
    setIsMenuOpen: (isOpen: boolean) => void;
    searchValue: string;
    allProducts: Product[];
    results: Product[];
    setSearchValue: (value: string) => void;
    fetchProducts: () => Promise<void>;
    searchProducts: () => void;
    clearResults: () => void
}