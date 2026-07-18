/**
 * Translation dictionary for the ProtoLayer site and the Choke landing page.
 * Three locales: English (default/fallback), Spanish, Brazilian Portuguese.
 *
 * Values are plain strings; some are trusted static HTML fragments (rendered
 * with set:html at the call site) — there is no user input involved.
 */

export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;
export const langCodes = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

export function isLang(value: string): value is Lang {
  return value in languages;
}

const en = {
  site: {
    nav: { about: `About`, projects: `Projects`, legal: `Legal`, contact: `Contact` },
    theme: { dark: `dark`, light: `light` },
    hero: {
      eyebrow: `Open source · Distributed systems · Estonia`,
      titleHtml: `Modular <span class="accent">digital</span><br>infrastructure.`,
      subcopy: `We design and operate the technical layers that enable resilient, interoperable, and scalable digital systems.`,
      explore: `Explore projects`,
      learn: `Learn more`,
    },
    principles: [
      { title: `Modular`, copy: `Every piece is self-contained and composable. Nothing is monolithic.` },
      { title: `Open`, copy: `Verifiable code and protocols. Transparency is infrastructure.` },
      { title: `Resilient`, copy: `Built to survive failure, scale, and time.` },
      { title: `Foundational`, copy: `We build base layers, not surface applications.` },
    ],
    about: {
      label: `About`,
      title: `A technology company building the layers others build on`,
      copy: `ProtoLayer OÜ is a technology company registered in Estonia, dedicated to the development and support of open-source software and modular digital infrastructure. Our focus is modular architecture, distributed systems, and protocol experimentation for emerging digital ecosystems.`,
    },
    projects: {
      title: `Projects we support`,
      tag: `Open source`,
      chokeDesc: `Open-source, real-time BJJ match scoring app. Run the table from your phone and stream the scoreboard live to spectators — no accounts needed.`,
      soon: `More projects\ncoming soon`,
    },
    contact: {
      title: `Let's build a layer together`,
      subtitle: `For inquiries, partnerships, and open-source collaboration.`,
    },
    footer: { tagline: `Building modular digital infrastructure.`, reg: `Reg. no.` },
    // Strings unique to the "terminal-editorial" design variant.
    te: {
      heroEyebrow: `Estonia · Est. 2026`,
      heroTitleHtml: `Building modular<br><span class="accent">digital infrastructure</span>`,
      principlesLabel: `Principles`,
      aboutLabel: `01 — About`,
      aboutTitle: `A technology company, not a product shop`,
      aboutTags: [`◇ Distributed systems`, `◇ Open protocols`, `◇ Resilient infra`],
      projectsTag: `02 — Open source`,
      chokeDesc: `Open-source, real-time BJJ match scoring app with live public scoreboards.`,
    },
    meta: {
      title: `ProtoLayer OÜ — Building modular digital infrastructure`,
      desc: `Estonian technology company focused on open-source software, digital infrastructure, and modular technical systems.`,
    },
  },
  choke: {
    nav: {
      features: `Features`,
      how: `How it works`,
      live: `Live results`,
      screens: `Screens`,
      faq: `FAQ`,
      getApp: `Get the app`,
    },
    getItOn: `GET IT ON`,
    hero: {
      badge: `Real-time BJJ scoring`,
      titleHtml: `Score the match.<br><span class="accent">Everyone watches</span><br>it live.`,
      lead: `Choke is the fastest way to run and score Brazilian Jiu-Jitsu matches from your phone. Tap points as they happen — the scoreboard streams instantly to spectators, coaches and the projector.`,
      watch: `Watch a live board`,
      check1: `Free & open source`,
      check2: `No account needed`,
      check3: `Public live results`,
    },
    features: {
      kicker: `// Everything the table needs`,
      title: `Run the scoring table from one phone.`,
      sub: `Purpose-built for gym smokers, in-house tournaments and open mats where a full timing rig is overkill.`,
      cards: [
        { title: `Instant real-time scoring`, desc: `Big thumb-friendly buttons for takedowns, sweeps, passes, mounts, advantages and penalties. Every tap updates the board immediately.` },
        { title: `Countdown timer`, desc: `Set the round length once, then run every match with a clean second-by-second countdown, pause and finish controls.` },
        { title: `Public live results`, desc: `Scores publish straight to <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> — spectators and remote coaches follow along with zero setup.` },
        { title: `No accounts, ever`, desc: `Open the app and start scoring. Your identity is a secure key generated on your device — no sign-up, no email, no password.` },
        { title: `Team scoring, safely`, desc: `Hand a match to a helper with a one-off match key — they score on their phone without ever touching your private key.` },
        { title: `Submission tracking`, desc: `Finish a match by submission and log the technique — armbar, RNC, triangle and more — for a complete record of the bout.` },
      ],
    },
    how: {
      kicker: `// From bracket to broadcast in 4 steps`,
      title: `Set up faster than the fighters warm up.`,
      steps: [
        { title: `Connect your account`, desc: `Before you create any matches, open <b>Account</b> in the menu, copy your public key (npub) and add it on <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. From then on, everything you publish from Choke shows live on the scoreboard.` },
        { title: `Create the match`, desc: `Enter both competitors and the round duration. A match gets a short shareable ID like <span class="match-id">#3b3f</span>.` },
        { title: `Score it live`, desc: `Start the clock and tap points as the action unfolds. Undo mistakes, add advantages and penalties, finish by submission.` },
        { title: `Share the board`, desc: `The scoreboard is already live on <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. Send the link or your public key and anyone can follow the results.` },
      ],
    },
    showcase: {
      kicker: `// The scoring screen`,
      title: `Built for the pace of a real match.`,
      lead: `Competitor scores are huge and colour-coded so the whole room can read them across the mat. Points, advantages and penalties each have a dedicated button — no menus, no fumbling.`,
      p1: `Takedown / Sweep`,
      p2: `Guard pass`,
      p3: `Mount / Back take`,
      p4: `Advantages & penalties`,
    },
    live: {
      badge: `Live at bjjscore.live`,
      title: `Your matches, on the big screen.`,
      leadHtml: `Every match you score publishes to <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> in real time — perfect for projecting on a venue screen or sharing with people who can't be there.`,
      howtoTitle: `How people find your matches`,
      step1Html: `Open the <b>Account</b> tab and copy your public key (npub).`,
      step2Html: `Share it — or open <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> and paste it in.`,
      step3: `Every match you run shows up there automatically.`,
      inProgress: `IN PROGRESS`,
      updating: `updating live`,
    },
    screens: {
      kicker: `// A closer look`,
      title: `Clean, fast, and made for the mat.`,
      cap1: `Match dashboard`,
      cap2: `Match settings`,
      cap3: `Your key & identity`,
      cap4: `Ready for the next one`,
      wide1: `Finish a match`,
      wide2: `Technique picker`,
    },
    faq: {
      kicker: `// Good to know`,
      title: `Frequently asked`,
      items: [
        { q: `Is Choke free?`, a: `Yes. Choke is completely free and open source under the GPL-3.0 license. There's no paid tier, no ads and no account.` },
        { q: `How do spectators watch the results?`, a: `Every match you score is published live to <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. Share the public key (npub) from your Account tab, and anyone can follow your matches there — great for projecting at a venue.` },
        { q: `Do I need to create an account?`, a: `No. When you install the app a secure keypair is generated on your device. That key is your identity — back it up and keep the private part (nsec) secret.` },
        { q: `Can a helper score matches for me?`, a: `Yes. You can delegate a single match to a teammate using an ephemeral match key, so multiple people can run the scoring table without ever sharing your private key.` },
        { q: `Which platforms are supported?`, a: `Choke is available for Android on Google Play, with iOS in the works. It's built with Flutter, so the same experience runs everywhere.` },
      ],
    },
    cta: {
      title: `Ready to run your next event?`,
      subtitle: `Download Choke, create a match, and put the scoreboard where everyone can see it.`,
    },
    footer: {
      descHtml: `A modern, decentralized BJJ match scoring app. Built by <a class="inline-link" href="https://protolayer.io" target="_blank" rel="noopener">ProtoLayer.io</a>`,
      product: `Product`,
      project: `Project`,
      features: `Features`,
      how: `How it works`,
      live: `Live results`,
      getPlay: `Get on Google Play`,
      privacy: `Privacy`,
      license: `License · GPL-3.0`,
    },
    meta: {
      title: `Choke — Real-time BJJ match scoring`,
      desc: `Choke is the fastest way to run and score Brazilian Jiu-Jitsu matches from your phone. Tap points as they happen — the scoreboard streams instantly to spectators, coaches and the projector.`,
    },
  },
};

const es: typeof en = {
  site: {
    nav: { about: `Nosotros`, projects: `Proyectos`, legal: `Legal`, contact: `Contacto` },
    theme: { dark: `oscuro`, light: `claro` },
    hero: {
      eyebrow: `Código abierto · Sistemas distribuidos · Estonia`,
      titleHtml: `Infraestructura <span class="accent">digital</span><br>modular.`,
      subcopy: `Diseñamos y operamos las capas técnicas que hacen posibles sistemas digitales resilientes, interoperables y escalables.`,
      explore: `Ver proyectos`,
      learn: `Saber más`,
    },
    principles: [
      { title: `Modular`, copy: `Cada pieza es autónoma y componible. Nada es monolítico.` },
      { title: `Abierto`, copy: `Código y protocolos verificables. La transparencia es infraestructura.` },
      { title: `Resiliente`, copy: `Construido para resistir fallos, escala y tiempo.` },
      { title: `Fundacional`, copy: `Construimos capas base, no aplicaciones de superficie.` },
    ],
    about: {
      label: `Nosotros`,
      title: `Una empresa de tecnología que construye las capas sobre las que otros construyen`,
      copy: `ProtoLayer OÜ es una empresa de tecnología registrada en Estonia, dedicada al desarrollo y soporte de software de código abierto e infraestructura digital modular. Nos enfocamos en la arquitectura modular, los sistemas distribuidos y la experimentación con protocolos para ecosistemas digitales emergentes.`,
    },
    projects: {
      title: `Proyectos que apoyamos`,
      tag: `Código abierto`,
      chokeDesc: `App de código abierto para puntuar combates de BJJ en tiempo real. Maneja la mesa desde tu teléfono y transmite el marcador en vivo a los espectadores — sin cuentas.`,
      soon: `Más proyectos\npróximamente`,
    },
    contact: {
      title: `Construyamos una capa juntos`,
      subtitle: `Para consultas, alianzas y colaboración en código abierto.`,
    },
    footer: { tagline: `Construyendo infraestructura digital modular.`, reg: `Reg. núm.` },
    te: {
      heroEyebrow: `Estonia · Est. 2026`,
      heroTitleHtml: `Construyendo infraestructura<br><span class="accent">digital modular</span>`,
      principlesLabel: `Principios`,
      aboutLabel: `01 — Nosotros`,
      aboutTitle: `Una empresa de tecnología, no una fábrica de productos`,
      aboutTags: [`◇ Sistemas distribuidos`, `◇ Protocolos abiertos`, `◇ Infra resiliente`],
      projectsTag: `02 — Código abierto`,
      chokeDesc: `App de código abierto para puntuar combates de BJJ en tiempo real con marcadores públicos en vivo.`,
    },
    meta: {
      title: `ProtoLayer OÜ — Construyendo infraestructura digital modular`,
      desc: `Empresa de tecnología estonia enfocada en software de código abierto, infraestructura digital y sistemas técnicos modulares.`,
    },
  },
  choke: {
    nav: {
      features: `Funciones`,
      how: `Cómo funciona`,
      live: `Resultados en vivo`,
      screens: `Pantallas`,
      faq: `FAQ`,
      getApp: `Descargar app`,
    },
    getItOn: `DISPONIBLE EN`,
    hero: {
      badge: `Puntuación de BJJ en tiempo real`,
      titleHtml: `Puntúa el combate.<br><span class="accent">Todos lo ven</span><br>en vivo.`,
      lead: `Choke es la forma más rápida de dirigir y puntuar combates de Jiu-Jitsu brasileño desde tu teléfono. Marca los puntos al instante — el marcador se transmite en directo a espectadores, entrenadores y al proyector.`,
      watch: `Ver un marcador en vivo`,
      check1: `Gratis y de código abierto`,
      check2: `Sin necesidad de cuenta`,
      check3: `Resultados públicos en vivo`,
    },
    features: {
      kicker: `// Todo lo que la mesa necesita`,
      title: `Dirige la mesa de puntuación desde un solo teléfono.`,
      sub: `Hecho a medida para smokers de gimnasio, torneos internos y open mats donde un sistema de cronometraje completo es excesivo.`,
      cards: [
        { title: `Puntuación instantánea en tiempo real`, desc: `Botones grandes y cómodos para derribos, raspadas, pases, montadas, ventajas y penalizaciones. Cada toque actualiza el marcador al instante.` },
        { title: `Temporizador de cuenta regresiva`, desc: `Configura la duración del round una vez y dirige cada combate con una cuenta regresiva segundo a segundo, con controles de pausa y fin.` },
        { title: `Resultados públicos en vivo`, desc: `Los resultados se publican directamente en <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> — espectadores y entrenadores a distancia siguen todo sin ninguna configuración.` },
        { title: `Sin cuentas`, desc: `Abre la app y empieza a puntuar. Tu identidad es una clave segura generada en tu dispositivo — sin registro, sin correo, sin contraseña.` },
        { title: `Puntuación en equipo, con seguridad`, desc: `Delega un combate a un ayudante con una clave de combate de un solo uso — puntúa desde su teléfono sin tocar nunca tu clave privada.` },
        { title: `Registro de sumisiones`, desc: `Termina un combate por sumisión y registra la técnica — armbar, mata león, triángulo y más — para un historial completo del combate.` },
      ],
    },
    how: {
      kicker: `// De la llave a la transmisión en 4 pasos`,
      title: `Prepáralo más rápido de lo que los luchadores calientan.`,
      steps: [
        { title: `Conecta tu cuenta`, desc: `Antes de crear combates, ve a <b>Cuenta</b> en el menú, copia tu clave pública (npub) y cárgala en <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. Así, todo lo que publiques desde Choke se mostrará en tiempo real en el marcador.` },
        { title: `Crea el combate`, desc: `Ingresa a los dos competidores y la duración del round. El combate recibe un ID corto y compartible como <span class="match-id">#3b3f</span>.` },
        { title: `Puntúa en vivo`, desc: `Inicia el reloj y marca los puntos según ocurre la acción. Deshaz errores, añade ventajas y penalizaciones, termina por sumisión.` },
        { title: `Comparte el marcador`, desc: `El marcador ya está en vivo en <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. Envía el enlace o tu clave pública y cualquiera puede seguir los resultados.` },
      ],
    },
    showcase: {
      kicker: `// La pantalla de puntuación`,
      title: `Diseñada para el ritmo de un combate real.`,
      lead: `Las puntuaciones de cada competidor son enormes y con código de color para que toda la sala las lea desde el otro lado del tatami. Puntos, ventajas y penalizaciones tienen su propio botón — sin menús, sin enredos.`,
      p1: `Derribo / Raspada`,
      p2: `Pase de guardia`,
      p3: `Montada / Toma de espalda`,
      p4: `Ventajas y penalizaciones`,
    },
    live: {
      badge: `En vivo en bjjscore.live`,
      title: `Tus combates, en la pantalla grande.`,
      leadHtml: `Cada combate que puntúas se publica en <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> en tiempo real — perfecto para proyectar en la pantalla del recinto o compartir con quienes no pueden estar.`,
      howtoTitle: `Cómo la gente encuentra tus combates`,
      step1Html: `Abre la pestaña <b>Cuenta</b> y copia tu clave pública (npub).`,
      step2Html: `Compártela — o abre <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> y pégala ahí.`,
      step3: `Cada combate que dirijas aparece ahí automáticamente.`,
      inProgress: `EN CURSO`,
      updating: `actualizando en vivo`,
    },
    screens: {
      kicker: `// Una mirada de cerca`,
      title: `Limpia, rápida y hecha para el tatami.`,
      cap1: `Panel de combates`,
      cap2: `Ajustes del combate`,
      cap3: `Tu clave e identidad`,
      cap4: `Listo para el siguiente`,
      wide1: `Terminar un combate`,
      wide2: `Selector de técnica`,
    },
    faq: {
      kicker: `// Bueno saberlo`,
      title: `Preguntas frecuentes`,
      items: [
        { q: `¿Choke es gratis?`, a: `Sí. Choke es completamente gratis y de código abierto bajo la licencia GPL-3.0. No hay plan de pago, ni anuncios, ni cuentas.` },
        { q: `¿Cómo ven los espectadores los resultados?`, a: `Cada combate que puntúas se publica en vivo en <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. Comparte la clave pública (npub) de tu pestaña Cuenta y cualquiera puede seguir tus combates ahí — ideal para proyectar en un recinto.` },
        { q: `¿Necesito crear una cuenta?`, a: `No. Al instalar la app se genera un par de claves seguro en tu dispositivo. Esa clave es tu identidad — haz una copia de seguridad y mantén en secreto la parte privada (nsec).` },
        { q: `¿Puede un ayudante puntuar combates por mí?`, a: `Sí. Puedes delegar un solo combate a un compañero mediante una clave de combate efímera, para que varias personas dirijan la mesa sin compartir nunca tu clave privada.` },
        { q: `¿Qué plataformas son compatibles?`, a: `Choke está disponible para Android en Google Play, con iOS en camino. Está hecho con Flutter, así que la misma experiencia funciona en todas partes.` },
      ],
    },
    cta: {
      title: `¿Listo para dirigir tu próximo evento?`,
      subtitle: `Descarga Choke, crea un combate y pon el marcador donde todos puedan verlo.`,
    },
    footer: {
      descHtml: `Una app moderna y descentralizada para puntuar combates de BJJ. Hecha por <a class="inline-link" href="https://protolayer.io" target="_blank" rel="noopener">ProtoLayer.io</a>`,
      product: `Producto`,
      project: `Proyecto`,
      features: `Funciones`,
      how: `Cómo funciona`,
      live: `Resultados en vivo`,
      getPlay: `Descargar en Google Play`,
      privacy: `Privacidad`,
      license: `Licencia · GPL-3.0`,
    },
    meta: {
      title: `Choke — Puntuación de combates de BJJ en tiempo real`,
      desc: `Choke es la forma más rápida de dirigir y puntuar combates de Jiu-Jitsu brasileño desde tu teléfono. Marca los puntos al instante — el marcador se transmite en directo a espectadores, entrenadores y al proyector.`,
    },
  },
};

const pt: typeof en = {
  site: {
    nav: { about: `Sobre`, projects: `Projetos`, legal: `Jurídico`, contact: `Contato` },
    theme: { dark: `escuro`, light: `claro` },
    hero: {
      eyebrow: `Código aberto · Sistemas distribuídos · Estônia`,
      titleHtml: `Infraestrutura <span class="accent">digital</span><br>modular.`,
      subcopy: `Projetamos e operamos as camadas técnicas que possibilitam sistemas digitais resilientes, interoperáveis e escaláveis.`,
      explore: `Ver projetos`,
      learn: `Saiba mais`,
    },
    principles: [
      { title: `Modular`, copy: `Cada peça é autônoma e combinável. Nada é monolítico.` },
      { title: `Aberto`, copy: `Código e protocolos verificáveis. A transparência é infraestrutura.` },
      { title: `Resiliente`, copy: `Feito para resistir a falhas, escala e tempo.` },
      { title: `Fundacional`, copy: `Construímos camadas base, não aplicações de superfície.` },
    ],
    about: {
      label: `Sobre`,
      title: `Uma empresa de tecnologia que constrói as camadas sobre as quais outros constroem`,
      copy: `A ProtoLayer OÜ é uma empresa de tecnologia registrada na Estônia, dedicada ao desenvolvimento e suporte de software de código aberto e infraestrutura digital modular. Nosso foco é a arquitetura modular, os sistemas distribuídos e a experimentação com protocolos para ecossistemas digitais emergentes.`,
    },
    projects: {
      title: `Projetos que apoiamos`,
      tag: `Código aberto`,
      chokeDesc: `App de código aberto para pontuar lutas de BJJ em tempo real. Comande a mesa pelo seu celular e transmita o placar ao vivo para os espectadores — sem contas.`,
      soon: `Mais projetos\nem breve`,
    },
    contact: {
      title: `Vamos construir uma camada juntos`,
      subtitle: `Para consultas, parcerias e colaboração em código aberto.`,
    },
    footer: { tagline: `Construindo infraestrutura digital modular.`, reg: `Reg. nº` },
    te: {
      heroEyebrow: `Estônia · Est. 2026`,
      heroTitleHtml: `Construindo infraestrutura<br><span class="accent">digital modular</span>`,
      principlesLabel: `Princípios`,
      aboutLabel: `01 — Sobre`,
      aboutTitle: `Uma empresa de tecnologia, não uma fábrica de produtos`,
      aboutTags: [`◇ Sistemas distribuídos`, `◇ Protocolos abertos`, `◇ Infra resiliente`],
      projectsTag: `02 — Código aberto`,
      chokeDesc: `App de código aberto para pontuar lutas de BJJ em tempo real com placares públicos ao vivo.`,
    },
    meta: {
      title: `ProtoLayer OÜ — Construindo infraestrutura digital modular`,
      desc: `Empresa de tecnologia estoniana focada em software de código aberto, infraestrutura digital e sistemas técnicos modulares.`,
    },
  },
  choke: {
    nav: {
      features: `Recursos`,
      how: `Como funciona`,
      live: `Resultados ao vivo`,
      screens: `Telas`,
      faq: `FAQ`,
      getApp: `Baixar o app`,
    },
    getItOn: `DISPONÍVEL NO`,
    hero: {
      badge: `Pontuação de BJJ em tempo real`,
      titleHtml: `Pontue a luta.<br><span class="accent">Todos assistem</span><br>ao vivo.`,
      lead: `O Choke é a forma mais rápida de conduzir e pontuar lutas de Jiu-Jítsu brasileiro pelo seu celular. Marque os pontos na hora — o placar é transmitido ao vivo para espectadores, treinadores e o projetor.`,
      watch: `Ver um placar ao vivo`,
      check1: `Grátis e de código aberto`,
      check2: `Sem necessidade de conta`,
      check3: `Resultados públicos ao vivo`,
    },
    features: {
      kicker: `// Tudo o que a mesa precisa`,
      title: `Comande a mesa de pontuação com um só celular.`,
      sub: `Feito sob medida para smokers de academia, torneios internos e open mats onde um sistema de cronometragem completo é exagero.`,
      cards: [
        { title: `Pontuação instantânea em tempo real`, desc: `Botões grandes e fáceis de tocar para quedas, raspagens, passagens, montadas, vantagens e punições. Cada toque atualiza o placar na hora.` },
        { title: `Cronômetro regressivo`, desc: `Defina a duração do round uma vez e conduza cada luta com uma contagem regressiva segundo a segundo, com controles de pausa e fim.` },
        { title: `Resultados públicos ao vivo`, desc: `Os placares são publicados direto no <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> — espectadores e treinadores à distância acompanham sem nenhuma configuração.` },
        { title: `Sem contas, nunca`, desc: `Abra o app e comece a pontuar. Sua identidade é uma chave segura gerada no seu dispositivo — sem cadastro, sem e-mail, sem senha.` },
        { title: `Pontuação em equipe, com segurança`, desc: `Delegue uma luta a um ajudante com uma chave de luta de uso único — ele pontua pelo celular dele sem nunca tocar na sua chave privada.` },
        { title: `Registro de finalizações`, desc: `Termine uma luta por finalização e registre a técnica — armbar, mata-leão, triângulo e mais — para um histórico completo da luta.` },
      ],
    },
    how: {
      kicker: `// Da chave à transmissão em 4 passos`,
      title: `Configure mais rápido do que os lutadores aquecem.`,
      steps: [
        { title: `Conecte sua conta`, desc: `Antes de criar lutas, abra <b>Conta</b> no menu, copie sua chave pública (npub) e carregue no <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. A partir daí, tudo o que você publicar pelo Choke aparece em tempo real no placar.` },
        { title: `Crie a luta`, desc: `Insira os dois competidores e a duração do round. A luta recebe um ID curto e compartilhável como <span class="match-id">#3b3f</span>.` },
        { title: `Pontue ao vivo`, desc: `Inicie o relógio e marque os pontos conforme a ação acontece. Desfaça erros, adicione vantagens e punições, termine por finalização.` },
        { title: `Compartilhe o placar`, desc: `O placar já está ao vivo no <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. Envie o link ou a sua chave pública e qualquer um pode acompanhar os resultados.` },
      ],
    },
    showcase: {
      kicker: `// A tela de pontuação`,
      title: `Feita para o ritmo de uma luta real.`,
      lead: `As pontuações de cada competidor são enormes e com código de cores para que toda a sala leia do outro lado do tatame. Pontos, vantagens e punições têm um botão dedicado — sem menus, sem confusão.`,
      p1: `Queda / Raspagem`,
      p2: `Passagem de guarda`,
      p3: `Montada / Pegada de costas`,
      p4: `Vantagens e punições`,
    },
    live: {
      badge: `Ao vivo no bjjscore.live`,
      title: `Suas lutas, na tela grande.`,
      leadHtml: `Cada luta que você pontua é publicada no <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> em tempo real — perfeito para projetar na tela do local ou compartilhar com quem não pode estar presente.`,
      howtoTitle: `Como as pessoas encontram suas lutas`,
      step1Html: `Abra a aba <b>Conta</b> e copie sua chave pública (npub).`,
      step2Html: `Compartilhe — ou abra <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a> e cole lá.`,
      step3: `Cada luta que você conduzir aparece lá automaticamente.`,
      inProgress: `EM ANDAMENTO`,
      updating: `atualizando ao vivo`,
    },
    screens: {
      kicker: `// Um olhar de perto`,
      title: `Limpa, rápida e feita para o tatame.`,
      cap1: `Painel de lutas`,
      cap2: `Configurações da luta`,
      cap3: `Sua chave e identidade`,
      cap4: `Pronto para a próxima`,
      wide1: `Terminar uma luta`,
      wide2: `Seletor de técnica`,
    },
    faq: {
      kicker: `// Bom saber`,
      title: `Perguntas frequentes`,
      items: [
        { q: `O Choke é grátis?`, a: `Sim. O Choke é totalmente grátis e de código aberto sob a licença GPL-3.0. Não há plano pago, anúncios nem contas.` },
        { q: `Como os espectadores acompanham os resultados?`, a: `Cada luta que você pontua é publicada ao vivo no <a class="gold-link" href="https://bjjscore.live" target="_blank" rel="noopener">bjjscore.live</a>. Compartilhe a chave pública (npub) da aba Conta e qualquer um pode acompanhar suas lutas lá — ótimo para projetar em um local.` },
        { q: `Preciso criar uma conta?`, a: `Não. Ao instalar o app, um par de chaves seguro é gerado no seu dispositivo. Essa chave é a sua identidade — faça um backup e mantenha a parte privada (nsec) em segredo.` },
        { q: `Um ajudante pode pontuar lutas por mim?`, a: `Sim. Você pode delegar uma única luta a um colega usando uma chave de luta efêmera, para que várias pessoas comandem a mesa sem nunca compartilhar sua chave privada.` },
        { q: `Quais plataformas são suportadas?`, a: `O Choke está disponível para Android na Google Play, com iOS a caminho. Foi feito com Flutter, então a mesma experiência funciona em todos os lugares.` },
      ],
    },
    cta: {
      title: `Pronto para comandar seu próximo evento?`,
      subtitle: `Baixe o Choke, crie uma luta e coloque o placar onde todos possam ver.`,
    },
    footer: {
      descHtml: `Um app moderno e descentralizado para pontuar lutas de BJJ. Feito por <a class="inline-link" href="https://protolayer.io" target="_blank" rel="noopener">ProtoLayer.io</a>`,
      product: `Produto`,
      project: `Projeto`,
      features: `Recursos`,
      how: `Como funciona`,
      live: `Resultados ao vivo`,
      getPlay: `Baixar na Google Play`,
      privacy: `Privacidade`,
      license: `Licença · GPL-3.0`,
    },
    meta: {
      title: `Choke — Pontuação de lutas de BJJ em tempo real`,
      desc: `O Choke é a forma mais rápida de conduzir e pontuar lutas de Jiu-Jítsu brasileiro pelo seu celular. Marque os pontos na hora — o placar é transmitido ao vivo para espectadores, treinadores e o projetor.`,
    },
  },
};

export const ui = { en, es, pt } as const;

export type SiteStrings = typeof en.site;
export type ChokeStrings = typeof en.choke;

export function getSite(lang: Lang): SiteStrings {
  return (ui[lang] ?? ui[defaultLang]).site;
}

export function getChoke(lang: Lang): ChokeStrings {
  return (ui[lang] ?? ui[defaultLang]).choke;
}
