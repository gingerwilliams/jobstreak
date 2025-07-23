// Inside App.jsx, update the handleExport function:
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Columns } from "../config"; // Ensure this imports your column definitions

const onExport = async (gridApi) => {
  if (!gridApi) return;

  // Get data from grid
  const rowData = [];
  gridApi.forEachNode((node) => rowData.push(node.data));

  if (!rowData.length) return;

  // Create workbook and worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Saved Jobs");

  // Define header from columns config
  const headers = Columns.map((col) => ({ header: col.headerName, key: col.field }));
  worksheet.columns = headers;

  // Add row data
  rowData.forEach((job) => {
    worksheet.addRow(job);
  });

  // Optional: Auto width
  worksheet.columns.forEach((column) => {
    let maxLength = 10;
    column.eachCell({ includeEmpty: true }, (cell) => {
      const length = cell.value ? cell.value.toString().length : 0;
      if (length > maxLength) maxLength = length;
    });
    column.width = maxLength + 2;
  });

  // Generate and download Excel file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  saveAs(blob, "jobstreak_saved_jobs.xlsx");
};

export default onExport