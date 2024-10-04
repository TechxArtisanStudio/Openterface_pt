# Controle Básico

![use-case-pc-angled-view](images/product/use-case-pc-angled-view.jpg)

## 💻 Compatibilidade

- **Software do Host**: Instale nosso [aplicativo para host](/app) para macOS, Windows e Linux para controlar seus dispositivos alvo. Certifique-se de que seu sistema host seja compatível com a versão correspondente do aplicativo.
- **Compatibilidade do Dispositivo Alvo**: Não é necessário pré-instalar ou configurar nada no dispositivo alvo. Desde que o dispositivo alvo suporte operações de interface gráfica com saída de vídeo (por exemplo, HDMI, VGA) e tenha uma porta USB para receber sinais de controle de teclado e mouse emulados (HID), ele pode ser usado. As plataformas alvo suportadas incluem Windows, macOS, Linux, Android e iOS.

## 🖱 Controle do Mouse

- **Modo Absoluto**: O cursor do mouse do dispositivo alvo é mapeado diretamente para uma posição específica na tela do host através do nosso aplicativo. Isso significa que, onde quer que você mova o mouse do host dentro do nosso aplicativo, o mouse do alvo seguirá o mesmo movimento. Note que pode haver um pequeno atraso nos movimentos do cursor. Você pode escolher ocultar ou exibir o cursor do mouse do host enquanto ele estiver no nosso aplicativo.

- **Modo Relativo**: O movimento do mouse do alvo é relativo à posição atual do mouse do host. Isso significa que mover o mouse do host deslocará o cursor do alvo por uma certa distância na mesma direção, sem um ponto inicial ou final fixo. Você pode sair deste modo relativo usando um atalho específico.

## ⌨️ Teclado

Quando o aplicativo está em foco, você pode digitar qualquer coisa diretamente, e essas teclas serão passadas para o computador alvo.

## ⚙️ Acesso ao BIOS

- **Acesso ao BIOS**: Use nosso aplicativo para acessar o BIOS dos seus dispositivos alvo. Isso permite que você controle e configure as configurações diretamente do BIOS.

??? dica "Teclas para entrar no BIOS para diferentes placas-mãe"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Botão Assist: Sony
    - Tecla Option (⌥): Apple (para acessar o gerenciador de inicialização)

## 🔊 Som

- **Transmissão de Áudio**: O áudio do computador alvo é transmitido via a porta de entrada HDMI do mini-KVM. Ao usar nosso aplicativo, o som do computador alvo será reproduzido através do computador host, garantindo que você ouça tudo perfeitamente.

## 🎥 Vídeo

- **Exibição de Vídeo**: Nosso aplicativo permite que você visualize a tela do computador alvo sem problemas. Ele suporta resoluções de vídeo de até 1920x1080 a 30Hz para exibição dentro do aplicativo. A entrada máxima de vídeo suportada é de até 3840x2160 a 30Hz via HDMI. Além disso, com o uso de um adaptador, ele também pode acomodar VGA, Micro HDMI, DVI e outras fontes de entrada de vídeo.

## 🔄 Porta USB Comutável

- **Usando a Porta USB**: O mini-KVM possui uma porta USB-A 2.0 comutável que pode ser alternada entre os computadores host e alvo, mas não ambos simultaneamente.
- **Métodos de Comutação**: 
    - Comutação por Hardware: Um botão físico no dispositivo
    - Comutação por Software: Um botão no aplicativo do host
- **Lógica de Comutação**: Para mais informações detalhadas sobre a lógica de operação da porta USB comutável, incluindo a interação entre comutadores de hardware e software, configuração inicial, estados operacionais e transições de estado, consulte a [documentação da Comutação USB](usb-switch.md).

!!! aviso "Importante"
    - Lembre-se de ejetar qualquer unidade USB conectada antes de alternar a conexão da porta.
    - A porta USB tem limitações de energia. Não conecte dispositivos que exijam muita energia, pois isso pode resultar em operação instável ou danos potenciais.
