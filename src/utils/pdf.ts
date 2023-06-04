import Curriculo from "@/documents/curriculo";
import PDFDocument from "@/types/pdfDocument";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export const generatePdf = async () => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const doc: TDocumentDefinitions = await Curriculo();
  console.log(doc);
  pdfMake.createPdf(doc).download("curriculo-lucas-pereira.pdf");
};
