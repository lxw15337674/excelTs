import { Cell, Sheet, Workbook } from './interface';


class Workbook implements Workbook {
    private sheets = [];
    addWorkSheet(name) {
        this.sheets.push(new Sheet(name));
    }
    removeWorkSheet(name) {}
    getWorkSheetsName() {
        for (let sheet of this.sheets) {
        }
        this.sheets.map(item);
        return this.
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
