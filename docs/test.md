# Teste & Desenvolvimento

## 💻 Compatibilidade

- **Suporte ao Sistema Operacional**: Verifique se diferentes versões do sistema operacional podem usar o aplicativo host correspondente.
- **Teste de Desempenho**: Avalie o desempenho em vários sistemas host.
- **Teste de Versão do SO**: Garanta a compatibilidade entre diferentes versões do sistema operacional.
- **Problemas Específicos de Dispositivo**: Identifique e resolva problemas específicos de certos dispositivos ou versões do sistema operacional.

## 🖱 Controle do Mouse

<div class="annotate" markdown>

- **Latência de Movimento**: Garanta um controle suave e responsivo.
- **Botões do Mouse**: Teste os botões esquerdo, direito e do meio; clique e arraste.
- **Rolagem**: Avalie a velocidade e a direção da rolagem.
- **Precisão** do mapeamento da posição do mouse no modo *Absoluto* (1)
- **Sensibilidade** do movimento do mouse no modo *Relativo* (2)

</div>

1. Garanta que a posição do mouse do alvo seja mapeada com precisão para o host. Isso pode ser impactado pela resolução do alvo e mudanças no tamanho da janela do aplicativo.
2. Garanta que o movimento do mouse atenda às expectativas intuitivas.

## ⌨️ Teclado

<div class="annotate" markdown>

- **Responsividade da Digitação**: Garanta que atenda às expectativas intuitivas.
- **Mapeamento Completo do Teclado**: Especialmente para vários símbolos especiais.
- **Modificadores**: Teclas como `Ctrl`, `Shift`, `Alt` e `Cmd`, ou `Win`.
- **Combinações de Teclas**: Suporta tecnicamente até 8 teclas modificadoras e 6 teclas adicionais pressionadas simultaneamente.
- **Teclas de Mídia e ACPI**: Teclas como `Volume-`, `Volume+`, `Mudo`, `Despertar`, `Dormir` e `Energia`.
- **Layouts de Teclado**: Garanta um pareamento consistente para vários layouts. (1)

!!! dica

    - **Testador de Teclado**: Você pode utilizar uma ferramenta de teste de teclado online tanto no host quanto no computador alvo para verificar se as teclas estão sincronizadas.
    - **Chip CH9329**: Verifique [os detalhes](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/CH9329) para entender os limites do controle de teclado/mouse no Openterface Mini-KVM.

</div>

1. ⌨️ 🌏 Os layouts de teclado variam globalmente entre regiões e idiomas, com tipos populares como QWERTY, AZERTY, QWERTZ e Dvorak.

## ⚙️ Acesso ao Nível de BIOS

- **Entrada no BIOS**: Teste a entrada no BIOS durante a sequência de inicialização.
- **Funcionalidade**: Garanta o controle total do teclado e mouse dentro do BIOS.
- **Compatibilidade**: Verifique o acesso ao BIOS em diferentes marcas e modelos de placas-mãe.

## 🔊 Som

- **Qualidade do Som**: Avalie a clareza e a sincronização da reprodução de áudio.
- **Latência**: Meça qualquer atraso entre ações e seus sons correspondentes.
- **Compatibilidade**: Teste várias saídas de áudio em diferentes sistemas operacionais.

## 🎥 Vídeo

- **Suporte à Resolução**: Teste várias resoluções de tela e proporções.
- **Taxa de Quadros**: Avalie o desempenho em diferentes taxas de atualização.
- **Qualidade da Exibição**: Verifique se há artefatos visuais ou problemas de latência.

## 🔄 Porta USB Comutável

- **Teste do Interruptor de Alternância**: Teste o interruptor de alternância em vários cenários para garantir a confiabilidade.
- **Compatibilidade da Porta**: Garanta que a porta USB-A 2.0 suporte vários dispositivos USB, como pen drives e webcams.
- **Limitações de Energia**: Confirme a capacidade de fornecimento de energia da porta e sua adequação para diferentes dispositivos.

## 🔌 Conectar e Desconectar

- **Teste de Conexão**: Teste cenários com diferentes sequências de conexão e desconexão.
- **Manejo de Erros**: Garanta que o dispositivo reconheça e se recupere de conexões inadequadas.
- **Estabilidade**: Verifique a estabilidade quando os dispositivos são conectados e desconectados repetidamente.

## 📝 Transferência de Texto

- **Teste de Funcionalidade**: Verifique se o aplicativo host pode transferir texto com sucesso do computador host para o dispositivo alvo usando códigos ASCII.
- **Integridade do Conteúdo**: Garanta que o conteúdo do texto transferido do host para o dispositivo alvo permaneça intacto e seja reproduzido com precisão.
- **Manejo de Caracteres Especiais**: Teste a transferência de texto com vários caracteres ASCII para garantir o manejo e a reprodução adequados no dispositivo alvo.
- **Teste de Comprimento do Texto**: Teste a transferência de texto com textos de diferentes comprimentos para verificar se pode acomodar diferentes tamanhos de texto sem problemas.
- **Manejo de Erros**: Teste cenários de erro, como perda de conexão ou interrupção durante a transferência de texto, para garantir que o aplicativo host lide com essas situações de forma adequada e forneça feedback apropriado ao usuário.
- **Teste de Desempenho**: Avalie o desempenho da transferência de texto em várias condições, incluindo em computadores mais antigos ou mais lentos, para identificar possíveis problemas com sinais de entrada HID mal recebidos e garantir uma operação suave.
- **Teste da Interface do Usuário**: Garanta que a interface do usuário do aplicativo host forneça controles intuitivos e feedback para iniciar e monitorar operações de transferência de texto, facilitando o entendimento e uso dessa funcionalidade pelos usuários.

## Adicional

- **Manejo de Erros**: Teste os mecanismos de manejo de erros para recuperação adequada de interrupções.
- **Desempenho**: Avalie o desempenho do mini-KVM em vários cenários de carga de trabalho.
- **Estabilidade**: Conduza testes de estresse para estabilidade e confiabilidade a longo prazo.