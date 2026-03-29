import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Desafio de 5 Dias de Neurociência da Respiração — Adicione uma Ferramenta",
  description:
    "Você não precisa largar nada. Precisa ADICIONAR uma ferramenta que regula o sistema nervoso em minutos. 5 dias de test drive. R$7.",
};

export default function PageA() {
  return (
    <LandingPage
      heroHeadline={
        <>
          Você não precisa largar nada. Precisa{" "}
          <span className="text-gradient">ADICIONAR</span> uma ferramenta que regula o
          sistema nervoso em minutos.
        </>
      }
      heroSubHeadline="5 dias de test drive. R$7."
    />
  );
}
