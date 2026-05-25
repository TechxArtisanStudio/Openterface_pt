export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Guias de produtos, FAQs, tutoriais e downloads de apps estão em docs.openterface.com.",
    "homeMessage": "Tutoriais, FAQs, downloads de apps e guias de produtos estão em docs.openterface.com.",
    "linkLabel": "Abrir documentação ↗",
    "productMessage": "Especificações detalhadas, guias de configuração e FAQs estão em docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Fique por dentro",
    "heading": "Receba primeiro atualizações do KVM-GO, KeyMod e Mini-KVM",
    "description": "Lançamentos de produtos, firmware e dicas práticas de TI — no máximo uma vez por mês. Sem spam, apenas notícias úteis da equipa Openterface.",
    "benefitCrowdfunding": "Acesso antecipado a crowdfunding e pré-encomendas",
    "benefitGuides": "Guias de configuração e notas de versão das apps",
    "benefitUnsubscribe": "Cancele a subscrição a qualquer momento com um clique",
    "submitLabel": "Subscrever atualizações",
    "namePlaceholder": "Nome (opcional)",
    "emailPlaceholder": "Endereço de e-mail *",
    "footnote": "No máximo um e-mail por mês. Cancele quando quiser. Contacto: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "Soluções KVM-over-USB ultracompactas para profissionais de TI.",
    "productsHeading": "Produtos",
    "keymodSeries": "Série KeyMod",
    "kvmGoSeries": "Série KVM-GO",
    "miniKvm": "Mini-KVM",
    "accessories": "Acessórios",
    "resourcesHeading": "Recursos",
    "videos": "Vídeos",
    "faqs": "Perguntas frequentes",
    "apps": "Apps",
    "support": "Suporte",
    "newsletterTitle": "Newsletter",
    "newsletterDescription": "Atualizações mensais sobre produtos, firmware e dicas KVM.",
    "newsletterSubmit": "Subscrever",
    "newsletterNamePlaceholder": "Nome",
    "newsletterEmailPlaceholder": "E-mail *",
    "newsletterFootnote": "Cancele quando quiser.",
    "copyright": "Openterface. KVM-over-USB de código aberto.",
    "privacy": "Privacidade",
    "terms": "Termos"
  },
  "productLanding": {
    "downloadApp": "Descarregar app",
    "backers": "Apoiantes",
    "theProblem": "O problema",
    "theSolution": "A solução",
    "hwSoftwareTitle": "Hardware + Software",
    "hwSoftwareSubtitle": "Os produtos Openterface funcionam melhor com as nossas apps host open source.",
    "hardware": "Hardware",
    "software": "Software",
    "swFallback": "Consulte a TxA Shop para detalhes de compatibilidade de acessórios.",
    "keySpecs": "Especificações principais",
    "useCases": "Casos de uso",
    "documentation": "Documentação",
    "ctaTitle": "Pronto para começar?",
    "ctaSubtitle": "Encomende o hardware e descarregue a app Openterface para a sua plataforma."
  }
};
