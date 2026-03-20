const CTA_URL = "#"; // TODO: substituir pelo link real do checkout

function CTAButton({ text = "QUERO MEU INGRESSO DUPLO POR R$7" }: { text?: string }) {
  return (
    <a
      href={CTA_URL}
      className="inline-block w-full sm:w-auto text-center px-8 py-4 rounded-2xl font-bold text-white text-lg
        bg-gradient-to-b from-brand-green to-brand-green-light
        shadow-[0_8px_24px_rgba(22,163,74,0.35)]
        hover:shadow-[0_12px_32px_rgba(22,163,74,0.5)] hover:scale-[1.02]
        transition-all duration-200"
    >
      {text}
    </a>
  );
}

function SectionDivider() {
  return <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />;
}

/* ═══════════════════════════════════════════
   SECAO 1 — HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-card/50 text-sm text-brand-muted">
          <span className="w-2 h-2 rounded-full bg-brand-green-light animate-pulse" />
          Desafio 5D — NeuroRespiracao iBreathwork
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Cuide melhor dos seus pacientes.{" "}
          <span className="text-gradient">
            A ciencia comprova o que voce ja sentia.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto">
          5 dias de NeuroRespiracao ao vivo. Baseada em neurociencia.
          Resultado mensuravel desde a primeira sessao.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <CTAButton />
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-brand-muted">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            R$7 — Ingresso Duplo
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            800+ Profissionais
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            96% de Conclusao
          </span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECAO 2 — PROBLEMA
   ═══════════════════════════════════════════ */
function Problema() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center leading-tight">
          Voce e uma profissional dedicada.{" "}
          <span className="text-brand-muted">
            Mas sente que suas ferramentas tem um limite.
          </span>
        </h2>

        <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
          <p>
            Voce estudou anos. Fez cursos. Se especializou. Mas quando aquele
            paciente com ansiedade cronica senta na sua frente... voce sabe que
            algo falta.
          </p>
          <p>
            Nao e falta de dedicacao. Nao e falta de conhecimento. E que a
            maioria das abordagens trata o{" "}
            <span className="text-brand-text font-semibold">SINTOMA</span>. E o
            sistema nervoso — a{" "}
            <span className="text-brand-text font-semibold">RAIZ</span> —
            continua desregulado.
          </p>
          <p className="text-brand-red/80 font-medium">
            Cada dia sem essa ferramenta, seus atendimentos poderiam ser mais
            potentes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECAO 3 — SOLUCAO (3 Passos)
   ═══════════════════════════════════════════ */
function Solucao() {
  const steps = [
    {
      num: "01",
      title: "Entenda a neurociencia",
      days: "Dia 1-2",
      desc: "Como o sistema nervoso autonomo controla ansiedade, trauma e estresse — e como a respiracao regula tudo.",
    },
    {
      num: "02",
      title: "Pratique as tecnicas",
      days: "Dia 3-4",
      desc: "Protocolos nivel 1, 2 e 3 que voce aplica com seus pacientes JA na proxima sessao.",
    },
    {
      num: "03",
      title: "Integre na sua clinica",
      days: "Dia 5",
      desc: "Como tornar isso parte do seu atendimento e criar um diferencial incomparavel.",
    },
  ];

  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            NeuroRespiracao iBreathwork
          </h2>
          <p className="text-xl text-brand-muted">
            Regulacao do Sistema Nervoso em 3 Passos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-6 rounded-2xl border border-brand-border bg-brand-card/50 space-y-4
                hover:border-brand-green/30 transition-colors duration-300"
            >
              <span className="text-5xl font-bold text-brand-green/20">
                {step.num}
              </span>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-brand-text">
                  {step.title}
                </h3>
                <span className="text-sm text-brand-green-light font-medium">
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
   SECAO 4 — PROVA SOCIAL
   ═══════════════════════════════════════════ */
function ProvaSocial() {
  const testimonials = [
    {
      text: "Em 21 dias ja vi diferenca no sono, na ansiedade e no folego.",
      role: "Profissional de saude",
    },
    {
      text: "Nunca vi um curso que entregasse tanto.",
      role: "Terapeuta",
    },
    {
      text: "Fiz minha primeira conducao com Breathwork. Foi INCRIVEL. Choramos juntas.",
      role: "Psicologa",
    },
    {
      text: "Desenvolvi TOC. Nao conseguia trabalhar. Comecei nos protocolos. Hoje meu Bolt Score e de 1 minuto.",
      role: "Aluna",
    },
    {
      text: "Troquei o cigarro pelo Breathwork. 6 meses sem fumar.",
      role: "Aluna",
    },
    {
      text: "Essa e a melhor formacao que eu ja fiz, tanto de conteudo quanto professor.",
      role: "Fisioterapeuta",
    },
  ];

  return (
    <section className="px-4 py-20 bg-brand-darker">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gradient">800+ Profissionais</span> Ja
            Fizeram. 96% Completaram.
          </h2>
          <p className="text-brand-muted text-lg">
            Frases reais — extraidas de 74.494 mensagens nos grupos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-brand-border bg-brand-card/50 space-y-4"
            >
              {/* Stars */}
              <div className="flex gap-1 text-brand-green-light">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-text leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm text-brand-muted">— {t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECAO 5 — SOBRE FELIPE MARX
   ═══════════════════════════════════════════ */
function SobreFelipe() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl border border-brand-border bg-brand-card/30">
          {/* Photo placeholder */}
          <div className="shrink-0 w-48 h-48 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center">
            <div className="text-center text-brand-muted">
              <svg className="w-16 h-16 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs">Foto Felipe Marx</span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Felipe Marx</h2>
            <p className="text-brand-green-light font-medium">
              Professor de Pos-graduacao em Neurociencia da Respiracao
            </p>
            <ul className="space-y-2 text-brand-muted">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-green-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                +11 anos de pratica em Breathwork
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-green-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                +10 anos ensinando profissionais de saude
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-green-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Parceiro da International Breathwork Foundation
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-green-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Certificacoes: Oxygen Advantage, Buteyko, Dan Brule, Soma Breath
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECAO 6 — COMUNIDADE
   ═══════════════════════════════════════════ */
function Comunidade() {
  return (
    <section className="px-4 py-20 bg-brand-darker">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Voce <span className="text-gradient">nao vai fazer isso sozinha.</span>
        </h2>

        <p className="text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
          5.000+ profissionais numa comunidade que celebra cada conquista.
          Quando voce postar seu primeiro Bolt Score, vai ter 15 pessoas te
          aplaudindo.
        </p>

        <blockquote className="p-6 rounded-2xl border border-brand-border bg-brand-card/30 text-brand-text italic text-lg">
          &ldquo;O grupo e o que me mantem no caminho. Sozinha eu ja teria
          desistido.&rdquo;
        </blockquote>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-4">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-gradient">5.000+</div>
            <div className="text-sm text-brand-muted mt-1">Profissionais</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-gradient">96%</div>
            <div className="text-sm text-brand-muted mt-1">Conclusao</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-gradient">21</div>
            <div className="text-sm text-brand-muted mt-1">Edicoes</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECAO 7 — OFFER STACK
   ═══════════════════════════════════════════ */
function OfferStack() {
  const items = [
    { name: "5 Sessoes ao vivo (Neurociencia + Pratica)", value: "R$ 297" },
    { name: "Material de apoio completo", value: "R$ 97" },
    { name: "Ingresso duplo (traga uma colega)", value: "R$ 97" },
  ];

  return (
    <section className="px-4 py-20">
      <div className="max-w-2xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Tudo isso por{" "}
          <span className="text-gradient">R$7</span>
        </h2>

        {/* Stack */}
        <div className="rounded-2xl border border-brand-border bg-brand-card/50 overflow-hidden">
          <div className="p-6 border-b border-brand-border bg-brand-card">
            <h3 className="text-xl font-bold text-center">
              DESAFIO 5D — NEURORESPIRACAO iBREATHWORK
            </h3>
          </div>

          <div className="divide-y divide-brand-border">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="flex items-center gap-2 text-brand-text">
                  <svg className="w-5 h-5 text-brand-green-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  {item.name}
                </span>
                <span className="text-brand-muted line-through text-sm shrink-0 ml-4">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-brand-border space-y-2">
            <div className="flex items-center justify-between text-brand-muted">
              <span>Valor total:</span>
              <span className="line-through">R$ 491</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-brand-green-light">
                Seu investimento hoje:
              </span>
              <span className="text-4xl font-bold text-gradient">R$ 7</span>
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
   SECAO 8 — OBJECOES + CTA FINAL
   ═══════════════════════════════════════════ */
function ObjecoesCTA() {
  const faqs = [
    {
      q: "Parece esoterismo",
      a: "Baseado em neurociencia. Estudado por Harvard e Stanford. Zero misticismo.",
    },
    {
      q: "Ja fiz outros cursos",
      a: "Nao e curso. E desafio pratico — voce aplica no dia seguinte.",
    },
    {
      q: "Nao tenho tempo",
      a: "1h/dia por 5 dias. 19h. Do seu sofa.",
    },
    {
      q: "R$7 e barato, sera que presta?",
      a: "R$7 e o ingresso. O conteudo vale R$491. Assiste o Dia 1 e decide.",
    },
    {
      q: "Funciona pra minha area?",
      a: "Se voce atende pessoas, funciona. Psicologas, fisioterapeutas, medicas, coaches.",
    },
  ];

  return (
    <section className="px-4 py-20 bg-brand-darker">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* FAQ */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-brand-muted">
            Duvidas frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-brand-border bg-brand-card/30"
              >
                <p className="font-semibold text-brand-text mb-2">
                  &ldquo;{faq.q}&rdquo;
                </p>
                <p className="text-brand-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center space-y-8 pt-8">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Seus Atendimentos Mais Potentes{" "}
            <span className="text-gradient">Comecam em 5 Dias</span>
          </h2>

          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Voce pode continuar com as mesmas ferramentas. Ou pode investir R$7,
            dedicar 5 noites, e ter uma tecnica que transforma seus atendimentos
            — e a vida dos seus pacientes.
          </p>

          <p className="text-brand-muted">
            Nao e urgencia falsa. Nao tem ultimas vagas. Tem uma decisao
            simples: testar ou nao.{" "}
            <span className="text-brand-text font-semibold">
              R$7. Risco zero. Resultado no Dia 1.
            </span>
          </p>

          <CTAButton />

          <p className="text-sm text-brand-muted">
            Voce so precisa de fones de ouvido e 1 hora por noite.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Problema />
      <SectionDivider />
      <Solucao />
      <ProvaSocial />
      <SobreFelipe />
      <Comunidade />
      <OfferStack />
      <ObjecoesCTA />

      {/* Footer */}
      <footer className="px-4 py-8 text-center text-sm text-brand-muted border-t border-brand-border">
        <p>HFC — Humanos Fora da Curva | Felipe Marx</p>
      </footer>
    </main>
  );
}
