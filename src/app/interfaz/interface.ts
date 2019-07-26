export interface IAsignatura{
    id: string;
    nombre: string;
    temas: ITema[];
}

export interface ITema{
    id?: string;
    nombre: string;
    descripcion: string;
}

export interface IPregunta{
    id?: number;
    descipcion: string;
    opciones: string[];
    respuesta: number; 
}

export interface IExamen{
    persona: string;
    tema: string;
    asignatura: string;
    preguntas: IPregunta[];
}

export interface IPersona{
    user: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    pass: string;
    estado: boolean;
    telefono: string;
    rol: number;
    id?: string;
}