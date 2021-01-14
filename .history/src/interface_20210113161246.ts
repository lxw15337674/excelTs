export interface Table {
    value:Sheet[]
    constructor(x:number)
}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

