console.log('hello world');

const XLSX = require("xlsx");
const fs = require('fs');

class CropSheetObject {
    tableName;
    IdColumnName;
    JSONColumnName;
    tableColumnsNameList = [];
    tableRowsObjectList;
    constructor(tableName, tableObject) {
        this.tableName = tableName;
        this.IdColumnName = tableName + 'Id';
        this.JSONColumnName = tableName + 'JSON';
        this.tableRowsObjectList = tableObject;
        const rowObject = tableObject[0];
        for (const Column in rowObject){
            const ColumnName = `${Column}`
            this.tableColumnsNameList.push(ColumnName);
        }
    }
};

let grapevineData = [];
const workbook = XLSX.readFile('SheetFiles/CropGrapevineData.xlsx');
const sheet_name_list = workbook.SheetNames;
for (const workSheet in workbook.Sheets) {
    const tableName = `${workSheet}`
    console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
    let tableObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    const SheetObject = new CropSheetObject(tableName, tableObject);
    grapevineData.push(SheetObject);
}
console.log('grapevineData', grapevineData);
