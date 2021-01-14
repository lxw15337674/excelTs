
class workbook  {
    private sheets: Sheet[] = [];
    private name:string = '无标题表格';
    addWorkSheet(name:string) {
        this.sheets.push(new Sheet(name));
    }
    removeWorkSheet(name) {
        const index = this.getWorkSheetsName().findIndex((val) => val === name);
        if (index === -1) {
            throw new Error('未找到对应sheet');
        } else {
            this.sheets.splice(index, 1);
        }
    }
    getWorkSheetsName() {
        return this.sheets.map((sheet) => sheet.getName());
    }
    
    public getName() : string {
        return this.name;
    }
    public setName(v : string) {
        this.name = v;
    }
    
}

class Sheet  {
    private value: [];
    private name = null;
    private id = null;
    constructor(name) {
        this.name = name;
        return this;
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

class Cell {}