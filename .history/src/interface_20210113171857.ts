abstract  class Workbook {
    sheets: Sheet[];
    name:string
    // 添加表
    addWorkSheet: (name: string) => void;
    // 删除表
    removeWorkSheet: (name: string) => void;
    // 获取表数据
    getWorkSheet: (name: string) => void;
    getWorkSheetsName:()=>string[]
}
abstract  class Sheet {
    cells: Cell[][];
    name: string;
    id: number;
    constructor: (name: string) => Sheet;
    getValue
}
abstract  class Cell {
    value: string;
}
