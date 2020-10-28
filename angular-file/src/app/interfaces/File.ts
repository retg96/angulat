export interface Archivo {
    _id?: string;
    title: string;
    description: string;
    nombre: string;
    archivoPath: string;
    archivo: Blob;
}