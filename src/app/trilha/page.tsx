import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilha do Desafio de 5 Dias — Neuroci\u00eancia da Respira\u00e7\u00e3o | iBreathwork",
  description:
    "O 1\u00ba M\u00f3dulo da P\u00f3s-Gradua\u00e7\u00e3o em Neuroci\u00eancia da Respira\u00e7\u00e3o. 5 dias, 5 sess\u00f5es, do n\u00edvel 1 ao avan\u00e7ado.",
};

const sessions = [
  {
    day: 1,
    date: "06 de abril",
    title: "Neuroci\u00eancia do Breathwork + Pr\u00e1ticas N\u00edvel 1",
    description:
      "Voc\u00ea vai entender o que acontece no seu sistema nervoso quando respira de forma intencional \u2014 e vai praticar os primeiros protocolos para regula\u00e7\u00e3o de estresse e ansiedade. Aqui \u00e9 onde a base cient\u00edfica encontra a aplica\u00e7\u00e3o pr\u00e1tica.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    day: 2,
    date: "07 de abril",
    title: "Breathwork para \u00caxtase + Pr\u00e1ticas N\u00edvel 2",
    description:
      "Protocolos psicod\u00e9licos medicinais que levam o corpo a estados de \u00eaxtase e sensa\u00e7\u00f5es org\u00e1sticas \u2014 sem subst\u00e2ncia nenhuma. Voc\u00ea vai experimentar na pr\u00e1tica e entender a neuroci\u00eancia por tr\u00e1s.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    day: 3,
    date: "08 de abril",
    title: "Breathwork para Traumas e Reprograma\u00e7\u00e3o + Pr\u00e1ticas N\u00edvel 3",
    description:
      "T\u00e9cnicas avan\u00e7adas de processamento de traumas e reprograma\u00e7\u00e3o neurol\u00f3gica profunda. Este \u00e9 o n\u00edvel que separa quem \u201cconhece respira\u00e7\u00e3o\u201d de quem domina Breathwork como ferramenta cl\u00ednica.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    day: 4,
    date: "09 de abril",
    title: "Potencializando Suas Pr\u00e1ticas Terap\u00eauticas",
    description:
      "Como integrar o Breathwork no tratamento de diversas condi\u00e7\u00f5es e situa\u00e7\u00f5es. Se voc\u00ea \u00e9 terapeuta, psic\u00f3logo ou profissional de sa\u00fade, este dia foi feito para a sua realidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
  },
  {
    day: 5,
    date: "10 de abril",
    title: "Como Tornar-se um Instrutor Certificado",
    description:
      "Os pr\u00f3ximos passos para se tornar um instrutor certificado na terapia que mais cresce no mundo. Quem chega at\u00e9 aqui j\u00e1 n\u00e3o \u00e9 mais o mesmo profissional que come\u00e7ou no dia 1.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function TrilhaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-bg/60 to-white" />

        <div className="relative max-w-3xl mx-auto px-5 pt-16 pb-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-brand-green/20 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-medium text-brand-green-dark tracking-wide uppercase">
              1&ordm; M&oacute;dulo da P&oacute;s-Gradua&ccedil;&atilde;o
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text leading-tight mb-6">
            O 1&ordm; M&oacute;dulo da P&oacute;s-Gradua&ccedil;&atilde;o em Neuroci&ecirc;ncia da Respira&ccedil;&atilde;o.{" "}
            <span className="text-gradient">5 Dias.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            De 06 a 10 de abril, voc&ecirc; vai receber o mesmo conte&uacute;do que alunos de p&oacute;s-gradua&ccedil;&atilde;o pagam para acessar
            &mdash; neuroci&ecirc;ncia aplicada, protocolos pr&aacute;ticos e t&eacute;cnicas avan&ccedil;adas de Breathwork. Tudo em 5 sess&otilde;es.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-2xl mx-auto px-5 pb-14">
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8">
          <p className="text-brand-text leading-relaxed text-[15px]">
            A maioria dos profissionais de sa&uacute;de sabe que a respira&ccedil;&atilde;o importa. Poucos sabem{" "}
            <strong>como us&aacute;-la como ferramenta terap&ecirc;utica de verdade</strong> &mdash; com base em neuroci&ecirc;ncia,
            protocolos testados e aplica&ccedil;&atilde;o cl&iacute;nica.
          </p>
          <p className="text-brand-text leading-relaxed text-[15px] mt-4">
            O Desafio de 5 Dias &eacute; o primeiro m&oacute;dulo completo da P&oacute;s-Gradua&ccedil;&atilde;o em Neuroci&ecirc;ncia da Respira&ccedil;&atilde;o. Durante 5
            dias, voc&ecirc; vai sair do <em>&ldquo;eu sei que respira&ccedil;&atilde;o &eacute; importante&rdquo;</em> para{" "}
            <em>&ldquo;eu sei exatamente como aplicar isso nos meus pacientes e na minha pr&aacute;tica&rdquo;</em>.
          </p>
          <p className="text-brand-muted leading-relaxed text-[15px] mt-4">
            N&atilde;o &eacute; palestra. N&atilde;o &eacute; teoria solta. S&atilde;o 5 sess&otilde;es com pr&aacute;ticas reais, do n&iacute;vel 1 ao avan&ccedil;ado,
            incluindo protocolos para estresse, traumas, &ecirc;xtase e aplica&ccedil;&atilde;o terap&ecirc;utica.
          </p>
        </div>
      </section>

      {/* ── COMPROMISSO ── */}
      <section className="max-w-2xl mx-auto px-5 pb-14">
        <div className="bg-white border border-brand-green/20 rounded-2xl p-6 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green-bg border border-brand-green/20 mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-brand-green-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-brand-text mb-3">Prepare-se para Participar</h3>
          <p className="text-brand-text text-[15px] leading-relaxed">
            Cada sess&atilde;o tem <strong>3 horas de conte&uacute;do</strong>. Organize sua agenda para estar presente
            do in&iacute;cio ao fim &mdash; &eacute; assim que voc&ecirc; vai extrair o m&aacute;ximo de cada dia.
          </p>
          <p className="text-brand-muted text-[15px] leading-relaxed mt-4">
            O ingresso &eacute; simb&oacute;lico. <strong className="text-brand-text">Cobramos o compromisso, n&atilde;o o conte&uacute;do.</strong>{" "}
            Quem paga, mesmo que pouco, se compromete a estar presente. E presen&ccedil;a &eacute; o que separa quem
            transforma sua pr&aacute;tica de quem s&oacute; assiste de longe.
          </p>
        </div>
      </section>

      {/* ── CRONOGRAMA ── */}
      <section className="max-w-3xl mx-auto px-5 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
            Sua Trilha de 5 Dias
          </h2>
          <p className="text-brand-muted mt-2 text-sm">Cada sess&atilde;o com 3 horas de conte&uacute;do</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] sm:left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-green via-brand-green/40 to-brand-green hidden sm:block" />

          <div className="space-y-6">
            {sessions.map((s) => (
              <div key={s.day} className="relative flex gap-4 sm:gap-6">
                {/* Day circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-green-bg border border-brand-green/20 flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-semibold text-brand-green-dark leading-none">
                      Dia
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-brand-green-dark leading-none mt-0.5">
                      {s.day}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-brand-border rounded-2xl p-5 sm:p-6 hover:border-brand-green/30 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="text-brand-green mt-0.5">{s.icon}</div>
                    <div>
                      <p className="text-xs text-brand-muted font-medium">{s.date} &mdash; 3h de conte&uacute;do</p>
                      <h3 className="text-base sm:text-lg font-semibold text-brand-text leading-snug">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed ml-10">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PALAVRA-CHAVE ── */}
      <section className="bg-brand-green-bg/50 border-y border-brand-green/10">
        <div className="max-w-2xl mx-auto px-5 py-14 text-center">
          {/* Key icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-brand-green/20 mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-brand-green">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-4">
            O Jogo dos 5 Dias
          </h2>
          <p className="text-lg font-medium text-brand-green-dark mb-2">
            Colete. Desbloqueie. Leve Tudo.
          </p>

          <div className="max-w-lg mx-auto space-y-4 mt-6">
            <p className="text-brand-text text-[15px] leading-relaxed">
              Cada sess&atilde;o esconde uma <strong>palavra-chave secreta</strong>. Ela s&oacute; &eacute; revelada para quem
              participa.
            </p>
            <p className="text-brand-text text-[15px] leading-relaxed">
              Ao final dos 5 dias, quem tiver as 5 palavras-chave desbloqueia o{" "}
              <strong>Resumo Completo</strong> de todo o conte&uacute;do do Desafio &mdash; um material de consulta com tudo
              o que foi ensinado, organizado e pronto para usar.
            </p>
            <p className="text-brand-muted text-sm font-medium mt-4">
              A l&oacute;gica &eacute; simples: quem assiste tudo, leva tudo.
            </p>
          </div>

          {/* 5 keyword slots */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-2 border-dashed border-brand-green/30 bg-white flex items-center justify-center"
              >
                <span className="text-lg font-bold text-brand-green/30">?</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-brand-muted mt-3">5 palavras-chave para desbloquear seu resumo</p>
        </div>
      </section>

      {/* ── FECHAMENTO ── */}
      <section className="max-w-2xl mx-auto px-5 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-4">
          5 Dias. 5 Sess&otilde;es.{" "}
          <span className="text-gradient">Conte&uacute;do de P&oacute;s-Gradua&ccedil;&atilde;o.</span>
        </h2>

        <p className="text-brand-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-3">
          De 06 a 10 de abril, voc&ecirc; vai acessar o primeiro m&oacute;dulo completo da P&oacute;s-Gradua&ccedil;&atilde;o em
          Neuroci&ecirc;ncia da Respira&ccedil;&atilde;o. S&atilde;o 3 horas por dia de conte&uacute;do, do n&iacute;vel 1 ao avan&ccedil;ado.
        </p>
        <p className="text-brand-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
          Profissionais que dominam Breathwork com base cient&iacute;fica n&atilde;o competem com os demais.{" "}
          <strong className="text-brand-text">Eles est&atilde;o em outra categoria.</strong>
        </p>

        {/* Dates reminder */}
        <div className="inline-flex items-center gap-2 bg-brand-green-bg border border-brand-green/20 rounded-full px-5 py-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-brand-green-dark">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <span className="text-sm font-medium text-brand-green-dark">06 a 10 de abril &mdash; 3h por dia</span>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-brand-border py-8 text-center">
        <p className="text-xs text-brand-muted">
          iBreathwork &mdash; Neuroci&ecirc;ncia da Respira&ccedil;&atilde;o
        </p>
      </footer>
    </main>
  );
}
