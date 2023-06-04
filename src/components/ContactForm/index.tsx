"use client";
import { useCallback } from "react";
import Button from "../Button";
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
        name,
        email,
        message,
    }
    axios.post("/api/contact", data).then((res) => {
        if (res.data.error) {
            console.log(res.data.error);
            alert("Ocorreu um erro ao enviar a mensagem, tente novamente.");
            return;
        }
        alert("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
    }).catch((e) => {
        console.log(e);
        alert("Ocorreu um erro ao enviar a mensagem, tente novamente.");
    });
    
    
  }, []);
  return (
    <form onSubmit={submitHandler} className="w-11/12 lg:w-6/12 flex flex-col gap-y-2">
      <input
        type="text"
        required
        placeholder="Nome"
        name="name"
        className="bg-gray-800/70 px-4 py-2 text-xl lg:text-md rounded-lg outline-rhino-600 focus:outline focus:outline-2 placeholder:text-rhino-600 text-white"
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        name="email"
        className="bg-gray-800/70 px-4 py-2 text-xl lg:text-md rounded-lg outline-rhino-600 focus:outline focus:outline-2 placeholder:text-rhino-600 text-white"
      />
      <textarea
        placeholder="Mensagem"
        rows={5}
        required
        name="message"
        className="bg-gray-800/70 px-4 py-2 text-xl lg:text-md rounded-lg outline-rhino-600 focus:outline focus:outline-2 placeholder:text-rhino-600 text-white resize-none"
      />
      <Button text="Enviar" itemType="submit" />
    </form>
  );
}
