export interface Style {
    width: number;
    height: number;
}
export interface Position {
    top: number;
    left: number;
}
export interface Index {
    row: number;
    col: number;
}
export interface HeaderCell {
    id: number;
    index: number;
    value: string;
    top: number;
    left: number;
    height: string;
    width: string;
}
