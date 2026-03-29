import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Desafio de 5 Dias de Neurociência da Respiração — O Que Você Fez Comigo?",
  description:
    "Uma psicóloga aplicou no primeiro dia. A paciente com 8 anos de ansiedade olhou pra ela e disse: 'o que você fez comigo?' R$7 ingresso duplo.",
};

export default function PageB() {
  return (
    <LandingPage
      heroHeadline={
        <>
          Uma psicóloga aplicou no primeiro dia. A paciente com 8 anos de ansiedade
          olhou pra ela e disse:{" "}
          <span className="text-gradient">
            &ldquo;o que você fez comigo?&rdquo;
          </span>
        </>
      }
      heroSubHeadline="5 dias de Neurociência da Respiração. R$7 ingresso duplo."
    />
  );
}
