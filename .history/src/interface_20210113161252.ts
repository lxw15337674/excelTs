export interface Table {
    value:Sheet[]
    constructor(rowIndex:number,y:number)
}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

