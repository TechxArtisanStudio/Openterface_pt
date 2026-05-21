import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'Série KeyMod',
    headline: 'Transforme seu celular em um mini teclado',
    description:
      'Um emulador HID USB + Bluetooth compacto que transforma seu celular em um teclado e trackpad portátil. Plug and play, 100% código aberto. Perfeito para quiosques, smart TVs e atalhos rápidos de fluxo de trabalho.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface Série KeyMod',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Apoie AGORA', href: siteConfig.links.keymodCrowdsupply, external: true },
    secondaryCta: { label: 'Ver Produto', href: '/products/keymod/' },
    progressSmall: 'Série KeyMod',
    progressLarge: 'Transforme seu celular em um mini teclado',
  },
  {
    id: 2,
    category: 'Série KVM-GO',
    headline: 'O KVM ultracompacto que cabe no chaveiro',
    description:
      'Projetado para caber no seu chaveiro e salvar seu dia num instante, este dispositivo KVM-over-USB de próxima geração foi construído para operações rápidas de TI em campo.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'Série KVM-GO',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Reserve AGORA', href: siteConfig.links.kvmgoPurchase, external: true },
    secondaryCta: { label: 'Ver Produto', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Financiado em 30 de dez de 2025', backers: '478' },
    progressSmall: 'Série KVM-GO',
    progressLarge: 'O KVM ultracompacto que cabe no seu chaveiro',
  },
  {
    id: 3,
    category: 'Série Mini-KVM',
    headline: 'A solução KVM compacta para profissionais',
    description:
      'Uma solução KVM-over-USB compacta, rica em recursos e de código aberto que simplifica sua vida tecnológica com tarefas de TI e solução de problemas em tempo real.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Peça AGORA', href: siteConfig.links.minikvmPurchase, external: true },
    secondaryCta: { label: 'Ver Produto', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Financiado em 13 de jun de 2024', backers: '3.775' },
    progressSmall: 'Série Mini-KVM',
    progressLarge: 'A solução KVM compacta para profissionais',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Complete sua configuração com acessórios premium',
    description:
      'Explore nossa gama de acessórios essenciais, incluindo adaptadores de vídeo, cabos de alta velocidade e soluções de armazenamento. Melhore sua experiência Openterface com acessórios de qualidade projetados para profissionais.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'Acessórios TxA Shop',
    primaryCta: { label: 'Compre AGORA', href: siteConfig.links.shop, external: true },
    secondaryCta: { label: 'Ver Acessórios', href: '/products/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Complete sua configuração com acessórios premium',
  },
];

export const homeSeo = {
  title: 'Openterface | Soluções KVM ultracompactas para profissionais de TI',
  description:
    'Descubra o Openterface - Soluções KVM-over-USB ultracompactas, incluindo a Série KVM-GO (tamanho de chaveiro), Série Mini-KVM e uConsole KVM Extension.',
  keywords:
    'KVM-over-USB, switch KVM, KVM portátil, KVM USB, gerenciamento de servidor headless, KVM-GO, Mini-KVM, KeyMod',
};
