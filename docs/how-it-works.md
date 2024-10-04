# Como Funciona

## Descrição do Processo

- **Transmissão de Tela**: O mini-KVM captura a transmissão da tela do computador alvo e a exibe no aplicativo do computador host. Isso permite que os usuários visualizem e gerenciem o sistema alvo diretamente de sua máquina host.
- **Controle do Cursor e do Mouse**: Movendo o mouse para a janela do aplicativo no computador host, os usuários podem controlar o cursor no dispositivo alvo como se estivessem usando um VNC. Essa funcionalidade permite operar dois sistemas simultaneamente em uma tela.
- **Entrada de Teclado**: Quando a janela do aplicativo está ativa, qualquer pressionamento de tecla feito no teclado do computador host é transmitido para o dispositivo alvo, permitindo uma digitação e entrada de comandos sem interrupções.
- **Conversão de Sinais HID**: Todas as entradas de teclado e mouse dentro do aplicativo são convertidas em sinais de controle de Dispositivo de Interface Humana (HID), que são então enviados para o computador alvo.
- **Sincronização**: O aplicativo garante que a tela e o cursor do computador alvo estejam sincronizados com a exibição do computador host, facilitando uma experiência de usuário unificada.

Você pode explorar o Software [Open-source](/app) e o Hardware [Open-source](/open-hardware) da Openterface para mais detalhes.