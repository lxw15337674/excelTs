import { sheet } from './../.history/src/interface_20210113160150';
import { Cell, Sheet, Workbook } from './interface';

class workbook implements Workbook {
    private value: [];
    addWorkSheet: (name) => {
        const sheet
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