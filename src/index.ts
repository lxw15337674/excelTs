// 统一单元格位置：第几行第几列，现有row，再有col
import { HeaderCell, Index, Position, Style } from './interface';
import { addPx } from './utils/addPx';
import { indexToChar } from './utils/transform';

let id = 1;
const HeaderHeight = 50;
const HeaderWidth = 120;
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
    constructor(name: string, rowLength: number = 50, colLength: number = 20) {
        this.setName(name);
        this.setId(id++);
        this.initCells(rowLength, colLength);
    }
    public initCells(rowLength: number, colLength: number) {
        let top = 0;
        for (let row = 0; row < rowLength; row++) {
            let rowCells = [];
            let left = 0;
            for (let col = 0; col < colLength; col++) {
                rowCells.push(
                    new Cell(`行：${row}，列：${col}`, { top, left }, { row: row, col: col }),
                );
                left += 120;
            }
            this.cells.push(rowCells);
            top += 30;
        }
    }
    public addRow(index: number, value: string = '') {
        let row = Array(this.cells[0].length).fill(value);
        this.cells.splice(index, 0, row);
    }
    // public addCol(index: number, value: string = '') {
    //     const left = this.getCellLeft(index);
    //     let top = 0;
    //     for (let row of this.cells) {
    //         row.splice(index, 0, new Cell(value, { left, top },{row:0,col:index}));
    //         top += 30;
    //     }
    // }
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
    public getSheetWidth() {
        const cells = this.cells[0];
        const cell = cells[cells.length - 1];
        return cell.getPosition().left + cell.getStyle().width;
    }
    public getSheetHeight() {
        const cells = this.cells[this.cells.length-1];
        const cell = cells[cells.length - 1];
        return cell.getPosition().top + cell.getStyle().height;
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
    public getDataCells(): Cell[] {
        return this.cells.flat();
    }
    public findCell(row: number, col: number) {
        return this.cells[row][col];
    }
    public getPlaceholderCell() {
        return {
            height: addPx(HeaderHeight),
            width: addPx(HeaderWidth),
        };
    }
    public getRowCells(): HeaderCell[] {
        let top = HeaderHeight;
        return this.cells.map((cell, index) => {
            const height = cell[0].getStyle().height;
            const result = {
                id: id++,
                index: index,
                value: (index + 1).toString(),
                top: top,
                left: 0,
                height: addPx(height),
                width: addPx(HeaderWidth),
            };
            top += height;
            return result;
        });
    }
    public getColCells(): HeaderCell[] {
        let left = HeaderWidth;
        return this.cells[0].map((cell, index) => {
            const width = cell.getStyle().width;
            const result = {
                id: id++,
                index: index,
                value: indexToChar(index + 1),
                top: 0,
                left: left,
                height: addPx(HeaderHeight),
                width: addPx(width),
            };
            left += width;
            return result;
        });
    }
}

// // 行序号单元格
// export class rowCell{
//     private index:number
//     constructor(index:number){
//         this.setIndex(index)
//     }
//     public getIndex() {
//         return this.index;
//     }
//     public setIndex(v: number) {
//         this.index = v;
//     }
// }
// // 列序号单元格
// export class HeaderCell extends rowCell{

// }

export class Cell {
    private value: string;
    private id: number;
    private style: Style;
    private position: Position;
    private index: Index;

    constructor(value: string, position: Position, index: Index) {
        this.setValue(value);
        this.setId(id++);
        this.setStyle({
            width: 120,
            height: 30,
        });
        this.setPosition(position);
        this.setIndex(index);
    }

    public getIndex(): Index {
        return this.index;
    }
    public setIndex(v: Index) {
        this.index = v;
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
    public getCellStyle() {
        return {
            left: addPx(this.position.left),
            top: addPx(this.position.top),
            width: addPx(this.style.width),
            height: addPx(this.style.height),
        };
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
