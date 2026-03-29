import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <LandingPage
      heroHeadline={
        <>
          Como ensino respiração pros meus pacientes sem parecer algo superficial?{" "}
          <span className="text-gradient">
            A resposta está no sistema nervoso. E a demonstração é a prova.
          </span>
        </>
      }
      heroSubHeadline="5 dias de Neurociência da Respiração. Baseada em neurociência. Resultado mensurável desde a primeira sessão."
    />
  );
}
