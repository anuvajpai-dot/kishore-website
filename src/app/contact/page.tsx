import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with The Ordinary Photographer via WhatsApp or message. Based in Munich and Regensburg, Germany.",
};

export default function ContactPage() {
  return <ContactClient />;
}
