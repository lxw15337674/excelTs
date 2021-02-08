(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
}(this, (function (exports) { 'use strict';

  var addPx = function (num) {
      return num + "px";
  };

  function indexToChar(n) {
      var res = "";
      while (n > 0) {
          var temp = n % 26;
          n = Math.floor(n / 26);
          if (temp == 0) {
              temp = 26;
              n--;
          }
          res = String.fromCharCode(temp + 64) + res;
      }
      return res;
  }

  var id = 1;
  var HeaderHeight = 50;
  var HeaderWidth = 120;
  var defaultHeight = 50;
  var defaultWidth = 120;
  var defaultRowLength = 5000;
  var defaultColLength = 500;
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
          if (rowLength === void 0) { rowLength = defaultRowLength; }
          if (colLength === void 0) { colLength = defaultColLength; }
          this.cells = [];
          this.name = null;
          this.id = null;
          this.setName(name);
          this.setId(id++);
          this.initCells(rowLength, colLength);
      }
      Sheet.prototype.initCells = function (rowLength, colLength) {
          var top = 0;
          for (var row = 0; row < rowLength; row++) {
              var rowCells = [];
              var left = 0;
              for (var col = 0; col < colLength; col++) {
                  rowCells.push(new Cell("\u884C\uFF1A" + row + "\uFF0C\u5217\uFF1A" + col, { top: top, left: left }, { row: row, col: col }));
                  left += defaultWidth;
              }
              this.cells.push(rowCells);
              top += defaultHeight;
          }
      };
      Sheet.prototype.addRow = function (index, value) {
          if (value === void 0) { value = ''; }
          var row = Array(this.cells[0].length).fill(value);
          this.cells.splice(index, 0, row);
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
      Sheet.prototype.getSheetWidth = function () {
          var cells = this.cells[0];
          var cell = cells[cells.length - 1];
          return cell.getPosition().left + cell.getStyle().width;
      };
      Sheet.prototype.getSheetHeight = function () {
          var cells = this.cells[this.cells.length - 1];
          var cell = cells[cells.length - 1];
          return cell.getPosition().top + cell.getStyle().height;
      };
      Sheet.prototype.getCellTop = function (index) {
          var top = 0;
          for (var i = 0; i > index; i++) {
              top += this.cells[index][0].getPosition().top;
          }
          return top;
      };
      Sheet.prototype.getRowHeight = function (index) {
          var _a, _b;
          return (_b = (_a = this.cells) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b[0].getStyle().height;
      };
      Sheet.prototype.getColWidth = function (index) {
          return this.cells[0][index].getStyle().width;
      };
      Sheet.prototype.getDataCells = function () {
          return this.cells;
      };
      Sheet.prototype.findCell = function (row, col) {
          return this.cells[row][col];
      };
      Sheet.prototype.getPlaceholderCell = function () {
          return {
              height: addPx(HeaderHeight),
              width: addPx(HeaderWidth),
          };
      };
      Sheet.prototype.getRowCells = function () {
          var top = HeaderHeight;
          return this.cells.map(function (cell, index) {
              var height = cell[0].getStyle().height;
              var result = {
                  id: id++,
                  index: index,
                  value: (index + 1).toString(),
                  top: top,
                  left: 0,
                  height: addPx(height),
                  width: addPx(HeaderWidth),
              };
              top += height;
              return result;
          });
      };
      Sheet.prototype.getColCells = function () {
          var left = HeaderWidth;
          return this.cells[0].map(function (cell, index) {
              var width = cell.getStyle().width;
              var result = {
                  id: id++,
                  index: index,
                  value: indexToChar(index + 1),
                  top: 0,
                  left: left,
                  height: addPx(HeaderHeight),
                  width: addPx(width),
              };
              left += width;
              return result;
          });
      };
      return Sheet;
  }());
  var Cell = (function () {
      function Cell(value, position, index) {
          this.setValue(value);
          this.setId(id++);
          this.setStyle({
              width: defaultWidth,
              height: defaultHeight,
          });
          this.setPosition(position);
          this.setIndex(index);
      }
      Cell.prototype.getIndex = function () {
          return this.index;
      };
      Cell.prototype.setIndex = function (v) {
          this.index = v;
      };
      Cell.prototype.getPosition = function () {
          return this.position;
      };
      Cell.prototype.setPosition = function (v) {
          this.position = v;
      };
      Cell.prototype.getStyle = function () {
          return this.style;
      };
      Cell.prototype.getCellStyle = function () {
          return {
              left: addPx(this.position.left),
              top: addPx(this.position.top),
              width: addPx(this.style.width),
              height: addPx(this.style.height),
          };
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
