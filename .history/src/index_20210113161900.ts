import { Sheet, Table } from "./interface";

class table implements Table{
    value: Sheet[];
    addWorkSheet: (name: string) => void;
    removeWorkSheet: (name: string) => void;
    getWorkSheet: (name: string) => void;

}