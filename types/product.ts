import { Category } from './category';
export interface Product {
    _id: string
    name: string;
    description: string;
    price: number;
    image_product: [string];
    cover: string;
    created_at: Date;
    category: Category;
    variants: {
        type: string;
        price: number;
        quantity: number;
    }[];
}
