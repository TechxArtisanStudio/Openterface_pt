/** Flat marketing URLs from slug-map SSOT (legacy nested slugs → short paths). */
export const PRODUCT_FLAT_PATHS: Record<string, string> = {
  keymod: '/keymod/',
  'kvm-go': '/kvmgo/',
  minikvm: '/minikvm/',
  'uconsole-kvm-extension': '/kvmext/',
  accessories: '/accessories/',
};

export const productsHubOrder = [
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
] as const;

export function productFlatPath(slug: string): string {
  return PRODUCT_FLAT_PATHS[slug] ?? `/products/${slug}/`;
}

export const productsHubSeo = {
  title: 'Produtos',
  description:
    'Hardware KVM-over-USB ultracompacto e apps open source para profissionais de TI, developers e makers.',
  keywords: 'produtos Openterface, KeyMod, KVM-GO, Mini-KVM, extensão KVM, acessórios, app KVM',
};
