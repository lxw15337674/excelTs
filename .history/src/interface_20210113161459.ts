export interface Table {
    value:Sheet[]
    addWorkSheet:(name:string)=>void
    remove
}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

