import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Produtos",
    href: '/products/',
    children: [
      { label: "Todos os produtos", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Acessórios", href: '/accessories/' },
    ],
  },
  {
    label: "Apps",
    href: '/app/',
    children: [
      { label: "Todas as apps", href: '/app/' },
      { label: "Controlo KVM", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Mídia", href: '/videos/' },
  { label: "Sobre", href: '/about/' },
  { label: "Documentação", href: docsPath(), external: true },
  { label: "Notícias", href: newsPath(), external: true },
  { label: "Loja", href: siteConfig.links.shop, external: true },
];
