import { Cell, Sheet, Workbook } from './interface';

class Workbook implements Workbook {
    private value: [];
    addWorkSheet: (name) => {
         sheet1 = new Sheet(name) 

    };
    
    // removeWorkSheet: (name: string) => void;
    // getWorkSheet: (name: string) => void;
}

class Sheet implements Sheet{
    private value:[]
    private name:null
    private id:null
    constructor(name){
        this.name = name
    }
}

class Cell implements Cell{
    
}