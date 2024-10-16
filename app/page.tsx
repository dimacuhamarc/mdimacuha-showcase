import type { Metadata } from "next";
import { MainProvider } from "@/components/providers/MainProvider";
import { LandingPage } from "@/components/sections/landing";

export const metadata: Metadata = {
  title: "Home | Marc Dimacuha",
  description: "Marc Dimacuha's Software Engineering Portfolio",
};

export default function Home() {
  return (
    <MainProvider>
      <LandingPage />
    </MainProvider>
  );
}
