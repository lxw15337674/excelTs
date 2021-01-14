import { addWorkSheet } from './../.history/src/interface_20210113161433';
export interface Table {
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
