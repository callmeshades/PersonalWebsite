import { tech } from "./technology";

export interface Project {
    bgImage: string
    bgAlt?: string
    name: string
    description: string
    tech: tech[]
}