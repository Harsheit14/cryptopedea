import MobileHome from "@/components/marketing/mobile/home/mobile-home";
import Hero from "@/components/marketing/hero";
import WhatWeOffer from "@/components/marketing/what-we-offer";
import JoinAcademy from "@/components/marketing/join-academy";
import Community from "@/components/marketing/community";

export default function Home() {
  return (
    <>
      <main className="relative hidden md:block">
        <Hero />
        <WhatWeOffer />
        <JoinAcademy />
        <Community />
      </main>
      <div className="md:hidden">
        <MobileHome />
      </div>
    </>
  );
}