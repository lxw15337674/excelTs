export interface workbook {
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
    addWorkSheet
}

export interface Cell {
    value: string;
}
