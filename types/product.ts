import { Category } from './category';
import { Publisher } from './publisher';
export interface Product {
    _id: string
    name: string;
    description: string;
    price: number;
    image_product: [string];
    cover: string;
    created_at: Date;
    category: Category;
    publisher: Publisher;
    variants: {
        type: string;
        price: number;
        quantity: number;
    }[];
}
