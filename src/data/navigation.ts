import { legacyPath, newsPath } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Início', href: '/' },
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
  { label: 'FAQs', href: legacyPath('/faq/'), external: true },
  { label: 'App', href: legacyPath('/app/overview/'), external: true },
  { label: 'Tutorial', href: legacyPath('/tutorial/'), external: true },
  { label: 'Suporte', href: legacyPath('/support/'), external: true },
  { label: 'Notícias', href: newsPath(), external: true },
  { label: 'Sobre', href: '/about/' },
];
