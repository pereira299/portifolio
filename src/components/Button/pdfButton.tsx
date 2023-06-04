'use client'
import { generatePdf } from "@/utils/pdf"
import Button from "."

export default function PdfButton() {
    return (
        <Button
        text="Baixar curriculo"
        variant="outlined"
        onClick={() => generatePdf()}
        className="w-11/12 lg:w-8/12"
      />
    )
}