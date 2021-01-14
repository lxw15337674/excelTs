import { Cell, Sheet, Workbook } from './interface';

class Workbook implements Workbook {
    private sheets= [];
    addWorkSheet(name) {
        this.sheets.push(new Sheet(name));
    }
    removeWorkSheet(name){
        
    }
    getWorkSheet(){
        for(let sheet of this.sheets){
            
        }
    }
}

class Sheet implements Sheet {
    private value: [];
    private name= null;
    private id= null;
    constructor(name) {
        this.name = name;
        return this;
    }
    public getName() : string {
        return this.name;
    }
    public setName(v : string) {
        this.name = v;
    }

    
}

class Cell implements Cell {}
