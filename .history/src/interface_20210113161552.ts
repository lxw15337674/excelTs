export interface Table {
    value:Sheet[]
    // 添加表
    addWorkSheet:(name:string)=>void
    // 删除表
    removeWorkSheet:(name:string)=>void
// 获取表数据
    
}
export interface Sheet{
    value:Cell[][]
}

export interface Cell{
    value:string
}

