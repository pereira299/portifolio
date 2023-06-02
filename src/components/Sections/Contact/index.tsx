import SocialLinks from "@/components/SocialLinks";
import TitleSection from "@/components/TitleSection";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-between gap-x-5 items-center py-14 px-14 bg-gray-900"
    >
      <TitleSection title="Contato" />
      <p className="w-6/12 text-gray-500 mx-auto mb-10">
        Gostou do meu trabalho? Entre em contato comigo através das minhas redes
        sociais ou deixe uma mensagem no formulário abaixo. Será um prazer
        atende-lo!
      </p>
      <div className="flex flex-row justify-between items-center w-10/12">
        <SocialLinks
          showLabel
          className="flex-col gap-y-5"
          itemClass="flex-row flex gap-x-2 items-center"
        />
        <form
          action="/api/contact"
          method="POST"
          className="w-6/12 flex flex-col gap-y-2"
        >
          <input
            type="text"
            required
            placeholder="Nome"
            className="bg-gray-950 px-4 py-2 rounded-lg outline-rhino-700 focus:outline focus:outline-2 placeholder:text-rhino-700 text-white"
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            className="bg-gray-950 px-4 py-2 rounded-lg outline-rhino-700 focus:outline focus:outline-2 placeholder:text-rhino-700 text-white"
          />
          <textarea
            placeholder="Mensagem"
            rows={5}
            required
            className="bg-gray-950 px-4 py-2 rounded-lg outline-rhino-700 focus:outline focus:outline-2 placeholder:text-rhino-700 text-white resize-none"
          />
          <Button text="Enviar" itemType="submit" />
        </form>
      </div>
    </section>
  );
}
