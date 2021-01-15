declare let id: number;
declare class Workbook {
    private sheets;
    private name;
    private id;
    getId(): any;
    setId(v: number): void;
    constructor(name?: any);
    addWorkSheet(name?: string): void;
    removeWorkSheet(name: string): void;
    getWorkSheetsName(): string[];
    getName(): string;
    setName(v: string): void;
    private findSheetIndex;
    private initDefaultSheetName;
}
declare class Sheet {
    private cells;
    private name;
    private id;
    constructor(name: string, rowLength?: number, colLength?: number);
    initCells(rowLength: number, colLength: number): void;
    addRow(index: number, value?: string): void;
    addCol(index: number, value?: string): void;
    removeCol(index: any): void;
    removeRow(index: any): void;
    getName(): string;
    setName(v: string): void;
    getId(): number;
    setId(v: number): void;
}
declare class Cell {
    private value;
    private id;
    constructor(value: string);
    getValue(): string;
    setValue(v?: string): void;
    getId(): number;
    setId(v: number): void;
}
declare const workbook: Workbook;
