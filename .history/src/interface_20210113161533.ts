export interface Table {
    value:Sheet[]
    // 添加
    addWorkSheet:(name:string)=>void
    removeWorkSheet:(name:string)=>void

}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

