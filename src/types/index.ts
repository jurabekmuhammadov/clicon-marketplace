export type Products = {
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
    discount: number;
    best_deal: boolean;
}
export type Categories = {
    name: string;
}
export type Brands = {
    name: string;
}