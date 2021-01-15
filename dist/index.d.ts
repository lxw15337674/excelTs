import { Position, Style } from './interface';
export default class Workbook {
    private sheets;
    private name;
    private id;
    getId(): any;
    setId(v: number): void;
    constructor(name?: string);
    addWorkSheet(): void;
    removeWorkSheet(name: string): void;
    getWorkSheetsName(): string[];
    getName(): string;
    setName(v: string): void;
    getSheetByIndex(index: number): Sheet;
    getSheet(name: string): string;
    getSheetIndex(name: string): number;
    private initDefaultSheetName;
}
export declare class Sheet {
    private cells;
    private name;
    private id;
    constructor(name: string, rowLength?: number, colLength?: number);
    initCells(rowLength: number, colLength: number): void;
    addRow(index: number, value?: string): void;
    addCol(index: number, value?: string): void;
    removeCol(index: any): void;
    removeRow(index: any): void;
    getRowLength(): number;
    getColLength(): number;
    getName(): string;
    setName(v: string): void;
    getId(): number;
    setId(v: number): void;
    getCellLeft(index: any): number;
    getCellTop(index: any): number;
    getRowHeight(index: any): string | number;
    getColWidth(index: any): string | number;
    getCells(): Cell[];
}
export declare class Cell {
    private value;
    private id;
    private style;
    private position;
    constructor(value: string, position: Position);
    getPosition(): Position;
    setPosition(v: Position): void;
    getStyle(): Style;
    setStyle(v: Style): void;
    getValue(): string;
    setValue(v?: string): void;
    getId(): number;
    setId(v: number): void;
}
