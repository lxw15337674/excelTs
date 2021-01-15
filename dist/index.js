(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    var id = 1;
    var Workbook = (function () {
        function Workbook(name) {
            this.sheets = [new Sheet('sheet1')];
            this.name = '无标题表格';
            this.id = null;
            this.setId(id++);
            if (name !== null) {
                this.setName(name);
            }
        }
        Workbook.prototype.getId = function () {
            return this.id;
        };
        Workbook.prototype.setId = function (v) {
            this.id = v;
        };
        Workbook.prototype.addWorkSheet = function (name) {
            if (name === null) {
                name = this.initDefaultSheetName();
            }
            this.sheets.push(new Sheet(name));
        };
        Workbook.prototype.removeWorkSheet = function (name) {
            var index = this.findSheetIndex(name);
            if (index === -1) {
                throw new Error('未找到对应sheet');
            }
            else {
                this.sheets.splice(index, 1);
            }
        };
        Workbook.prototype.getWorkSheetsName = function () {
            return this.sheets.map(function (sheet) { return sheet.getName(); });
        };
        Workbook.prototype.getName = function () {
            return this.name;
        };
        Workbook.prototype.setName = function (v) {
            this.name = v;
        };
        Workbook.prototype.findSheetIndex = function (name) {
            return this.getWorkSheetsName().findIndex(function (val) { return val === name; });
        };
        Workbook.prototype.initDefaultSheetName = function () {
            var sheetNum = 1;
            while (true) {
                var sheetName = "sheet" + sheetNum;
                if (this.findSheetIndex(sheetName) === -1) {
                    return sheetName;
                }
                sheetNum++;
            }
        };
        return Workbook;
    }());
    var Sheet = (function () {
        function Sheet(name, rowLength, colLength) {
            if (rowLength === void 0) { rowLength = 10; }
            if (colLength === void 0) { colLength = 10; }
            this.cells = [];
            this.name = null;
            this.id = null;
            this.setName(name);
            this.setId(id++);
            this.initCells(rowLength, colLength);
        }
        Sheet.prototype.initCells = function (rowLength, colLength) {
            for (var row = 0; row < rowLength; row++) {
                var rowCells = [];
                for (var col = 0; col < colLength; col++) {
                    rowCells.push(new Cell("\u884C\uFF1A" + row + "\uFF0C\u5217\uFF1A" + col));
                }
                this.cells.push(rowCells);
            }
        };
        Sheet.prototype.addRow = function (index, value) {
            if (value === void 0) { value = ''; }
            var row = Array(this.cells[0].length).fill(value);
            this.cells.splice(index, 0, row);
        };
        Sheet.prototype.addCol = function (index, value) {
            if (value === void 0) { value = ''; }
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var row = _a[_i];
                row.splice(index, 0, new Cell(value));
            }
        };
        Sheet.prototype.removeCol = function (index) {
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var row = _a[_i];
                row.splice(index, 1);
            }
        };
        Sheet.prototype.removeRow = function (index) {
            this.cells.splice(index, 1);
        };
        Sheet.prototype.getName = function () {
            return this.name;
        };
        Sheet.prototype.setName = function (v) {
            this.name = v;
        };
        Sheet.prototype.getId = function () {
            return this.id;
        };
        Sheet.prototype.setId = function (v) {
            this.id = v;
        };
        return Sheet;
    }());
    var Cell = (function () {
        function Cell(value) {
            this.setValue(value);
            this.setId(id++);
        }
        Cell.prototype.getValue = function () {
            return this.value;
        };
        Cell.prototype.setValue = function (v) {
            if (v === void 0) { v = ''; }
            this.value = v;
        };
        Cell.prototype.getId = function () {
            return this.id;
        };
        Cell.prototype.setId = function (v) {
            this.id = v;
        };
        return Cell;
    }());
    var workbook = new Workbook();
    console.log(workbook);

})));
