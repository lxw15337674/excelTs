import { Cell, Sheet, Workbook } from './interface';

class workbook implements Workbook {
    private value: [];
    addWorkSheet: (name) => {
        const sheet1 = new sheet(name) 
        const b = new Bar();

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