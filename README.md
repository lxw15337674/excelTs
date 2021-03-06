# excel.ts
一个表格基础类，实现excel的基本功能。

预计实现excel.js的大部分功能：
https://github.com/exceljs/exceljs/blob/master/README_zh.md

## 实现API

- excel功能
    - [ ] 导入
    - [ ] 导出

## 表格

### 属性

- id：唯一标识

- name:表格名

### API

- [x] 表格名修改
- [x] 新增工作表
- [x] 删除工作表
- [x] 获取工作表名称列表

## 工作表

### 属性

- id：唯一标识

- name: 工作表名

### API 

- [x] 设置工作表名

- [x] 定位单元格

  通过列位、行位。

- [x] 获取数据单元格

  getDataCells()

- [x] 获取行序号单元格

  getRowCells()

- [x] 获取列序号单元格

  getColCells()

- [x] 获取工作表宽度

  getSheetWidth()

- [x] 获取工作表高度

  getSheetHeight()

- [ ] 获取

- [ ] 增加行

- [ ] 删除行

- [ ] 增加列

- [ ] 删除列

- [ ] 获取列的长度

- [ ] 获取行的长度

- [ ] 复制

- [ ] 粘贴

- [ ] 剪切

- [ ] 清空

- [ ] 插入

- [ ] 删除

- [ ] 撤销

- [ ] 重做（反撤回）   

## 单元格

 属性

- id：唯一标识
- value: 值
- style：宽度、高度
- position：高、左（相对位置）
- index:行位置、列位置。

### API 

- [x] 获取单元格样式（即style、position)
- [ ] 获取单元格行位置
- [ ] 获取单元格列位置



## 基本原理
一个表格有多个sheet，每个sheet是一个二维数组，代表行和列，每个单元格是一个对象。
一个表格为对象、每个sheet是对象、每个单元格也是对象。