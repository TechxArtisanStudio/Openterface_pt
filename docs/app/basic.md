---
description: "Guia completo dos controles básicos do Openterface Mini-KVM: modos de mouse, entrada de teclado, acesso ao BIOS, suporte de áudio/vídeo e comutação USB. Compatível com múltiplos sistemas operacionais e dispositivos, suportando entrada de vídeo até 4K@30Hz."
keywords: "Controles Mini-KVM, modos de controle do mouse, entrada de teclado, acesso ao BIOS, transmissão de áudio, exibição de vídeo, comutação USB, compatibilidade de dispositivos, configuração KVM, controle de hardware, suporte 4K, sinais HID, controle de dispositivo alvo, software host, entrada HDMI"
---

# Controle Básico para Aplicativos Host

![use-case-pc-angled-view](https://assets.openterface.com/images/product/use-case-pc-angled-view.webp){ width=600 }

## 💻 Compatibilidade

- **Software Host**: Instale nosso [aplicativo host](/app) para macOS, Windows e Linux para controlar seus dispositivos alvo. Certifique-se de que seu sistema host seja compatível com a versão correspondente do aplicativo.
- **Compatibilidade com Dispositivo Alvo**: Não é necessária pré-instalação ou configuração no dispositivo alvo. Desde que o dispositivo alvo suporte operações de interface com saída de vídeo (por exemplo, HDMI, VGA) e tenha uma porta USB para receber sinais emulados de teclado e mouse (HID), ele pode ser usado. As plataformas alvo suportadas incluem Windows, macOS, Linux, Android e iOS.

## 🖱 Controle do Mouse

- **Modo Absoluto**: O cursor do mouse do alvo é mapeado diretamente para uma posição específica na tela do host através do nosso aplicativo. Isso significa que onde quer que você mova o mouse do host em nosso aplicativo, o mouse do alvo seguirá o mesmo movimento. Observe que pode haver um pequeno atraso nos movimentos do cursor. Você pode escolher ocultar ou exibir o cursor do mouse do host enquanto estiver em nosso aplicativo.

- **Modo Relativo**: O movimento do mouse do alvo é relativo à posição atual do mouse do host. Isso significa que mover o mouse do host deslocará o cursor do alvo por uma certa distância na mesma direção, sem um ponto fixo de início ou fim. Você pode sair deste modo relativo usando um atalho específico.

## ⌨️ Teclado

Quando o aplicativo está em foco, você pode digitar qualquer coisa diretamente, e essas teclas serão transmitidas para o computador alvo.

## ⚙️ Acesso ao BIOS

- **Acesso ao BIOS**: Use nosso aplicativo para acessar o BIOS de seus dispositivos alvo. Isso permite que você controle e configure as configurações diretamente do BIOS.

??? tip "Teclas para entrar no BIOS para diferentes placas-mãe"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Botão Assist: Sony
    - Tecla Option (⌥): Apple (para acessar o gerenciador de inicialização)

## 🔊 Som

- **Transmissão de Áudio**: O áudio do computador alvo é transmitido através da porta de entrada HDMI do mini-KVM. Ao usar nosso aplicativo, o som do computador alvo será reproduzido através do computador host, garantindo que você ouça tudo perfeitamente.

## 🎥 Vídeo

- **Exibição de Vídeo**: Nosso aplicativo permite que você visualize a tela do computador alvo perfeitamente. Suporta resoluções de vídeo de até 1920x1080 a 30Hz para exibição dentro do aplicativo. A entrada máxima de vídeo suportada é de até 3840x2160 a 30Hz via HDMI. Além disso, com o uso de um adaptador, também pode acomodar VGA, Micro HDMI, DVI e outras fontes de entrada de vídeo.

## 🔄 Porta USB Comutável

- **Usando a Porta USB**: O mini-KVM possui uma porta USB-A 2.0 comutável que pode ser alternada entre os computadores host e alvo, mas não ambos simultaneamente.
- **Métodos de Comutação**: 
    - Chave Física: Uma chave física no dispositivo
    - Chave de Software: Um botão no aplicativo host
- **Lógica de Comutação**: Para informações mais detalhadas sobre a lógica de funcionamento da porta USB comutável, incluindo a interação entre as chaves de hardware e software, configuração inicial, estados operacionais e transições de estado, consulte a [documentação do Comutador USB](/usb-switch).

!!! warning "Importante"
    - Lembre-se de ejetar quaisquer unidades USB conectadas antes de alternar a conexão da porta.
    - A porta USB tem limitações de energia. Não conecte dispositivos que exijam muita energia, pois isso pode resultar em operação instável ou possíveis danos.
