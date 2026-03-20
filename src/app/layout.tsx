import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio 5D — NeuroRespiracao iBreathwork",
  description:
    "5 dias de NeuroRespiracao ao vivo. Baseada em neurociencia. Resultado mensuravel desde a primeira sessao. R$7 ingresso duplo.",
  openGraph: {
    title: "Desafio 5D — NeuroRespiracao iBreathwork",
    description:
      "Cuide melhor dos seus pacientes. A ciencia comprova o que voce ja sentia. 5 dias. R$7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
