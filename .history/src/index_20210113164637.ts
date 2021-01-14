import { Cell, Sheet, Workbook } from './interface';

class Workbook implements Workbook {
    private value= [];
    addWorkSheet(name) {
        this.value.push(new Sheet(name));
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
    
    private _value : string;
    public get value() : string {
        return this._value;
    }
    public set value(v : string) {
        this._value = v;
    }
    
    
    
}

class Cell implements Cell {}
