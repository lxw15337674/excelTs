// 统一单元格位置：第几行第几列，现有row，再有col
import { Position, Style } from './interface';

let id = 1;
export default class Workbook {
    private sheets: Sheet[] = [new Sheet('sheet1')];
    private name: string;
    private id = null;
    public getId() {
        return this.id;
    }
    public setId(v: number) {
        this.id = v;
    }

    constructor(name = '无标题表格') {
        this.setId(id++);
        if (name !== undefined) {
            this.setName(name);
        }
    }
    addWorkSheet() {
        this.sheets.push(new Sheet(this.initDefaultSheetName()));
    }

    removeWorkSheet(name: string) {
        const index = this.getSheetIndex(name);
        if (index === -1) {
            throw new Error('未找到对应sheet');
        } else {
            this.sheets.splice(index, 1);
        }
    }
    getWorkSheetsName() {
        return this.sheets.map((sheet) => sheet.getName());
    }
    public getName(): string {
        return this.name;
    }
    public setName(v: string) {
        if (this.getSheetIndex(v) === -1) {
            this.name = v;
        } else {
            throw new Error('sheet名称重复');
        }
    }
    public getSheetByIndex(index: number) {
        return this.sheets[index];
    }
    public getSheet(name: string) {
        return this.getWorkSheetsName().find((val) => val === name);
    }
    public getSheetIndex(name: string) {
        return this.getWorkSheetsName().findIndex((val) => val === name);
    }
    private initDefaultSheetName() {
        let sheetNum = 1;
        while (true) {
            const sheetName = `sheet${sheetNum}`;
            if (this.getSheetIndex(sheetName) === -1) {
                return sheetName;
            }
            sheetNum++;
        }
    }
}

export class Sheet {
    private cells: Cell[][] = [];
    private name: string = null;
    private id: number = null;
    constructor(name: string, rowLength: number = 10, colLength: number = 10) {
        this.setName(name);
        this.setId(id++);
        this.initCells(rowLength, colLength);
    }
    public initCells(rowLength: number, colLength: number) {
        let top = 0;
        let left = 0;
        for (let row = 0; row < rowLength; row++) {
            let rowCells = [];
            for (let col = 0; col < colLength; col++) {
                rowCells.push(new Cell(`行：${row}，列：${col}`, { top, left }));
                left += 120;
            }
            this.cells.push(rowCells);
            top + 30;
        }
    }
    public addRow(index: number, value: string = '') {
        let row = Array(this.cells[0].length).fill(value);
        this.cells.splice(index, 0, row);
    }
    public addCol(index: number, value: string = '') {
        const left = this.getCellLeft(index);
        let top = 0;
        for (let row of this.cells) {
            row.splice(index, 0, new Cell(value, { left, top }));
            top += 30;
        }
    }
    public removeCol(index) {
        for (let row of this.cells) {
            row.splice(index, 1);
        }
    }
    public removeRow(index) {
        this.cells.splice(index, 1);
    }
    public getRowLength() {
        return this.cells.length;
    }
    public getColLength() {
        return this.cells[0].length;
    }
    public getName(): string {
        return this.name;
    }
    public setName(v: string) {
        this.name = v;
    }

    public getId(): number {
        return this.id;
    }
    public setId(v: number) {
        this.id = v;
    }
    public getCellLeft(index) {
        let left = 0;
        for (let i = 0; i > index; i++) {
            left += this.cells[0][index].getPosition().left;
        }
        return left;
    }
    public getCellTop(index) {
        let top = 0;
        for (let i = 0; i > index; i++) {
            top += this.cells[index][0].getPosition().top;
        }
        return top;
    }
    public getRowHeight(index) {
        return this.cells[index][0].getStyle().height;
    }
    public getColWidth(index) {
        return this.cells[0][index].getStyle().width;
    }
    public getCells(): Cell[] {
        return this.cells.flat();
    }
}

export class Cell {
    private value: string;
    private id: number;
    private style: Style;
    private position: Position;
    constructor(value: string, position: Position) {
        this.setValue(value);
        this.setId(id++);
        this.setStyle({
            width: 120,
            height: 30,
        });
        this.setPosition(position);
    }

    public getPosition(): Position {
        return this.position;
    }
    public setPosition(v: Position) {
        this.position = v;
    }

    public getStyle() {
        return this.style;
    }
    public setStyle(v: Style) {
        this.style = v;
    }

    public getValue(): string {
        return this.value;
    }
    public setValue(v: string = '') {
        this.value = v;
    }
    public getId() {
        return this.id;
    }
    public setId(v: number) {
        this.id = v;
    }
}
