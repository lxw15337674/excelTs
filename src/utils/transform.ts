// 位置转换列头符号。
//  例如： 1->A 26->Z   27->AA 28->AB
export function indexToChar(n: number): string {
    let res="";
    while(n>0){
        let temp = n%26;
        n = Math.floor(n/26);
        if(temp==0){
            temp=26;
            n--;
        }
        res = String.fromCharCode(temp+64)+res;
    }
    return  res; 
}
// 列头符号转换位置。
//  例如： A->1 Z->26   AA->27 AB->28
export function charToIndex(str: string): number {
    var arr = str.split('');
    var n = arr.length;
    var res = 0;
    for (var i = 0; i < arr.length; i++){
        res += (arr[i].charCodeAt(0) - 64) * Math.pow(26, n - i - 1);
    }
    return res;
}

// 通过单位格标识转换为对应的列与行位置,
// A1=>[1，1],z2=>[26,2]
export function symbolToIndex(str: string): Array<number> {
    let index: number = str.search(/\d/);
    let col: number = charToIndex(str.slice(0, index));
    let row: number = parseInt(str.slice(index)) ;
    return [col, row];
}

// 通过对应的列与行位置转换为单元格标识
// [26,2]=>Z2
export function IndexToSymbol(row: number, col: number): string {
    let colSymbol: string = indexToChar(col);
    let rowSymbol: number = row + 1;
    return `${colSymbol}${rowSymbol}`;
}

//数字转px
export function numToPx(number: number): string {
    if (number) {
        return `${number}px`;
    }
}
//px转数字
export function pxToNum(str: string): number {
    if (str) {
        return parseInt(str.slice(0, -2), 10);
    }
}
