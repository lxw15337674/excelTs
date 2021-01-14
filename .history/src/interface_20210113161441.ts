export interface Table {
    value:Sheet[]
    addWorkSheet()=>void
    
}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

