import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio de 5 Dias de Neurociência da Respiração — iBreathwork",
  description:
    "5 dias de Neurociência da Respiração. Baseada em neurociência. Resultado mensurável desde a primeira sessão. R$7 ingresso duplo.",
  metadataBase: new URL("https://desafio-5d-lp.vercel.app"),
  openGraph: {
    title: "Desafio de 5 Dias de Neurociência da Respiração — iBreathwork",
    description:
      "Cuide melhor dos seus pacientes. A ciência comprova o que você já sentia. 5 dias. R$7.",
    type: "website",
    url: "https://desafio-5d-lp.vercel.app",
    images: [{ url: "/images/evento-1.jpeg", width: 1200, height: 630, alt: "Desafio de 5 Dias de Neurociência da Respiração iBreathwork" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '415485235553341');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=415485235553341&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased font-sans">
        {children}
        <Script id="pagtrust-landing-page" strategy="afterInteractive">{`
          (function(P,l,a,t,f,o,r,m){if(l[t])return;l[t]=1;f=Number(new Date());a=l.getElementsByTagName("body")[0];const s=l.createElement("script");s.src="https://static.pagtrust.com.br/js/landingPage.min.js?=v="+f;s.async=!0;s.defer=!0;s.addEventListener("load",()=>{if(P.landingPage){P.landingPage?.({useF:0,funnelDomain:null})}});a.appendChild(s)})(window,document,null,"landing-page-initialized")
        `}</Script>
      </body>
    </html>
  );
}
