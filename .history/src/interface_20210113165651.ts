export interface Workbook {
    sheets: Sheet[];
    // 添加表
    addWorkSheet: (name: string) => void;
    // 删除表
    removeWorkSheet: (name: string) => void;
    // 获取表数据
    getWorkSheet: (name: string) => void;
    getWorkSheetsName
}
export interface Sheet {
    cells: Cell[][];
    name: string;
    id: number;
    constructor: (name: string) => Sheet;
    getValue
}

export interface Cell {
    value: string;
}
