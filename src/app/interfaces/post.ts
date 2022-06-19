import { Category } from "./category"

export interface Post {
    id: number
    titulo: string
    texto: string
    autor: string
    imagen: string
    fecha: string
    categoria: Category
}
