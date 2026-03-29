import Image from "next/image";

function CTAButton({ text = "QUERO MEU INGRESSO DUPLO POR R$7" }: { text?: string }) {
  return (
    <a
      href="javascript:;"
      className="pagtrust-funnel-next-step inline-block w-full sm:w-auto text-center px-8 py-4 rounded-xl font-bold text-white text-lg
        bg-brand-green-dark hover:bg-brand-green
        shadow-lg shadow-brand-green/20
        hover:shadow-xl hover:shadow-brand-green/30 hover:scale-[1.02]
        transition-all duration-200"
    >
      {text}
    </a>
  );
}

/* ═══════════════════════════════════════════
   HERO (parametrizado)
   ═══════════════════════════════════════════ */
function Hero({ headline, subHeadline }: { headline: React.ReactNode; subHeadline: string }) {
  return (
    <section id="hero" className="relative px-4 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        {/* Badge com data */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-bg border border-brand-green/20 text-sm text-brand-green-dark font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
          23 a 27 de março — Neurociência da Respiração iBreathwork
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-brand-text">
          {headline}
        </h1>

        <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto">
          {subHeadline}
        </p>

        <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/evento-2.jpeg"
            alt="Felipe Marx com centenas de profissionais de saúde em evento presencial"
            width={800}
            height={450}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="pt-2">
          <CTAButton />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-brand-muted">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            R$7 — Ingresso Duplo
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            1.387 Profissionais Treinados
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            96% de Conclusão
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <Image src="/images/logo-mec.png" alt="Reconhecido pelo MEC" width={80} height={32} />
          <span className="text-xs text-brand-muted">Pós-graduação reconhecida</span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROBLEMA
   ═══════════════════════════════════════════ */
function Problema() {
  return (
    <section id="problema" className="px-4 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center leading-tight text-brand-text">
          Você é uma profissional dedicada.{" "}
          <span className="text-brand-muted">
            Mas sente que suas ferramentas têm um limite.
          </span>
        </h2>

        <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
          <p>
            Você estudou anos. Fez cursos. Se especializou. Mas quando aquele
            paciente com ansiedade crônica senta na sua frente... você sabe que
            algo falta.
          </p>
          <p>
            Não é falta de dedicação. Não é falta de conhecimento. É que a
            maioria das abordagens trata o{" "}
            <span className="text-brand-text font-semibold">SINTOMA</span>. E o
            sistema nervoso — a{" "}
            <span className="text-brand-text font-semibold">RAIZ</span> —
            continua desregulado.
          </p>
          <p className="p-4 rounded-lg bg-brand-red-bg border border-red-200 text-brand-red font-medium">
            Cada dia sem essa ferramenta, seus atendimentos poderiam ser mais
            potentes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SOLUÇÃO (3 Passos)
   ═══════════════════════════════════════════ */
function Solucao() {
  const steps = [
    {
      num: "01",
      title: "Entenda a neurociência",
      days: "Dia 1-2",
      desc: "Como o sistema nervoso autônomo controla ansiedade, trauma e estresse — e como a respiração regula tudo.",
    },
    {
      num: "02",
      title: "Pratique as técnicas",
      days: "Dia 3-4",
      desc: "Protocolos nível 1, 2 e 3 que você aplica com seus pacientes JÁ na próxima sessão.",
    },
    {
      num: "03",
      title: "Integre na sua clínica",
      days: "Dia 5",
      desc: "Como tornar isso parte do seu atendimento e criar um diferencial incomparável.",
    },
  ];

  return (
    <section id="solucao" className="px-4 py-16 sm:py-20 bg-brand-surface">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
            Neurociência da Respiração iBreathwork
          </h2>
          <p className="text-xl text-brand-muted">
            Regulação do Sistema Nervoso em 3 Passos
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-brand-border shadow-md">
            <Image
              src="/images/sistema-nervoso.webp"
              alt="Infográfico do sistema nervoso parassimpático e simpático"
              width={400}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-6 rounded-2xl border border-brand-border bg-white shadow-sm space-y-4
                hover:border-brand-green/40 hover:shadow-md transition-all duration-300"
            >
              <span className="text-5xl font-bold text-brand-green/15">
                {step.num}
              </span>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-brand-text">
                  {step.title}
                </h3>
                <span className="text-sm text-brand-green font-medium">
                  {step.days}
                </span>
              </div>
              <p className="text-brand-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROVA SOCIAL
   ═══════════════════════════════════════════ */
function ProvaSocial() {
  const screenshots = [
    { src: "/images/depoimento-1.webp", alt: "Depoimento da Roseli sobre a formação iBreathwork" },
    { src: "/images/depoimento-2.webp", alt: "Depoimento de aluna sobre acolhida e resultados nos atendimentos" },
    { src: "/images/depoimento-14.webp", alt: "Depoimentos de Priscila e Valdivino sobre a formação" },
    { src: "/images/depoimento-16.jpg", alt: "Depoimento de Bluna sobre primeira sessão com cliente pagante" },
    { src: "/images/depoimento-17.jpg", alt: "Depoimento de Daniela sobre melhora no sono e ansiedade" },
  ];

  return (
    <section id="depoimentos" className="px-4 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
            <span className="text-gradient">1.387 Profissionais Treinados.</span> 96% Completaram.
          </h2>
          <p className="text-brand-muted text-lg">
            Depoimentos reais — extraídos de 74.494 mensagens nos grupos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {screenshots.map((s, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-brand-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Image src={s.src} alt={s.alt} width={300} height={500} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SOBRE FELIPE MARX
   ═══════════════════════════════════════════ */
function SobreFelipe() {
  return (
    <section id="felipe" className="px-4 py-16 sm:py-20 bg-brand-surface">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl border border-brand-border bg-white shadow-sm">
          <div className="shrink-0 w-56 h-56 rounded-2xl overflow-hidden border border-brand-border shadow-md">
            <Image
              src="/images/diplomata.jpg"
              alt="Felipe Marx recebendo premiação de Diplomata Civil"
              width={224}
              height={224}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">Felipe Marx</h2>
            <p className="text-brand-green font-medium">
              Professor de Pós-graduação em Neurociência da Respiração
            </p>
            <ul className="space-y-2 text-brand-muted">
              {[
                "+11 anos de prática em Breathwork",
                "+10 anos ensinando profissionais de saúde",
                "Certificações: Oxygen Advantage, Buteyko, Dan Brulé, Soma Breath",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pt-2">
              <Image src="/images/logo-mec.png" alt="Pós-graduação reconhecida pelo MEC" width={70} height={28} />
              <span className="text-xs text-brand-muted">Pós-graduação reconhecida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMUNIDADE
   ═══════════════════════════════════════════ */
function Comunidade() {
  return (
    <section id="comunidade" className="relative px-4 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/evento-1.jpeg"
          alt="Felipe Marx com centenas de profissionais em evento"
          fill
          className="object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
          Você <span className="text-gradient">não vai fazer isso sozinha.</span>
        </h2>

        <p className="text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
          5.000+ profissionais numa comunidade que celebra cada conquista.
          Quando você postar seu primeiro Bolt Score, vai ter 15 pessoas te
          aplaudindo.
        </p>

        <blockquote className="p-6 rounded-2xl border border-brand-border bg-white/80 shadow-sm text-brand-text italic text-lg">
          &ldquo;O grupo é o que me mantém no caminho. Sozinha eu já teria
          desistido.&rdquo;
        </blockquote>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
          {[
            { num: "5.000+", label: "Profissionais" },
            { num: "96%", label: "Conclusão" },
            { num: "21", label: "Edições" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-4xl font-bold text-gradient">{s.num}</div>
              <div className="text-xs sm:text-sm text-brand-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   OFFER STACK
   ═══════════════════════════════════════════ */
function OfferStack() {
  const items = [
    { name: "5 Sessões (Neurociência + Prática)", value: "R$ 297" },
    { name: "Material de apoio completo", value: "R$ 97" },
    { name: "Ingresso duplo (traga uma colega)", value: "R$ 97" },
  ];

  return (
    <section id="oferta" className="px-4 py-16 sm:py-20 bg-brand-surface">
      <div className="max-w-2xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-text">
          Tudo isso por{" "}
          <span className="text-gradient">R$7</span>
        </h2>

        <div className="rounded-2xl border-2 border-brand-green/30 bg-white shadow-lg overflow-hidden">
          <div className="p-6 border-b border-brand-border bg-brand-green-bg">
            <h3 className="text-xl font-bold text-center text-brand-green-dark">
              DESAFIO DE 5 DIAS DE NEUROCIÊNCIA DA RESPIRAÇÃO — iBREATHWORK
            </h3>
          </div>

          <div className="divide-y divide-brand-border">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4">
                <span className="flex items-center gap-2 text-brand-text">
                  <svg className="w-5 h-5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item.name}
                </span>
                <span className="text-brand-muted line-through text-sm shrink-0 ml-4">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-brand-border space-y-3">
            <div className="flex items-center justify-between text-brand-muted">
              <span>Valor total:</span>
              <span className="line-through text-lg">R$ 491</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg sm:text-xl font-bold text-brand-green-dark">
                Seu investimento hoje:
              </span>
              <span className="text-5xl font-bold text-brand-green">R$ 7</span>
            </div>
            <div className="pt-4 p-4 rounded-xl bg-brand-green-bg/50 border border-brand-green/10">
              <p className="text-sm text-brand-text leading-relaxed">
                <span className="font-bold">O ingresso é simbólico.</span> O que cobramos de verdade é o seu{" "}
                <span className="font-bold text-brand-green-dark">compromisso</span>: dedicar de 2 a 3 horas por noite
                para participar da sessão. Este é o{" "}
                <span className="font-bold text-brand-green-dark">1º Módulo da nossa Pós-Graduação em Neurociência da Respiração</span> — e o nível de entrega é real.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   OBJEÇÕES + CTA FINAL
   ═══════════════════════════════════════════ */
function ObjecoesCTA() {
  const faqs = [
    { q: "Parece esoterismo", a: "Baseado em neurociência. Estudado por Harvard e Stanford. Zero misticismo." },
    { q: "Já fiz outros cursos", a: "Não é curso. É desafio prático — você aplica no dia seguinte." },
    { q: "Não tenho tempo", a: "3h por dia, por 5 dias. 19h. Do seu sofá." },
    { q: "R$7 é barato, será que presta?", a: "R$7 é o ingresso. O conteúdo vale R$491. Assiste o Dia 1 e decide." },
    { q: "Funciona pra minha área?", a: "Se você atende pessoas, funciona. Psicólogas, fisioterapeutas, médicas, coaches." },
  ];

  return (
    <section id="duvidas" className="px-4 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-brand-muted">
            Dúvidas frequentes
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-5 rounded-xl border border-brand-border bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-brand-text list-none flex items-center justify-between">
                  &ldquo;{faq.q}&rdquo;
                  <svg className="w-5 h-5 text-brand-muted shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-brand-muted mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="text-center space-y-8 p-8 sm:p-12 rounded-2xl bg-brand-green-bg border border-brand-green/20">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-brand-text">
            Seus Atendimentos Mais Potentes{" "}
            <span className="text-gradient">Começam em 5 Dias</span>
          </h2>

          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Você pode continuar com as mesmas ferramentas. Ou pode investir R$7,
            dedicar 5 noites, e ter uma técnica que transforma seus atendimentos
            — e a vida dos seus pacientes.
          </p>

          <p className="text-brand-muted">
            Não é urgência falsa. Não tem últimas vagas. Tem uma decisão
            simples: testar ou não.{" "}
            <span className="text-brand-text font-semibold">
              R$7. Risco zero. Resultado no Dia 1.
            </span>
          </p>

          <CTAButton />

          <p className="text-sm text-brand-muted">
            Você só precisa de fones de ouvido e 3 horas por noite.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   LANDING PAGE COMPONENT
   ═══════════════════════════════════════════ */
interface LandingPageProps {
  heroHeadline: React.ReactNode;
  heroSubHeadline: string;
}

export default function LandingPage({ heroHeadline, heroSubHeadline }: LandingPageProps) {
  return (
    <main>
      <Hero headline={heroHeadline} subHeadline={heroSubHeadline} />
      <Problema />
      <Solucao />
      <ProvaSocial />
      <SobreFelipe />
      <Comunidade />
      <OfferStack />
      <ObjecoesCTA />

      <footer className="px-4 py-8 text-center text-sm text-brand-muted border-t border-brand-border">
        <p>HFC — Humanos Fora da Curva | Felipe Marx</p>
      </footer>
    </main>
  );
}
