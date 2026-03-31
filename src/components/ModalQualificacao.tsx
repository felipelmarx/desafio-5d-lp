"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ══════════════════════════════════════════
   CONFIGURAÇÃO
   ══════════════════════════════════════════ */
const AC_CONFIG = {
  qualified: {
    u: 731,
    f: 731,
    or: "ea986f10-558b-4787-b251-0fccf3f367b0",
    endpoint: "https://superboss.activehosted.com/proc.php",
  },
  unqualified: {
    u: 732,
    f: 732,
    or: "c2e2a8b3-545f-4427-be57-79ef339d569c",
    endpoint: "https://superboss.activehosted.com/proc.php",
  },
};

const PAGTRUST_URLS: Record<string, string> = {
  green:
    "https://checkout.pagtrust.com.br/ck517f8818?funnel=fn2b9610af&utm_term=q",
  yellow:
    "https://checkout.pagtrust.com.br/ck01aa49b6?funnel=fn4b1b7547&utm_term=d",
  red: "https://checkout.pagtrust.com.br/ck01aa49b6?funnel=fn4b1b7547&utm_term=d",
};

/* ══════════════════════════════════════════
   PERGUNTAS DO QUIZ
   ══════════════════════════════════════════ */
interface QuestionOption {
  value: number;
  label: string;
}

interface Question {
  title: string;
  name: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    title:
      "1. Como está hoje a sua atuação em saúde, terapias ou bem\u2011estar?",
    name: "q1",
    options: [
      {
        value: 2,
        label:
          "Vivo 100% de atendimentos na área de saúde ou terapias.",
      },
      {
        value: 1,
        label:
          "Trabalho na área, mas ainda não vivo 100% disso.",
      },
      {
        value: 1,
        label:
          "Quero fazer a transição para terapias, mas ainda estou começando.",
      },
      {
        value: 0,
        label:
          "Não pretendo trabalhar atendendo outras pessoas, só uso pessoal.",
      },
    ],
  },
  {
    title:
      "2. Nos últimos 12 meses, como você tem cuidado da sua formação nessa área?",
    name: "q2",
    options: [
      {
        value: 2,
        label:
          "Já participo de formações mais profundas (pós, cursos longos) para aprimorar meu cuidar.",
      },
      {
        value: 2,
        label:
          "Fiz pelo menos um curso pago mais completo e alguns encontros / workshops.",
      },
      {
        value: 1,
        label:
          "Estou começando aos poucos, com formações mais curtas / introdutórias.",
      },
      {
        value: 0,
        label:
          "Tenho acompanhado apenas conteúdos gratuitos, sem algo estruturado ainda.",
      },
    ],
  },
  {
    title:
      "3. Qual é seu maior objetivo com a Neurociência da Respiração nos próximos 12 meses?",
    name: "q3",
    options: [
      {
        value: 2,
        label:
          "Adicionar uma ferramenta neurocientífica para cuidar melhor dos meus pacientes.",
      },
      {
        value: 1,
        label:
          "Começar a atender em grupo com técnicas baseadas em evidências.",
      },
      {
        value: 1,
        label:
          "Usar primeiro no meu próprio processo (ansiedade, sono, presença) e depois, quem sabe, levar para outras pessoas.",
      },
      {
        value: 0,
        label:
          "Ficar apenas no autoconhecimento pessoal, sem planos profissionais.",
      },
    ],
  },
];

/* ══════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════ */
function getUTMParams() {
  if (typeof window === "undefined")
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
    };
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") || "",
    utm_medium: p.get("utm_medium") || "",
    utm_campaign: p.get("utm_campaign") || "",
    utm_term: p.get("utm_term") || "",
    utm_content: p.get("utm_content") || "",
  };
}

function getLeadTier(score: number): "green" | "yellow" | "red" {
  if (score >= 5) return "green";
  if (score >= 3) return "yellow";
  return "red";
}

function maskPhone(value: string): string {
  let v = value.replace(/\D/g, "").slice(0, 11);
  if (v.length > 6) {
    v =
      "(" +
      v.slice(0, 2) +
      ") " +
      v.slice(2, v.length > 10 ? 7 : 6) +
      "-" +
      v.slice(v.length > 10 ? 7 : 6);
  } else if (v.length > 2) {
    v = "(" + v.slice(0, 2) + ") " + v.slice(2);
  } else if (v.length > 0) {
    v = "(" + v;
  }
  return v;
}

interface ACConfig {
  u: number;
  f: number;
  or: string;
  endpoint: string;
}

interface LeadData {
  firstname: string;
  email: string;
  phone: string;
  q1_label: string;
  q2_label: string;
  q3_label: string;
}

async function sendToActiveCampaign(cfg: ACConfig, leadData: LeadData) {
  const utms = getUTMParams();
  const params = new URLSearchParams({
    u: String(cfg.u),
    f: String(cfg.f),
    s: "",
    c: "0",
    m: "0",
    act: "sub",
    v: "2",
    or: cfg.or,
    firstname: leadData.firstname,
    email: leadData.email,
    phone: leadData.phone,
    "field[219]": leadData.q1_label,
    "field[220]": leadData.q2_label,
    "field[221]": leadData.q3_label,
    "field[47]": utms.utm_source,
    "field[48]": utms.utm_campaign,
    "field[49]": utms.utm_medium,
    "field[50]": utms.utm_content,
    "field[51]": utms.utm_term,
    "field[52]": utms.utm_campaign,
  });

  const url = `${cfg.endpoint}?jsonp=true&${params.toString()}`;

  try {
    await fetch(url, { method: "GET", mode: "no-cors" });
  } catch {
    return new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        script.remove();
        resolve();
      };
      script.onerror = () => {
        script.remove();
        resolve();
      };
      document.head.appendChild(script);
    });
  }
}

/* ══════════════════════════════════════════
   ÍCONES SVG (inline — sem dependência externa)
   ══════════════════════════════════════════ */
function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  );
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconSpinner({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ══════════════════════════════════════════
   COMPONENTE PRINCIPAL
   ══════════════════════════════════════════ */
export default function ModalQualificacao() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<
    Record<string, { value: number; label: string }>
  >({});
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultTier, setResultTier] = useState<
    "green" | "yellow" | "red" | null
  >(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Abre modal ao clicar em .abrir-popup-qualificacao
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".abrir-popup-qualificacao")) {
        e.preventDefault();
        setIsOpen(true);
        requestAnimationFrame(() => setIsVisible(true));
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      setStep(1);
      setAnswers({});
      setFirstname("");
      setEmail("");
      setPhone("");
      setShowResult(false);
      setResultTier(null);
    }, 300);
  }, []);

  const handleAnswer = useCallback(
    (qName: string, value: number, label: string) => {
      setAnswers((prev) => ({ ...prev, [qName]: { value, label } }));
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = setTimeout(() => {
        setStep((prev) => Math.min(prev + 1, 4));
      }, 400);
    },
    []
  );

  const isContactValid =
    firstname.trim() !== "" &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()) &&
    phone.replace(/\D/g, "").length >= 8;

  const isNextEnabled =
    step < 4 ? !!answers[QUESTIONS[step - 1]?.name] : isContactValid;

  const finishQualification = async () => {
    const score =
      (answers.q1?.value || 0) +
      (answers.q2?.value || 0) +
      (answers.q3?.value || 0);
    const tier = getLeadTier(score);

    setShowResult(true);
    setResultTier(tier);

    const leadData: LeadData = {
      firstname,
      email,
      phone,
      q1_label: answers.q1?.label || "",
      q2_label: answers.q2?.label || "",
      q3_label: answers.q3?.label || "",
    };

    // Disparo de pixel (Meta)
    try {
      const fbq = (window as unknown as Record<string, unknown>).fbq as
        | ((...args: unknown[]) => void)
        | undefined;
      if (typeof fbq === "function") {
        const evt =
          tier === "green"
            ? "Lead_Qualificado_5_6"
            : tier === "yellow"
              ? "Lead_Qualificado_3_4"
              : "Lead_Nao_Qualificado";
        fbq("trackCustom", evt, { score, tier });
      }
    } catch {
      /* silencioso */
    }

    // Envio para ActiveCampaign
    const acConfig =
      tier === "green" ? AC_CONFIG.qualified : AC_CONFIG.unqualified;
    try {
      await sendToActiveCampaign(acConfig, leadData);
    } catch {
      /* silencioso */
    }

    // Redirect para PagTrust
    setTimeout(() => {
      window.location.href = PAGTRUST_URLS[tier];
    }, 1200);
  };

  const handleNext = () => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    if (step < 4) {
      setStep(step + 1);
    } else {
      finishQualification();
    }
  };

  const handleBack = () => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    if (step > 1) setStep(step - 1);
  };

  if (!isOpen) return null;

  const tierConfig: Record<
    string,
    { bg: string; title: string; desc: string }
  > = {
    green: {
      bg: "bg-[#84D342]",
      title: "Tudo certo!",
      desc: "A preparar a sua aplicação prioritária...",
    },
    yellow: {
      bg: "bg-[#FFC130]",
      title: "Tudo certo!",
      desc: "A direcionar para a próxima etapa...",
    },
    red: {
      bg: "bg-black",
      title: "Tudo certo!",
      desc: "A direcionar para a próxima etapa...",
    },
  };

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className={`bg-white rounded-2xl shadow-floating w-full max-w-lg max-h-[90vh] overflow-y-auto modal-no-scrollbar relative text-left transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {/* Botão Fechar */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 hover:rotate-90 transition-all duration-300 z-10 p-1 bg-transparent border-none cursor-pointer"
        >
          <IconX className="w-5 h-5" />
        </button>

        {!showResult && (
          <>
            {/* Cabeçalho */}
            <div className="px-8 pt-8 pb-4 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1 flex-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ease-out flex-1 ${
                        i <= step ? "bg-black" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-500 ml-2 w-8 text-right">
                  {step}/4
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                Pra te direcionar melhor, responde rapidinho:
              </h2>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <IconClock className="w-4 h-4" />
                Leva só 20 segundos
              </p>
            </div>

            {/* Conteúdo */}
            <div className="px-8 pb-8">
              {/* Passos 1-3: Perguntas */}
              {step <= 3 && (
                <div key={step} className="space-y-4 animate-fade-in-up">
                  <h3 className="font-medium text-base mb-4 text-gray-900">
                    {QUESTIONS[step - 1].title}
                  </h3>
                  <div className="space-y-3">
                    {QUESTIONS[step - 1].options.map((opt, i) => {
                      const qName = QUESTIONS[step - 1].name;
                      const isSelected = answers[qName]?.label === opt.label;
                      return (
                        <label key={i} className="block cursor-pointer group">
                          <input
                            type="radio"
                            name={qName}
                            checked={isSelected}
                            onChange={() =>
                              handleAnswer(qName, opt.value, opt.label)
                            }
                            className="hidden"
                          />
                          <div
                            className={`border rounded-xl p-4 flex gap-3 items-start transition-all duration-200 bg-white relative active:scale-[0.98] ${
                              isSelected
                                ? "border-black bg-gray-50 -translate-y-0.5 shadow-sm"
                                : "border-gray-200 group-hover:border-gray-300 group-hover:-translate-y-0.5 group-hover:shadow-sm"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full border mt-1 relative flex-shrink-0 transition-colors flex items-center justify-center ${
                                isSelected
                                  ? "border-black bg-black"
                                  : "border-gray-300"
                              }`}
                            >
                              {isSelected && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pop-in" />
                              )}
                            </div>
                            <span
                              className={`text-sm transition-colors ${
                                isSelected
                                  ? "text-gray-900"
                                  : "text-gray-500 group-hover:text-gray-900"
                              }`}
                            >
                              {opt.label}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Passo 4: Dados de contato */}
              {step === 4 && (
                <div className="animate-fade-in-up">
                  <p className="text-sm text-gray-500 mb-6">
                    Quase lá! Deixa seus dados para receber o direcionamento
                    certo.
                  </p>
                  <div className="space-y-4">
                    {/* Nome */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                        Nome
                      </label>
                      <div className="relative flex items-center">
                        <IconUser className="absolute left-4 w-[18px] h-[18px] text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Seu primeiro nome"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          className="modal-input"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                        E-mail
                      </label>
                      <div className="relative flex items-center">
                        <IconMail className="absolute left-4 w-[18px] h-[18px] text-gray-400 pointer-events-none" />
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="modal-input"
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                        WhatsApp
                      </label>
                      <div className="relative flex items-center">
                        <IconPhone className="absolute left-4 w-[18px] h-[18px] text-gray-400 pointer-events-none" />
                        <input
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={phone}
                          onChange={(e) => setPhone(maskPhone(e.target.value))}
                          className="modal-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Botões de Navegação */}
              <div className="mt-8 flex gap-3">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="px-5 py-3 rounded-xl text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all active:scale-95 border-none cursor-pointer"
                  >
                    Voltar
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={!isNextEnabled}
                  className="flex-1 bg-black text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 active:scale-95 border-none cursor-pointer"
                >
                  {step === 4 ? (
                    <>
                      Finalizar <IconCheck className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Próxima <IconArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Tela de Resultado */}
        {showResult && resultTier && (
          <div className="text-center py-16 px-8 animate-fade-in-up">
            <div
              className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 text-white shadow-floating animate-pop-in ${tierConfig[resultTier].bg}`}
            >
              <IconCheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-gray-900">
              {tierConfig[resultTier].title}
            </h3>
            <p className="text-gray-500 text-base mb-4">
              {tierConfig[resultTier].desc}
            </p>
            <div className="flex justify-center mt-2 mb-4">
              <IconSpinner className="w-10 h-10 text-black animate-spin" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
