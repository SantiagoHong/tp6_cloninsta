export interface Usuario {
    nombre: string;
    imagen: string;
    biografia: string;
    cantPubl: number;
    cantSeguidores: number;
    cantSeguidos: number;
    publicacionesAso: Publicacion[];

}

export interface Publicacion {
    id: number;
    descripcion: string;
    imagen: string;
    nomUsuario: string;
    cantLikes: number;
    comentarios: Comentario[];
    fecha: string;
}

export interface Comentario {
    id: number;
    texto: string;
    nomUsuario: string;
}