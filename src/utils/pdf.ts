import Curriculo from "@/documents/curriculo";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export const generatePdf = async () => {
  (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  const doc: TDocumentDefinitions = await Curriculo();
  pdfMake.createPdf(doc).download("curriculo-lucas-pereira.pdf");
};
