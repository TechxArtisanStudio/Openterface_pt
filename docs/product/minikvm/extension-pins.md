---
title: "Pinos de Extensão"
description: "Explore o potencial dos pinos de extensão do Mini-KVM Openterface para desenvolvimento de hardware personalizado e projetos de código aberto."
keywords: "pinos de extensão Mini-KVM, desenvolvimento personalizado, modificação de hardware, KVM de código aberto"
---

# **Pinos de Extensão** | Modo Desenvolvedor | Mini-KVM Openterface

![mini-kvm-pins-port](https://assets.openterface.com/images/product/mini-kvm-pins-port.png){:style="height:360px"}
![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.jpg){:style="height:300px"}

O Mini-KVM Openterface possui pinos de extensão para desenvolvimento avançado e experimentação com [Software Aberto](/app). Esses pinos não estão expostos na configuração padrão do case.

## Como Acessar os Pinos

1. Desmonte o dispositivo.
2. Substitua a tampa original do case por uma Tampa de Pino de Extensão especializada.
3. Baixe o [modelo 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models) para a Tampa de Pino de Extensão.
4. Confira nosso [repositório GitHub de Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware).

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="height:300px"}

!!! warning "Garantia Anulada"
    Remover o case original pode anular a garantia do produto. Todas as modificações ou desmontagens são realizadas por conta e risco do usuário.

!!! note "Recursos Experimentais"
    Recursos desenvolvidos usando esses pinos são experimentais e não foram totalmente testados. A Openterface não se responsabiliza por quaisquer danos, lesões ou mau funcionamento resultantes de modificações, exposição dos pinos de extensão ou outras alterações no dispositivo.

## Configuração dos Pinos

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Os pinos de extensão fornecem as seguintes conexões:

1. Fonte de alimentação USB 5V para componentes externos
2. Dados positivos para o hub USB do host
3. Dados negativos para o hub USB do host
4. Dados positivos para o hub USB do alvo
5. Dados negativos para o hub USB do alvo
6. Terra

!!! danger "Conexões Incorretas Causam Danos"
    Misturar VCC e GND pode causar danos severos ao dispositivo e aos componentes conectados. Sempre verifique as conexões dos pinos antes de ligar o dispositivo.

## Tampa de Pino de Extensão

![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.jpg){:style="height:360px"}

Esta Tampa de Pino de Extensão impressa em 3D substitui a tampa original do Mini-KVM Openterface, permitindo que usuários avançados exponham e acessem os pinos de extensão para desenvolvimento personalizado. Você pode baixar os arquivos do modelo 3D do nosso repositório GitHub e imprimir a tampa você mesmo.

- **Uso**: Fornece acesso aos pinos de extensão para desenvolvimento avançado de hardware.
- **Download**: [Arquivos do Modelo 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## Participe do Desenvolvimento

À medida que continuamos a desenvolver e experimentar, atualizaremos esta seção com mais informações sobre o que esses pinos podem fazer e como podem ser usados de forma criativa. Sua criatividade e expertise podem ajudar a expandir os limites do que é possível com o Mini-KVM Openterface. Por favor, envolva-se:

1. **Compartilhe Suas Ideias**: Tem um conceito legal para usar esses pinos? Adoraríamos ouvir!
2. **Contribua com Projetos DIY**: Se você criou algo interessante, considere compartilhar com nossa comunidade [Discord Openterface](/discord).
3. **Participe da Discussão**: Conecte-se com outros desenvolvedores e entusiastas para trocar ideias e colaborar.

Vamos construir e inovar juntos!