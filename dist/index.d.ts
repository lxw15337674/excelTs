import { HeaderCell, Index, Position, Style } from './interface';
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
    removeCol(index: any): void;
    removeRow(index: any): void;
    getRowLength(): number;
    getColLength(): number;
    getName(): string;
    setName(v: string): void;
    getId(): number;
    setId(v: number): void;
    getCellLeft(index: any): number;
    getSheetWidth(): number;
    getSheetHeight(): number;
    getCellTop(index: any): number;
    getRowHeight(index: any): number;
    getColWidth(index: any): number;
    getDataCells(): Cell[];
    findCell(row: number, col: number): Cell;
    getPlaceholderCell(): {
        height: string;
        width: string;
    };
    getRowCells(): HeaderCell[];
    getColCells(): HeaderCell[];
}
export declare class Cell {
    private value;
    private id;
    private style;
    private position;
    private index;
    constructor(value: string, position: Position, index: Index);
    getIndex(): Index;
    setIndex(v: Index): void;
    getPosition(): Position;
    setPosition(v: Position): void;
    getStyle(): Style;
    getCellStyle(): {
        left: string;
        top: string;
        width: string;
        height: string;
    };
    setStyle(v: Style): void;
    getValue(): string;
    setValue(v?: string): void;
    getId(): number;
    setId(v: number): void;
}
