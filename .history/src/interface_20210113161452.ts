export interface Table {
    value:Sheet[]
    addWorkSheet:(name:string)=>void

}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

