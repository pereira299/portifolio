import SocialLinks from "@/components/SocialLinks";
import TitleSection from "@/components/TitleSection";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-between gap-x-5 items-center py-14 px-14 bg-gray-900"
    >
      <TitleSection title="Contato" className="mb-24"/>
      <div className="flex flex-row justify-between items-center w-10/12">
        <SocialLinks
          showLabel
          className="flex-col gap-y-5"
          itemClass="flex-row flex gap-x-2 items-center"
        />
        <ContactForm />
      </div>
    </section>
  );
}
