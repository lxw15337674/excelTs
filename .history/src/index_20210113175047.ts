class workbook {
    private sheets: Sheet[] = [];
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
    private value: [];
    private name = null;
    private id = null;
    constructor(name) {
        this.setName(name)
    }
    public initCells():string{

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
