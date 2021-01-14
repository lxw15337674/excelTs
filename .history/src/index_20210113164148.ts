import { Cell, Sheet, Workbook } from './interface';

class Workbook implements Workbook {
    private value: [];
    addWorkSheet(name) {
        this.value = this.value.push(new Sheet(name));
    }

    // removeWorkSheet: (name: string) => void;
    // getWorkSheet: (name: string) => void;
}

class Sheet implements Sheet {
    private value: [];
    private name: null;
    private id: null;
    constructor(name) {
        this.name = name;
        return this;
    }
}

class Cell implements Cell {}
