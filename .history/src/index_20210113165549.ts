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
    
    
    private id : string;
    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        this._id = v;
    }
    
    
    
}

class Cell implements Cell {}
