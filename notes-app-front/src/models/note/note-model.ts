export interface Note {
    id:number;
    title:string;
    description:string;
    version:number;
    userId:number;
    createdAt:string;
    updatedAt:string

}

export interface NoteSave {
    title:string;
    description:string;
    version:number;

}