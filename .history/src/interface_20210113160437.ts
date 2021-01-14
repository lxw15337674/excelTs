export interface Table {
    value:Sheet[]
}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}