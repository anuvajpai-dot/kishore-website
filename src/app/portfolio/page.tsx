import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Kishore's photography portfolio – birthdays, weddings, pregnancy, newborn, family, and portrait sessions.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
