interface PageSize {
  width: number;
  height: number;
}

interface PageMargins {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface Pattern {
  boundingBox: [number, number, number, number];
  xStep: number;
  yStep: number;
  pattern: string;
}

interface Permissions {
  printing: "highResolution" | "lowResolution";
  modifying: boolean;
  copying: boolean;
  annotating: boolean;
  fillingForms: boolean;
  contentAccessibility: boolean;
  documentAssembly: boolean;
}

interface Watermark {
  text: string;
  color: string;
  opacity: number;
  bold: boolean;
  italics: boolean;
}

interface TableCell {
  text?: string | Content | (string | Content)[];
  style?: string;
  ul?: string[];
  ol?: string[];
  qr?: string;
  foreground?: string;
  background?: string;
  fit?: string;
  noWrap?: boolean;
  rowSpan?: number;
  colSpan?: number;
}

interface TableColumn {
  text?: string;
  stack?: string[];
  fontSize?: number;
}

type Content = string | TableCell | TableColumn | { [key: string]: any };

export default interface PDFDocument {
  pageSize?: PageSize | string;
  pageOrientation?: string;
  pageMargins?: number | number[] | PageMargins;
  patterns?: { [key: string]: Pattern };
  compress?: boolean;
  userPassword?: string;
  ownerPassword?: string;
  permissions?: Permissions;
  watermark?: string | Watermark;
  content: (string | Content | TableCell | TableColumn)[];
}
