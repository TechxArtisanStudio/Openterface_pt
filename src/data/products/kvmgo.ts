import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface Série KVM-GO",
  slogan: "KVM ultracompacto que cabe no seu chaveiro",
  subtitle: "Para momentos tecnológicos críticos — Conecte. Controle. Vá.",
  status: 'pre-order',
  description:
    "A solução KVM-over-USB de próxima geração com conectores de vídeo integrados (HDMI, DisplayPort ou VGA). Ultracompacto, tamanho de chaveiro e construído para operações rápidas de TI em data centers e salas de servidores.",
  seoDescription:
    "Controle computadores sem monitor com o Openterface KVM-Go. HDMI/DP/VGA integrados, tamanho de chaveiro, KVM-over-USB 4K para profissionais de TI.",
  keywords:
    "KVM-Go, KVM over USB, KVM ultracompacto, KVM de chaveiro, KVM 4K, controle headless",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Reserve AGORA",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Financiado em 30 de dez de 2025", backers: "478" },
  painPoints: [
    "Equipamentos KVM tradicionais são volumosos e exigem cabos de vídeo separados",
    "O acesso emergencial ao servidor em campo precisa de uma ferramenta de bolso",
    "A solução de problemas sem monitor e sem acesso à rede é demorada",
  ],
  solutions: [
    "Conectores de vídeo integrados eliminam cabos extras",
    "O formato de chaveiro está sempre ao alcance",
    "KVM-over-USB — não requer rede ou drivers no alvo",
  ],
  hwFeatures: [
    { title: "Vídeo integrado", description: "Modelos HDMI, DisplayPort ou VGA — sem cabos soltos." },
    { title: "Tamanho de chaveiro", description: "O menor KVM-over-USB na linha Openterface." },
    { title: "Suporte 4K", description: "Captura de alta resolução para monitores modernos." },
  ],
  swFeatures: [
    { title: "App Openterface Qt", description: "Controle de host multiplataforma para Windows, macOS e Linux." },
    { title: "Interruptor MicroSD", description: "Armazenamento alternável para imagens de SO e ferramentas portáteis." },
    { title: "Pilha de código aberto", description: "Firmware e aplicativos host impulsionados pela comunidade." },
  ],
  specs: [
    { label: "Vídeo", value: "HDMI / DP / VGA (depende do modelo)" },
    { label: "Resolução", value: "Até 4K" },
    { label: "Conexão", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Vistorias em data centers",
    "Configuração de dispositivos headless",
    "TI de campo e resgate de homelab",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Recursos", href: docsPath("/product/kvm-go/features/") },
    { label: "Início Rápido Beta", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Como conectar", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "FAQs", href: docsPath("/product/kvm-go/faq/") },
    { label: "Baixar App", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
