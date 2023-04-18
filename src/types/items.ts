import { StaticImageData } from "next/image";

export interface Item {
    category: string;
    id: string;
    name: string;
    description: string;
    about: string[];
    price: number;
    gallery: StaticImageData[]

}