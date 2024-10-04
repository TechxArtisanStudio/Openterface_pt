# Mecânica da Porta USB Comutável

![switch-graphics](images/product/switch-graphics.svg#only-light){:style="width:460px"}
![switch-graphics](images/product/switch-graphics_1.svg#only-dark){:style="width:460px"}

O dispositivo mini-KVM possui uma porta USB-A 2.0 comutável que pode ser alternada entre os computadores host e alvo, mas não ambos simultaneamente. Esta funcionalidade é controlada tanto por um interruptor físico quanto por um interruptor de software no aplicativo host. Este documento explica a mecânica e a lógica por trás desses interruptores.

## Tipos de Interruptores

- **Interruptor de Software**: Um botão de alternância no aplicativo host.
      - Alterna a conexão da porta USB entre os computadores host e alvo

- ![Interruptor de Alternância](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Interruptor de Alternância](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} **Interruptor de Hardware**: Um interruptor físico de duas posições no dispositivo.
      - Posição interna: Conecta ao computador host
      - Posição externa: Conecta ao computador alvo

## Configuração Inicial e Sincronização

Quando o mini-KVM está devidamente conectado e o aplicativo host é iniciado:

1. A conexão real da porta USB do dispositivo (circuito) inicialmente se conecta ao host.
2. O aplicativo host detecta a posição atual do interruptor de hardware, que está configurado para o computador Host ou Alvo.
3. O interruptor de software se sincroniza com a posição do interruptor de hardware.
4. A conexão do circuito real é atualizada para corresponder às posições dos interruptores.

!!! aviso "Limitação de Hardware"
    Se um drive USB já estiver conectado ao dispositivo antes de ligá-lo ou iniciar o aplicativo host, o computador host emitirá um aviso sobre a remoção insegura do dispositivo USB. Esta é uma limitação de hardware da versão 1.9. Portanto, é recomendável não conectar nenhum dispositivo USB antes de ligar o dispositivo ou iniciar nosso aplicativo host.

## Estados Operacionais

Devido à presença de interruptores de hardware e software, quatro estados possíveis podem ocorrer:

- **Estado 1** (Sincronizado, Conectado ao Host):
      - Interruptor de Hardware: Aponta para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Aponta para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Conexão da Porta USB: Conectada ao Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Estado 2** (Sincronizado, Conectado ao Alvo):
      - Interruptor de Hardware: Aponta para o Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Aponta para o Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Conexão da Porta USB: Conectada ao Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

- **Estado 3** (Fora de Sincronização, USB Conectado ao Host):
      - Interruptor de Hardware: Aponta para o Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Aponta para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Conexão da Porta USB: Conectada ao Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Estado 4** (Fora de Sincronização, USB Conectado ao Alvo):
      - Interruptor de Hardware: Aponta para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Aponta para o Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Conexão da Porta USB: Conectada ao Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

## Transições de Estado e Lógica

### Do **Estado 1** (Sincronizado com o Host)

- ^^***Cenário 1a***^^: Usuário Move o Interruptor de Hardware para o Alvo
      - Atualizar a variável de estado interno para Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Atualizar a exibição do aplicativo host para mostrar Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Alternar a conexão do circuito real para Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transição para o Estado 2, sincronizado

- ***Cenário 1b***: Usuário Clica no Interruptor de Software para Alvo
      - Atualizar a variável de estado interno para Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - A posição do interruptor de hardware permanece inalterada (apontando para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Alternar a conexão do circuito real para Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transição para o Estado 3, fora de sincronização

### Do **Estado 2** (Sincronizado com o Alvo)

- ^^***Cenário 2a***^^: Usuário Move o Interruptor de Hardware para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Atualizar a variável de estado interno para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Atualizar a exibição do interruptor de software para mostrar Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Alternar a conexão do circuito real para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transição para o Estado 1, sincronizado

- ***Cenário 2b***: Usuário Clica no Interruptor de Software para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Atualizar a variável de estado interno para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - A posição do interruptor de hardware permanece inalterada (apontando para o Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Alternar a conexão do circuito real para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transição para o Estado 4, fora de sincronização

### Do **Estado 3** (Fora de Sincronização, USB Conectado ao Host)

- ^^***Cenário 3a***^^: Usuário Move o Interruptor de Hardware para o Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - Sem alterações nas variáveis
      - Transição para o Estado 2, sincronizado

- ***Cenário 3b***: Usuário Clica no Interruptor de Software para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Atualizar a variável de estado interno para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - A posição do interruptor de hardware permanece inalterada (apontando para o Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Alternar a conexão do circuito real para Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transição para o Estado 1, sincronizado

### Do **Estado 4** (Fora de Sincronização, USB Conectado ao Alvo)

- ^^***Cenário 4a***^^: Usuário Move o Interruptor de Hardware para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Sem alterações nas variáveis
      - Transição para o Estado 1, sincronizado

- ***Cenário 4b***: Usuário Clica no Interruptor de Software para Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - Atualizar a variável de estado interno para Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - A posição do interruptor de hardware permanece inalterada (apontando para o Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Alternar a conexão do circuito real para Alvo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transição para o Estado 2, sincronizado

!!! aviso "Lembre-se de ejetar o pen drive antes de alternar o interruptor"
    Se a porta USB estiver sendo usada por um pen drive, certifique-se de ejetar o pen drive antes de alternar o interruptor para transferir o uso da porta para outro computador.

!!! aviso "Limitações de energia USB"
    A energia fornecida pela porta USB depende da placa-mãe do Host. Não é recomendável conectar dispositivos USB que exijam muita energia. Normalmente, o consumo de energia não deve exceder 1,5W. Conectar dispositivos de alta potência pode resultar em operação instável ou danos potenciais.

!!! Nota "Orientação ao Usuário"
    - **Prioridade do Interruptor de Software**: Independentemente da posição do interruptor de hardware, clicar no interruptor de software mudará imediatamente a direção do circuito.

    - **Sincronização do Interruptor de Hardware**: Qualquer alternância manual do Interruptor de Hardware alinhará seu estado com o Interruptor de Software, fazendo a transição para o Estado 1 ou Estado 2 a partir do Estado 3 ou Estado 4 fora de sincronização. No entanto, essa sincronização não altera necessariamente a conexão real do circuito.

    - **Monitoramento do Interruptor de Hardware**: O Interruptor de Hardware, apesar de ser físico, é monitorado por software e não controla diretamente a direção do circuito. Em vez disso, o software interpreta a posição do interruptor e gerencia a comutação real do circuito.

## Por que a Comutação USB Controlada por Software é Importante

A melhoria da comutação USB controlada por software introduzida na versão 1.9 é um recurso fundamental para nossos planos de desenvolvimento futuro, especialmente no suporte a soluções KVM-over-IP como VNC (que ainda não implementamos). Essa capacidade permite que os usuários alternem e compartilhem remotamente a porta USB entre os computadores alvo e host, o que é especialmente crucial para facilitar transferências de arquivos em um ambiente remoto.

Este recurso abre um mundo de possibilidades para gerenciamento e controle remoto. Por exemplo, permite transferências de arquivos entre dispositivos sem intervenção física, aumentando a eficiência da solução de problemas remotos e do gerenciamento de sistemas.

Você tem ideias criativas sobre como aproveitar esse recurso? Adoraríamos conversar com você! Junte-se à comunidade Openterface [comunidade](/community/) e compartilhe seus pensamentos 😃
