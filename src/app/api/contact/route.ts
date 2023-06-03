import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: NextApiResponse) {
  require("dotenv").config();

    
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });

  // get request body
  const data = await req.json();
  const { name, email, message } = data;
  const mailData = {
    from: process.env.EMAIL_ADDRESS,
    to: "lucasper057@gmail.com",
    subject: `Portifolio - Nova mensagem de ${name}`,
    text: message + " | Enviado de: " + email,
    html: `<div>${message}</div><p>Enviado de:
    ${email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  return NextResponse.json({
    message: "Email enviado com sucesso!",
  })
}