import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "uConsole KVM Extension",
  slogan: "Poder KVM para seu uConsole",
  subtitle: "Transforme o uConsole portátil em um terminal KVM completo.",
  status: 'oshwa',
  description:
    "Uma extensão de hardware que adiciona capacidade KVM-over-USB ao Clockwork uConsole. Perfeito para trabalho de TI portátil com teclado e tela integrados.",
  seoDescription:
    "A uConsole KVM Extension adiciona KVM-over-USB ao computador portátil Clockwork uConsole.",
  keywords:
    "uConsole, extensão KVM, KVM portátil, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Saiba Mais",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Consoles portáteis carecem de KVM integrado para alvos headless",
    "Técnicos de campo querem um único dispositivo para tudo",
  ],
  solutions: [
    "Placa de extensão nativa para o formato uConsole",
    "Pilha KVM Openterface completa em um dispositivo de bolso",
  ],
  hwFeatures: [
    { title: "Nativo uConsole", description: "Projetado especificamente para Clockwork uConsole." },
    { title: "PCB compacta", description: "Instala-se dentro do chassi do uConsole." },
  ],
  swFeatures: [
    { title: "Apps Openterface", description: "O mesmo software confiável do Mini-KVM e KVM-GO." },
    { title: "Guias de configuração", description: "Documentação de instalação de hardware e software passo a passo." },
  ],
  specs: [
    { label: "Compatibilidade", value: "Clockwork uConsole" },
    { label: "Certificação", value: "Certificado OSHWA" },
  ],
  useCases: [
    "Ferramenta de datacenter portátil",
    "Maker e homelab em movimento",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Instalação de Hardware", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Configuração de Software", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Como conectar", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "FAQs", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
