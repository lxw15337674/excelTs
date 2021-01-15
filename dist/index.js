(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
}(this, (function (exports) { 'use strict';

    var id = 1;
    var Workbook = (function () {
        function Workbook(name) {
            if (name === void 0) { name = '无标题表格'; }
            this.sheets = [new Sheet('sheet1')];
            this.id = null;
            this.setId(id++);
            if (name !== undefined) {
                this.setName(name);
            }
        }
        Workbook.prototype.getId = function () {
            return this.id;
        };
        Workbook.prototype.setId = function (v) {
            this.id = v;
        };
        Workbook.prototype.addWorkSheet = function () {
            this.sheets.push(new Sheet(this.initDefaultSheetName()));
        };
        Workbook.prototype.removeWorkSheet = function (name) {
            var index = this.getSheetIndex(name);
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
            if (this.getSheetIndex(v) === -1) {
                this.name = v;
            }
            else {
                throw new Error('sheet名称重复');
            }
        };
        Workbook.prototype.getSheetByIndex = function (index) {
            return this.sheets[index];
        };
        Workbook.prototype.getSheet = function (name) {
            return this.getWorkSheetsName().find(function (val) { return val === name; });
        };
        Workbook.prototype.getSheetIndex = function (name) {
            return this.getWorkSheetsName().findIndex(function (val) { return val === name; });
        };
        Workbook.prototype.initDefaultSheetName = function () {
            var sheetNum = 1;
            while (true) {
                var sheetName = "sheet" + sheetNum;
                if (this.getSheetIndex(sheetName) === -1) {
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
            var top = 0;
            var left = 0;
            for (var row = 0; row < rowLength; row++) {
                var rowCells = [];
                for (var col = 0; col < colLength; col++) {
                    rowCells.push(new Cell("\u884C\uFF1A" + row + "\uFF0C\u5217\uFF1A" + col, { top: top, left: left }));
                    left += 120;
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
            var left = this.getCellLeft(index);
            var top = 0;
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var row = _a[_i];
                row.splice(index, 0, new Cell(value, { left: left, top: top }));
                top += 30;
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
        Sheet.prototype.getRowLength = function () {
            return this.cells.length;
        };
        Sheet.prototype.getColLength = function () {
            return this.cells[0].length;
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
        Sheet.prototype.getCellLeft = function (index) {
            var left = 0;
            for (var i = 0; i > index; i++) {
                left += this.cells[0][index].getPosition().left;
            }
            return left;
        };
        Sheet.prototype.getCellTop = function (index) {
            var top = 0;
            for (var i = 0; i > index; i++) {
                top += this.cells[index][0].getPosition().top;
            }
            return top;
        };
        Sheet.prototype.getRowHeight = function (index) {
            return this.cells[index][0].getStyle().height;
        };
        Sheet.prototype.getColWidth = function (index) {
            return this.cells[0][index].getStyle().width;
        };
        Sheet.prototype.getCells = function () {
            return this.cells.flat();
        };
        return Sheet;
    }());
    var Cell = (function () {
        function Cell(value, position) {
            this.setValue(value);
            this.setId(id++);
            this.setStyle({
                width: 120,
                height: 30,
            });
            this.setPosition(position);
        }
        Cell.prototype.getPosition = function () {
            return this.position;
        };
        Cell.prototype.setPosition = function (v) {
            this.position = v;
        };
        Cell.prototype.getStyle = function () {
            return this.style;
        };
        Cell.prototype.setStyle = function (v) {
            this.style = v;
        };
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

    exports.Cell = Cell;
    exports.Sheet = Sheet;
    exports.default = Workbook;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
