import { Cell, Sheet, Workbook } from './interface';

class workbook implements Workbook {
    value: [];
    addWorkSheet: (name) => {
        value.push(value)
    };
    // removeWorkSheet: (name: string) => void;
    // getWorkSheet: (name: string) => void;
}

class sheet implements Sheet{
    private value:[]
    private name:null
    private id:null
    constructor(name){
        this.name = name
    }
}

class cell implements Cell{
    
}