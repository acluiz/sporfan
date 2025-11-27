import { Header } from "@/components/Header";

import { Hero } from "./sections/Hero";
import { Matches } from "./sections/Matches";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Matches />
    </main>
  );
}
