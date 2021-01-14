export interface Table {
    value:Sheet[]
    addWorkSheet()
}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

