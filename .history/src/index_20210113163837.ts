import { Cell, Sheet, Workbook } from './interface';

class Workbook  {
    private value: [];
    addWorkSheet: (name) => {
        let   sheet1 = new Sheet(name) 

    };
    
    // removeWorkSheet: (name: string) => void;
    // getWorkSheet: (name: string) => void;
}

class Sheet {
    private value:[]
    private name:null
    private id:null
    constructor(name){
        this.name = name
    }
}

class Cell implements Cell{
    
}