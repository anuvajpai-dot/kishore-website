import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Book a Session",
  description: "Book a photography session with Kishore. Fill out the inquiry form and we'll get back to you soon.",
};

export default function ContactPage() {
  return <ContactClient />;
}
