---
title: "Como Conectar"
description: "Guia passo a passo para configurar o Mini-KVM Openterface. Aprenda como conectar seu computador host e dispositivo alvo com instruções detalhadas para conexões USB-C, HDMI e periféricos. Inclui descrições de interface e dicas importantes de configuração."
keywords: "configuração do Mini-KVM, guia de conexão KVM, configuração KVM USB-C, conexão KVM HDMI, guia de instalação KVM, configuração de periféricos de computador, conexão de dispositivos USB, guia de interface KVM, configuração de computador sem cabeça, configuração KVM"
---

# **Como Conectar** | Guia de Configuração | Mini-KVM Openterface

## Etapas de Conexão

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Para configurar seu Mini-KVM, siga estas etapas na ordem:

1. **Conexão do Computador Host** (Lado Laranja):
    - Conecte o computador host ao mini-KVM usando o cabo USB Type-C laranja de 1,5m. Plugue-o na porta USB Type-C fêmea no lado laranja do mini-KVM.

    !!! note "Aplicativo Host Necessário"
        O computador host precisa ter o aplicativo host instalado. Para mais informações e links de download, consulte a página do [Aplicativo](/app).

2. **Conexão do Dispositivo Alvo** (Lado Preto):
    - Conecte o dispositivo alvo ao mini-KVM usando o cabo USB Type-C preto de 0,3m. Plugue-o na porta USB Type-C fêmea no lado preto do mini-KVM.

3. **Conexão de Saída de Vídeo do Alvo** (Lado Preto):
    - Conecte a porta de saída de vídeo do dispositivo alvo à porta HDMI fêmea no lado preto do mini-KVM. Use o cabo HDMI preto de 0,3m ou qualquer outro cabo apropriado de fonte de vídeo para HDMI, como um cabo conversor VGA para HDMI.

    !!! note "Nenhum Aplicativo Necessário para o Alvo"
        Nenhuma pré-instalação ou configuração é necessária no dispositivo alvo. Desde que o dispositivo alvo suporte operações de UI com saída de vídeo (HDMI, VGA, etc.) e tenha uma porta USB para receber sinais de controle de teclado e mouse emulados (HID), ele pode ser usado. Assim, as plataformas de dispositivos alvo suportadas incluem Windows, macOS, Linux, Android e iOS.

4. **Conexão da Porta USB-A 2.0 Alternável** (Opcional):
    - Se você quiser conectar um dispositivo USB à Porta USB-A 2.0 Alternável, é recomendável fazê-lo após completar as três conexões acima e garantir que o aplicativo host esteja aberto.


## Interfaces

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](https://assets.openterface.com/images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](https://assets.openterface.com/images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Porta USB-C do Host** (Fêmea): Como uma porta de dispositivo USB, conectando ao computador Host para transferência de dados via hub USB integrado

② ![Type-C to Target](https://assets.openterface.com/images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](https://assets.openterface.com/images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Porta USB-C do Alvo** (Fêmea): Como uma porta de dispositivo USB, conectando ao computador Host para emular a saída HID de teclado e mouse via hub USB integrado

③ ![HDMI Input](https://assets.openterface.com/images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](https://assets.openterface.com/images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Porta de Entrada HDMI** (Fêmea): Entrada de fonte HDMI do computador Alvo

④ ![USB-A Port](https://assets.openterface.com/images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](https://assets.openterface.com/images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Porta USB-A 2.0 Alternável** (Fêmea): Como uma porta host USB, utilizada pelo computador host ou pelo computador alvo a qualquer momento, mas não simultaneamente. Consulte o [Guia de Alternância da Porta USB](../usb-switch) para mais informações.

!!! warning "Limitações de Potência USB"
    A potência fornecida pela porta USB depende da placa-mãe do Host. Não é recomendável conectar dispositivos USB que exigem muita potência. Normalmente, o consumo de energia não deve exceder 1,5W. Conectar dispositivos de alta potência pode resultar em operação instável ou danos potenciais.

!!! warning "A Porta USB-A Tem Mecanismo de Bloqueio Firme"
    A porta USB-A inclui um mecanismo de bloqueio que requer força extra ao conectar ou remover dispositivos. Isso é intencional e garante uma conexão segura. **Evite usar dispositivos USB muito pequenos** (como pen drives ultra-compactos), pois podem ser difíceis de segurar e remover, levando potencialmente a danos.

!!! warning "Hub USB Extra Requer Alimentação Externa e Pode Afetar a Compatibilidade"
    O mini-KVM já inclui um hub USB integrado que conecta tanto ao computador host quanto ao computador alvo. Se você conectar um hub USB externo adicional à porta USB-A, quaisquer dispositivos USB conectados a ele operarão em um nível mais profundo na árvore de dispositivos USB. Alguns computadores podem ter limitações na profundidade da árvore USB, o que pode causar problemas de compatibilidade ou impedir que certos dispositivos funcionem corretamente.

    Além disso, certifique-se de que qualquer hub USB conectado seja alimentado externamente. Hubs não alimentados podem causar instabilidade ou mau funcionamento de toda a configuração do mini-KVM.

⑤ ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interruptor de Alternância**: Para alternar a conexão da porta USB-A 2.0 entre o computador host e o computador alvo

⑥ ![Extension Pins](https://assets.openterface.com/images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](https://assets.openterface.com/images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Pinos de Extensão**: Ocultos por padrão e acessíveis apenas substituindo a tampa superior por uma tampa alternativa. Para mais informações, consulte [Pinos de Extensão](../extension-pins) para uso de desenvolvedor.