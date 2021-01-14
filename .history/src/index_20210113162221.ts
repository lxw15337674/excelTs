import { Cell, Sheet, Table } from './interface';

class workbook implements Table {
    value: [];
    addWorkSheet: (name: string) => {
        value.push()
    };
    removeWorkSheet: (name: string) => void;
    getWorkSheet: (name: string) => void;
}

class sheet implements Sheet{

}

class cell implements Cell{
    
}