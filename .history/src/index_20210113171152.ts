import { Cell, Sheet, Workbook } from './interface';

class Workbook implements Workbook {
    private sheets = [];
    addWorkSheet(name) {
        this.sheets.push(new Sheet(name));
    }
    removeWorkSheet(name) {
        const index = this.getWorkSheetsName().findIndex((val)=>val===name)
        if(index===-1){

        }else{
            
        }
    }
    getWorkSheetsName() {
        return this.sheets.map((sheet) => sheet.getName());
    }
}

class Sheet implements Sheet {
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

class Cell implements Cell {}
