import { docsPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface Série KeyMod',
    slogan: 'Transforme seu celular em um teclado inteligente',
    subtitle: 'Controle de teclado e mouse programável para tecnologia, profissionais e jogos.',
    description:
      'Um emulador HID USB + Bluetooth compacto e programável que transforma seu celular em um console de teclado e trackpad portátil. Construído com o núcleo HID comprovado do Openterface Mini-KVM — plug and play, 100% código aberto.',
    seoDescription:
      'A Série KeyMod transforma seu celular em um teclado e trackpad portátil. Emulador HID USB + Bluetooth, código aberto, perfeito para quiosques e atalhos de fluxo de trabalho.',
    keywords: 'KeyMod, emulador HID, teclado para celular, teclado Bluetooth, teclado USB, código aberto',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: 'Apoie AGORA',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      'Carregar um teclado completo para configuração de quiosque ou TV é impraticável',
      'Atalhos de fluxo de trabalho precisam de macros programáveis em qualquer lugar',
      'Muitas ferramentas HID são de código fechado com personalização limitada',
    ],
    solutions: [
      'Use seu celular como um teclado e trackpad portátil',
      'USB e Bluetooth HID em um único dispositivo compacto',
      '100% código aberto com suporte ao app Openterface',
    ],
    hwFeatures: [
      { title: 'Fator de forma compacto', description: 'Cabe no seu bolso para trabalho de campo e viagens.' },
      { title: 'USB + Bluetooth', description: 'Conectividade dupla para máxima compatibilidade de dispositivos.' },
      { title: 'Hardware aberto', description: 'Design transparente construído no comprovado núcleo HID Openterface.' },
    ],
    swFeatures: [
      { title: 'App KeyMod', description: 'Configure macros, layouts e perfis de gamepad do seu celular.' },
      { title: 'Multiplataforma', description: 'Funciona com Android, iPadOS e hosts de desktop através dos apps Openterface.' },
      { title: 'Código aberto', description: 'Pilha completa disponível no GitHub para contribuições da comunidade.' },
    ],
    specs: [
      { label: 'Conectividade', value: 'USB-C + Bluetooth LE' },
      { label: 'Modos HID', value: 'Teclado, mouse, gamepad' },
      { label: 'Licença', value: 'Hardware e software de código aberto' },
    ],
    useCases: ['Entrada para Smart TV e quiosques', 'Macros de fluxo de trabalho móvel', 'Configurações de jogos e acessibilidade'],
    docLinks: [
      { label: 'Recursos', href: docsPath('/product/keymod/features/') },
      { label: "O que vem na caixa", href: docsPath('/product/keymod/whats-in-the-box/') },
      { label: 'Como conectar', href: docsPath('/product/keymod/how-to-connect/') },
      { label: 'FAQs', href: docsPath('/product/keymod/faq/') },
      { label: 'Baixar App KeyMod', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface Série KVM-GO',
    slogan: 'KVM ultracompacto que cabe no seu chaveiro',
    subtitle: 'Para momentos tecnológicos críticos — Conecte. Controle. Vá.',
    description:
      'A solução KVM-over-USB de próxima geração com conectores de vídeo integrados (HDMI, DisplayPort ou VGA). Ultracompacto, tamanho de chaveiro e construído para operações rápidas de TI em data centers e salas de servidores.',
    seoDescription:
      'Controle computadores sem monitor com o Openterface KVM-Go. HDMI/DP/VGA integrados, tamanho de chaveiro, KVM-over-USB 4K para profissionais de TI.',
    keywords: 'KVM-Go, KVM over USB, KVM ultracompacto, KVM de chaveiro, KVM 4K, controle headless',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: 'Reserve AGORA',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101,548', date: 'Financiado em 30 de dez de 2025', backers: '478' },
    painPoints: [
      'Equipamentos KVM tradicionais são volumosos e exigem cabos de vídeo separados',
      'O acesso emergencial ao servidor em campo precisa de uma ferramenta de bolso',
      'A solução de problemas sem monitor e sem acesso à rede é demorada',
    ],
    solutions: [
      'Conectores de vídeo integrados eliminam cabos extras',
      'O formato de chaveiro está sempre ao alcance',
      'KVM-over-USB — não requer rede ou drivers no alvo',
    ],
    hwFeatures: [
      { title: 'Vídeo integrado', description: 'Modelos HDMI, DisplayPort ou VGA — sem cabos soltos.' },
      { title: 'Tamanho de chaveiro', description: 'O menor KVM-over-USB na linha Openterface.' },
      { title: 'Suporte 4K', description: 'Captura de alta resolução para monitores modernos.' },
    ],
    swFeatures: [
      { title: 'App Openterface Qt', description: 'Controle de host multiplataforma para Windows, macOS e Linux.' },
      { title: 'Interruptor MicroSD', description: 'Armazenamento alternável para imagens de SO e ferramentas portáteis.' },
      { title: 'Pilha de código aberto', description: 'Firmware e aplicativos host impulsionados pela comunidade.' },
    ],
    specs: [
      { label: 'Vídeo', value: 'HDMI / DP / VGA (depende do modelo)' },
      { label: 'Resolução', value: 'Até 4K' },
      { label: 'Conexão', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['Vistorias em data centers', 'Configuração de dispositivos headless', 'TI de campo e resgate de homelab'],
    docLinks: [
      { label: 'Recursos', href: docsPath('/product/kvm-go/features/') },
      { label: 'Início Rápido Beta', href: docsPath('/product/kvm-go/beta-quick-start/') },
      { label: 'Como conectar', href: docsPath('/product/kvm-go/how-to-connect/') },
      { label: 'FAQs', href: docsPath('/product/kvm-go/faq/') },
      { label: 'Baixar App', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: 'Transforme seu laptop em um console KVM',
    subtitle: 'Simplifique sua vida tecnológica.',
    description:
      'Uma solução KVM-over-USB plug-and-play. Controle um computador headless próximo a partir do seu laptop usando USB e HDMI — sem periféricos extras ou rede necessária.',
    seoDescription:
      'Openterface Mini-KVM: KVM-over-USB plug-and-play com HDMI. Controle computadores sem monitor a partir do seu laptop sem rede.',
    keywords: 'Mini-KVM, KVM over USB, controle headless, HDMI KVM, KVM plug and play',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: 'Peça AGORA',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505,471', date: 'Financiado em 13 de jun de 2024', backers: '3.775' },
    painPoints: [
      'Carregar um monitor e teclado para cada reparo de servidor é impraticável',
      'O KVM de rede requer configuração e conectividade',
      'Profissionais de TI precisam de um KVM de bolso confiável diariamente',
    ],
    solutions: [
      'Use seu laptop existente como o console KVM',
      'Captura HDMI + USB HID em um único dispositivo compacto',
      'Comprovado por mais de 5.000 membros da comunidade desde 2024',
    ],
    hwFeatures: [
      { title: 'Captura HDMI', description: 'Vídeo completo da máquina alvo para o seu laptop host.' },
      { title: 'Interruptor USB', description: 'Alterne dispositivos USB entre o host e o alvo.' },
      { title: 'Pinos de extensão', description: 'Opções de hardware hacking e integração personalizada.' },
    ],
    swFeatures: [
      { title: 'Apps Qt / macOS / Android', description: 'Apps nativos para todas as principais plataformas host.' },
      { title: 'Código aberto', description: 'Ecossistema de hardware e software totalmente aberto.' },
      { title: 'Comunidade ativa', description: 'Discord, GitHub e atualizações regulares de firmware.' },
    ],
    specs: [
      { label: 'Entrada de vídeo', value: 'HDMI' },
      { label: 'USB', value: 'USB-C com porta alternável' },
      { label: 'Status', value: 'Enviando — Crowd Supply' },
    ],
    useCases: ['Gerenciamento de homelab', 'Controle lado a lado de estação de trabalho de desenvolvedor', 'Solução de problemas em bancada de TI'],
    docLinks: [
      { label: 'Recursos', href: docsPath('/product/minikvm/features/') },
      { label: 'Interruptor USB', href: docsPath('/product/minikvm/usb-switch/') },
      { label: 'Suporte Técnico', href: docsPath('/product/minikvm/support/') },
      { label: 'FAQs', href: docsPath('/product/minikvm/faq/') },
      { label: 'Baixar App', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'uConsole KVM Extension',
    slogan: 'Poder KVM para seu uConsole',
    subtitle: 'Transforme o uConsole portátil em um terminal KVM completo.',
    description:
      'Uma extensão de hardware que adiciona capacidade KVM-over-USB ao Clockwork uConsole. Perfeito para trabalho de TI portátil com teclado e tela integrados.',
    seoDescription:
      'A uConsole KVM Extension adiciona KVM-over-USB ao computador portátil Clockwork uConsole.',
    keywords: 'uConsole, extensão KVM, KVM portátil, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: 'Saiba Mais',
    buyHref: docsPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      'Consoles portáteis carecem de KVM integrado para alvos headless',
      'Técnicos de campo querem um único dispositivo para tudo',
    ],
    solutions: [
      'Placa de extensão nativa para o formato uConsole',
      'Pilha KVM Openterface completa em um dispositivo de bolso',
    ],
    hwFeatures: [
      { title: 'Nativo uConsole', description: 'Projetado especificamente para Clockwork uConsole.' },
      { title: 'PCB compacta', description: 'Instala-se dentro do chassi do uConsole.' },
    ],
    swFeatures: [
      { title: 'Apps Openterface', description: 'O mesmo software confiável do Mini-KVM e KVM-GO.' },
      { title: 'Guias de configuração', description: 'Documentação de instalação de hardware e software passo a passo.' },
    ],
    specs: [
      { label: 'Compatibilidade', value: 'Clockwork uConsole' },
      { label: 'Certificação', value: 'Certificado OSHWA' },
    ],
    useCases: ['Ferramenta de datacenter portátil', 'Maker e homelab em movimento'],
    docLinks: [
      { label: 'Instalação de Hardware', href: docsPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: 'Configuração de Software', href: docsPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: 'Como conectar', href: docsPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: 'FAQs', href: docsPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Acessórios Openterface',
    slogan: 'Complete sua configuração',
    subtitle: 'Cabos premium, adaptadores e bolsas de ferramentas para profissionais.',
    description:
      'Acessórios essenciais incluindo adaptadores de vídeo, cabos de alta velocidade e soluções de armazenamento. Melhore sua experiência Openterface com equipamentos de qualidade da TxA Shop.',
    seoDescription: 'Acessórios Openterface — cabos, adaptadores, bolsas de ferramentas e conectores de vídeo.',
    keywords: 'acessórios KVM, cabo HDMI, cabo USB-C, bolsa de ferramentas',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: 'Compre AGORA',
    buyHref: siteConfig.links.shop,
    painPoints: ['A falta do cabo certo no campo atrasa cada reparo'],
    solutions: ['Acessórios selecionados e testados com produtos Openterface'],
    hwFeatures: [
      { title: 'Adaptadores de vídeo', description: 'HDMI, VGA e conectores especiais.' },
      { title: 'Cabos de alta velocidade', description: 'Cabos USB-C e Tipo-A construídos para cargas de trabalho KVM.' },
      { title: 'Bolsa de ferramentas', description: 'Organize seu kit Openterface completo.' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['Organização de kit de campo', 'Conversão de formato de vídeo', 'Cabos de reserva para mochilas de TI'],
    docLinks: [
      { label: 'Todos os SKUs', href: docsPath('/product/accessories/') },
      { label: 'TxA Shop', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
