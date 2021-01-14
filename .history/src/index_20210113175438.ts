class workbook {
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
    private value: Cell[][];
    private name = null;
    private id = null;
    constructor(name:string,rowLength:number=10,colLength:number=10) {
        this.setName(name)
        this.initCells(rowLength,colLength)
    }
    public initCells(rowLength:number,colLength:number){
        let table = []
        for (let row = 0; row < rowLength; row++) {
            table[row] = [];
            for (let col = 0; col < colLength; col++) {
                table[row][col] = `行：${row}，列：${col}`;
            }
        }
        
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
    private value : string;
    public getValue() : string {
        return this.value;
    }
    public setValue(v : string) {
        this.value = v;
    }
}
