import { surfaceDocsBase, surfaceNewsBase } from './surface-urls';

export const siteConfig = {
  name: 'Openterface',
  locale: 'pt',
  url: 'https://pt.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    'Soluções KVM-over-USB ultracompactas para profissionais de TI — KVM-GO, Mini-KVM, KeyMod e uConsole KVM Extension.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    docs: 'https://docs.openterface.com',
    appOverview: 'https://docs.openterface.com/pt/app/overview/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
    news: 'https://news.openterface.com',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
            linkerDomains: ['openterface.com', 'forum.openterface.com']
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Consentimento de cookies',
      description:
        'Utilizamos cookies para melhorar a qualidade do conteúdo, analisar a eficácia do site e as necessidades. Ao consentir, ajuda-nos a melhorar o nosso site. Obrigado!',
      acceptLabel: 'Aceitar',
      rejectLabel: 'Recusar',
      cookieLabel: 'Cookie',
    },
  },
} as const;

/** Build a legacy openterface.com URL (marketing-only paths during cutover). */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}

/** Build a docs.openterface.com URL for this site's locale (English unprefixed at /). */
export function docsPath(subpath = ''): string {
  const normalized = subpath.startsWith('/') ? subpath : subpath ? `/${subpath}` : '';
  const suffix = normalized && !normalized.endsWith('/') ? `${normalized}/` : normalized || '/';
  const { locale } = siteConfig;
  const base = surfaceDocsBase();
  if (locale === 'en') {
    return suffix === '/' ? `${base}/` : `${base}${suffix}`;
  }
  return `${base}/${locale}${suffix === '/' ? '/' : suffix}`;
}

/** News hub URL — English is unprefixed at news.openterface.com/ */
export function newsPath(subpath = ''): string {
  const normalized = subpath.replace(/^\/+|\/+$/g, '');
  const { locale } = siteConfig;
  const base = surfaceNewsBase();
  if (locale === 'en') {
    return normalized ? `${base}/${normalized}/` : `${base}/`;
  }
  return normalized ? `${base}/${locale}/${normalized}/` : `${base}/${locale}/`;
}
