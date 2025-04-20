---
title: "Porta USB Alternável"
description: "Saiba mais sobre o sistema de comutação USB de hardware e software dual no Openterface Mini-KVM. Entenda os quatro estados operacionais, diretrizes de segurança e futuras capacidades de acesso remoto."
keywords: "comutação USB, switch KVM, switch de hardware, switch de software, controle de porta USB, KVM sobre USB, KVM sobre IP, acesso remoto, gerenciamento de dispositivos USB, periféricos de computador, gerenciamento de energia USB"
---

# **Guia de Comutação da Porta USB** | Openterface Mini-KVM

O dispositivo mini-KVM possui uma única porta USB-A 2.0 que pode **conectar-se a** um computador host ou a um computador alvo, mas **nunca a ambos ao mesmo tempo**.

O controle é feito por dois interruptores:

- **Interruptor de Hardware**: Um interruptor físico de duas posições no dispositivo ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} (inward = host, outward = target).  
- **Interruptor de Software**: Um botão de alternância no aplicativo host que redireciona instantaneamente a porta USB para o host ou o alvo.

## Estados Operacionais

A conexão da porta USB-A depende das posições do **Interruptor de Hardware** e do **Interruptor de Software**. A tabela a seguir resume os quatro estados possíveis:

| **Estado** | **Interruptor de Hardware** | **Interruptor de Software** | **Porta Conectada a** | **Status de Sincronização**       |
|------------|------------------------------|------------------------------|------------------------|-----------------------------------|
| 1          | Host                         | Host                         | Host                   | Sincronizado                      |
| 2          | Alvo                         | Alvo                         | Alvo                   | Sincronizado                      |
| 3          | Alvo                         | Host                         | Host                   | Fora de Sincronização (→ Host)    |
| 4          | Host                         | Alvo                         | Alvo                   | Fora de Sincronização (→ Alvo)    |

- **Sincronizado** significa que as configurações de hardware e software correspondem.  
- **Fora de Sincronização** significa que o software substitui temporariamente o interruptor de hardware até que o interruptor de hardware seja movido novamente.

Qualquer movimento manual do interruptor de hardware atualizará a exibição do software e retornará a um estado sincronizado.

Na inicialização, o dispositivo padrão é a conexão com o host. O software detecta a posição do interruptor de hardware e sincroniza de acordo.

!!! warning "Lembre-se de ejetar o pen drive antes de alternar o interruptor"
    Se a porta USB estiver sendo usada por um pen drive, certifique-se de ejetar o pen drive antes de alternar o interruptor para transferir o uso da porta para outro computador.

??? note "Como compartilhar um pen drive/disco entre os dispositivos Host e Alvo?"
    Os arquivos podem ser transferidos entre o host e o alvo seguindo estas etapas:

    1. Monte um pen drive no host quando o pequeno interruptor preto estiver posicionado ao lado da porta Type-C do host.
    2. Copie os arquivos para este drive montado.
    3. Após a cópia, desmonte o drive sem desconectá-lo fisicamente.
    4. Vire o pequeno interruptor preto para o outro lado. Esta ação muda a conexão da porta USB-A para o alvo.
    5. Monte o pen drive no dispositivo alvo e copie/mova os arquivos do drive, completando o processo de transferência de arquivos do host para o alvo.

    Este método também pode ser usado na direção oposta.

!!! Note "Orientação ao Usuário"
    - **Prioridade do Interruptor de Software**: Independentemente da posição do interruptor de hardware, clicar no interruptor de software mudará imediatamente a direção do circuito.

    - **Sincronização do Interruptor de Hardware**: Qualquer alternância manual do Interruptor de Hardware alinhará seu estado com o Interruptor de Software, transitando para o Estado 1 ou Estado 2 a partir dos Estados fora de Sincronização 3 ou 4. No entanto, essa sincronização não altera necessariamente a conexão real do circuito.

    - **Monitoramento do Interruptor de Hardware**: O Interruptor de Hardware, apesar de ser físico, é monitorado pelo software e não controla diretamente a direção do circuito. Em vez disso, o software interpreta a posição do interruptor e gerencia a comutação real do circuito.