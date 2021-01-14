export interface Workbook {
    value: Sheet[];
    // 添加表
    addWorkSheet: (name: string) => void;
    // 删除表
    removeWorkSheet: (name: string) => void;
    // 获取表数据
    getWorkSheet: (name: string) => void;

}
export interface Sheet {
    value: Cell[][];
    name:string;
    id:number;
    constructor::(name:string)=>void
}

export interface Cell {
    value: string;
}
