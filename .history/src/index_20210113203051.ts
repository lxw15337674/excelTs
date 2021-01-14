export default class workbook {
    private sheets: Sheet[] = [new Sheet('sheet1')];
    private name: string = '无标题表格';
    constructor(name) {
        if (name !== null) {
            this.setName(name);
        }
    }
    addWorkSheet(name?: string) {
        if (name === null) {
            name = this.initDefaultSheetName();
        }
        this.sheets.push(new Sheet(name));
    }
    removeWorkSheet(name: string) {
        const index = this.findSheetIndex(name);
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
        this.name = v;
    }
    private findSheetIndex(name: string) {
        return this.getWorkSheetsName().findIndex((val) => val === name);
    }
    private initDefaultSheetName() {
        let sheetNum = 1;
        while (true) {
            const sheetName = `sheet${sheetNum}`;
            if (this.findSheetIndex(sheetName) === -1) {
                return sheetName;
            }
            sheetNum++;
        }
    }
}

class Sheet {
    private cells: Cell[][];
    private name = null;
    private id = null;
    constructor(name: string, rowLength: number = 10, colLength: number = 10) {
        this.setName(name);
        this.initCells(rowLength, colLength);
    }
    public initCells(rowLength: number, colLength: number) {
        for (let row = 0; row < rowLength; row++) {
            const rowCells = [];
            for (let col = 0; col < colLength; col++) {
                rowCells.push(new Cell(`行：${row}，列：${col}`));
            }
            this.cells.push(rowCells);
        }
    }
    public addRow(index: number, value: string = '') {
        let row = Array(this.cells[0].length).fill(value);
        this.cells.splice(index, 0, row);
    }
    public addCol(index: number, value: string = '') {
        for (let row of this.cells) {
            row.splice(index, 0, new Cell(value));
        }
    }
    public removeCol(index){
        for(let row of this.cells){
            row.splice(index,1)
        }
    }
    public removeRow(index){
        this.cells.splice(index,1)
    }
    public getName(): string {
        return this.name;
    }
    public setName(v: string) {
        this.name = v;
    }

    public getId(): string {
        return this.id;
    }
    public setId(v: string) {
        this.id = v;
    }
}

class Cell {
    private value: string;
    constructor(value: string) {
        this.setValue(value);
    }
    public getValue(): string {
        return this.value;
    }
    public setValue(v: string = '') {
        this.value = v;
    }
}
