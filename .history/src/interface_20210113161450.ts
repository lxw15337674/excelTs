export interface Table {
    value:Sheet[]
    addWorkSheetL(name:string)=>void

}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

