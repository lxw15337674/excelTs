# excel.ts
一个表格基础类，实现excel的基本功能。

预计实现excel.js的大部分功能：
https://github.com/exceljs/exceljs/blob/master/README_zh.md

## 实现API

- excel功能
    - [ ] 导入
    - [ ] 导出

## 表格

- [x] 表格名修改
- [x] 新增工作表
- [x] 删除工作表
- [ ] 获取工作表名称列表
- [ ] 

- [ ] 表格右键菜单
    - [ ] 复制
    - [ ] 粘贴
    - [ ] 剪切
    - [ ] 清空
    - [ ] 插入
    - [ ] 删除
    - [ ] 撤销
    - [ ] 重做（反撤回）    

## 基本原理
一个表格有多个sheet，每个sheet是一个二维数组，代表行和列，每个单元格是一个对象。
一个表格为对象、每个sheet是对象、每个单元格也是对象。