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
  }
};
