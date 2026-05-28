import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Transforme seu laptop em um console KVM",
  subtitle: "Simplifique sua vida tecnológica.",
  status: 'shipping',
  description:
    "Uma solução KVM-over-USB plug-and-play. Controle um computador headless próximo a partir do seu laptop usando USB e HDMI — sem periféricos extras ou rede necessária.",
  seoDescription:
    "Openterface Mini-KVM: KVM-over-USB plug-and-play com HDMI. Controle computadores sem monitor a partir do seu laptop sem rede.",
  keywords:
    "Mini-KVM, KVM over USB, controle headless, HDMI KVM, KVM plug and play",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Peça AGORA",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Financiado em 13 de jun de 2024", backers: "3.775" },
  painPoints: [
    "Carregar um monitor e teclado para cada reparo de servidor é impraticável",
    "O KVM de rede requer configuração e conectividade",
    "Profissionais de TI precisam de um KVM de bolso confiável diariamente",
  ],
  solutions: [
    "Use seu laptop existente como o console KVM",
    "Captura HDMI + USB HID em um único dispositivo compacto",
    "Comprovado por mais de 5.000 membros da comunidade desde 2024",
  ],
  hwFeatures: [
    { title: "Captura HDMI", description: "Vídeo completo da máquina alvo para o seu laptop host." },
    { title: "Interruptor USB", description: "Alterne dispositivos USB entre o host e o alvo." },
    { title: "Pinos de extensão", description: "Opções de hardware hacking e integração personalizada." },
  ],
  swFeatures: [
    { title: "Apps Qt / macOS / Android", description: "Apps nativos para todas as principais plataformas host." },
    { title: "Código aberto", description: "Ecossistema de hardware e software totalmente aberto." },
    { title: "Comunidade ativa", description: "Discord, GitHub e atualizações regulares de firmware." },
  ],
  specs: [
    { label: "Entrada de vídeo", value: "HDMI" },
    { label: "USB", value: "USB-C com porta alternável" },
    { label: "Status", value: "Enviando — Crowd Supply" },
  ],
  useCases: [
    "Gerenciamento de homelab",
    "Controle lado a lado de estação de trabalho de desenvolvedor",
    "Solução de problemas em bancada de TI",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Recursos", href: docsPath("/product/minikvm/features/") },
    { label: "Interruptor USB", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Suporte Técnico", href: docsPath("/product/minikvm/support/") },
    { label: "FAQs", href: docsPath("/product/minikvm/faq/") },
    { label: "Baixar App", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
