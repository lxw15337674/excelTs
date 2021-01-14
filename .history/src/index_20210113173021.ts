
class workbook  {
    private sheets: Sheet[] = [];
    private name:string = '无标题表格';
    addWorkSheet(name?:string) {
        if(name===null){
           name=this.initSheetName()
        }
        this.sheets.push(new Sheet(name));
    }
    removeWorkSheet(name:string) {
        const index = this.getWorkSheetsName().findIndex((val) => val === name);
        if (index === -1) {
            throw new Error('未找到对应sheet');
        } else {
            this.sheets.splice(index, 1);
        }
    }
    getWorkSheetsName() {
        return this.sheets.map((sheet) => sheet.getName());
    }
    
    public getName() : string {
        return this.name;
    }
    public setName(v : string) {
        this.name = v;
    }
    private initSheetName(){
        let sheetName;
        while(true){
            sheetName = `sheet${sheetNum}`;
            if (state.sheets[sheetName]) {
                sheetNum++;
                checkSheetName();
            }
        }
        // function checkSheetName() {
        //     sheetName = `sheet${sheetNum}`;
        //     if (state.sheets[sheetName]) {
        //         sheetNum++;
        //         checkSheetName();
        //     }
        // }
        // checkSheetName();
        // state.sheets[sheetName] = createTable();
        // state.sheetNames.push(sheetName);
        // state.activeSheetName = sheetName;
    }
}

class Sheet  {
    private value: [];
    private name = null;
    private id = null;
    constructor(name) {
        this.name = name;
        return this;
    }
    public getName(): string {
        return this.name;
    }
    public setName(v: string) {
        this.name = v;
    }

    public getId(): string {
        return this.id;
    }
    public setId(v: string) {
        this.id = v;
    }
}

class Cell {}