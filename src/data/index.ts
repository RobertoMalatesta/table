import { Cell, CellStyle, Border, Row, Col } from 'table-renderer';
import Cells from './cells';
import { scrollx, scrolly, scrollResetRows, scrollResetCols } from './scroll';

import { isMerged, merge, unmerge, rangeUnoinMerges } from './merge';
import { addStyle, clearStyles } from './style';
import { addBorder, clearBorder, clearBorders } from './border';
import { col, colWidth, colsWidth } from './col';
import { row, rowHeight, rowsHeight } from './row';

export type DataRow = Row;
export type DataRows = {
  len: number;
  [key: number]: DataRow;
};

export type DataCol = Col;
export type DataCols = {
  len: number;
  [key: number]: DataCol;
};

export type DataCell = Cell;
export type DataIndexCell = [number, number, DataCell];

export type TableData = {
  rows: DataRows;
  cols: DataCols;
  rowHeight: number;
  colWidth: number;
  scroll: [number, number, number, number]; // rows, cols, x, y
  style: CellStyle;
  styles?: Partial<CellStyle>[];
  borders?: Border[];
  freeze?: string;
  merges?: string[];
  cells?: DataIndexCell[];
};

export type CellFormulaFunc = (formula: string) => string | number;

export function defaultData(): TableData {
  return {
    rows: {
      len: 100,
    },
    cols: {
      len: 26,
    },
    rowHeight: 25,
    colWidth: 100,
    scroll: [0, 0, 0, 0],
    style: {
      fontName: 'Helvetica',
      fontSize: 10,
      color: '#333',
      bgcolor: '#fff',
      align: 'left',
      valign: 'middle',
      textwrap: false,
      bold: false,
      italic: false,
      underline: false,
      strikethrough: false,
    },
  };
}

export {
  isMerged,
  merge,
  unmerge,
  rangeUnoinMerges,
  addStyle,
  clearStyles,
  addBorder,
  clearBorder,
  clearBorders,
  col,
  colWidth,
  colsWidth,
  row,
  rowHeight,
  rowsHeight,
  scrollx,
  scrolly,
  scrollResetRows,
  scrollResetCols,
  Cells,
};
