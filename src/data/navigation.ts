import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Produtos',
    href: '#',
    children: [
      { label: 'Série KeyMod', href: '/products/keymod/' },
      { label: 'Série KVM-GO', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'Acessórios', href: '/products/accessories/' },
    ],
  },
  { label: 'Vídeos', href: '/videos/' },
  { label: 'Casos de Uso', href: '/use-cases/' },
  { label: 'Sobre', href: '/about/' },
  { label: 'Documentação', href: docsPath(), external: true },
  { label: 'Notícias', href: newsPath(), external: true },
  { label: 'Loja', href: siteConfig.links.shop, external: true },
];
