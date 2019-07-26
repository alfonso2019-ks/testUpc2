export interface IAsignatura{
    codigo_Asignatura: string;
    nombre: string;
    temas: ITema[];
}

export interface ITema{
    codigo_Tema: string;
    nombre: string;
    descripcion: string;
}

export interface IPregunta{
    codigo_Pregunta: number;
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