import { Image } from "./image";
import { tech } from "./technology";

export interface Project {
    bgImage: string
    bgAlt?: string
    name: string
    description: string
    tech: tech[]
    images: Image[]
}