import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface Série KeyMod",
  slogan: "Transforme seu celular em um teclado inteligente",
  subtitle: "Controle de teclado e mouse programável para tecnologia, profissionais e jogos.",
  status: 'pre-launch',
  description:
    "Um emulador HID USB + Bluetooth compacto e programável que transforma seu celular em um console de teclado e trackpad portátil. Construído com o núcleo HID comprovado do Openterface Mini-KVM — plug and play, 100% código aberto.",
  seoDescription:
    "A Série KeyMod transforma seu celular em um teclado e trackpad portátil. Emulador HID USB + Bluetooth, código aberto, perfeito para quiosques e atalhos de fluxo de trabalho.",
  keywords:
    "KeyMod, emulador HID, teclado para celular, teclado Bluetooth, teclado USB, código aberto",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Apoie AGORA",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Carregar um teclado completo para configuração de quiosque ou TV é impraticável",
    "Atalhos de fluxo de trabalho precisam de macros programáveis em qualquer lugar",
    "Muitas ferramentas HID são de código fechado com personalização limitada",
  ],
  solutions: [
    "Use seu celular como um teclado e trackpad portátil",
    "USB e Bluetooth HID em um único dispositivo compacto",
    "100% código aberto com suporte ao app Openterface",
  ],
  hwFeatures: [
    { title: "Fator de forma compacto", description: "Cabe no seu bolso para trabalho de campo e viagens." },
    { title: "USB + Bluetooth", description: "Conectividade dupla para máxima compatibilidade de dispositivos." },
    { title: "Hardware aberto", description: "Design transparente construído no comprovado núcleo HID Openterface." },
  ],
  swFeatures: [
    { title: "App KeyMod", description: "Configure macros, layouts e perfis de gamepad do seu celular." },
    { title: "Multiplataforma", description: "Funciona com Android, iPadOS e hosts de desktop através dos apps Openterface." },
    { title: "Código aberto", description: "Pilha completa disponível no GitHub para contribuições da comunidade." },
  ],
  specs: [
    { label: "Conectividade", value: "USB-C + Bluetooth LE" },
    { label: "Modos HID", value: "Teclado, mouse, gamepad" },
    { label: "Licença", value: "Hardware e software de código aberto" },
  ],
  useCases: [
    "Entrada para Smart TV e quiosques",
    "Macros de fluxo de trabalho móvel",
    "Configurações de jogos e acessibilidade",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Recursos", href: docsPath("/product/keymod/features/") },
    { label: "O que vem na caixa", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Como conectar", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "FAQs", href: docsPath("/product/keymod/faq/") },
    { label: "Baixar App KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
