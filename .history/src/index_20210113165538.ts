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
        this.sheets.map(item)
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
    
    private _ : string;
    public get () : string {
        return this._;
    }
    public set (v : string) {
        this._ = v;
    }
    
    
}

class Cell implements Cell {}
