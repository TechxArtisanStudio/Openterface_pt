---
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
  - USBKVM
---
# Perguntas Frequentes (FAQs)

Estamos muito felizes em ter você aqui! 🌟 Esta seção foi criada para responder às perguntas mais frequentes sobre o Openterface Mini-KVM, organizadas periodicamente pela nossa equipe.

Vamos explorar as perguntas mais comuns sobre o Openterface Mini-KVM.

*Atualizado: 20 de agosto de 2024*

### Básico

#### O que é o Openterface Mini-KVM?
O Openterface Mini-KVM permite que você use seu laptop ou computador para exibir e controlar dispositivos sem cabeça através de uma conexão USB e HDMI. Esta solução KVM-over-USB oferece um controle KVM leve, rápido e sem interrupções. Ele elimina a necessidade de monitores, teclados e mouses extras, proporcionando uma solução conveniente em locais onde as conexões de rede são instáveis ou inexistentes. É particularmente útil para [uma ampla gama de aplicações](/use-cases/), especialmente para profissionais de tecnologia que solucionam problemas em dispositivos sem cabeça ou computadores de placa única. Com o uso de um adaptador de vídeo, ele também pode suportar [VGA](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm#product-3914), Micro HDMI, DVI e outras fontes de entrada.

O Openterface Mini-KVM é ==totalmente open-source== tanto em [hardware](/how-it-works/#explore-hardware-details) quanto em [software](/quick-start/#install-host-application), certificado pela [OSHWA](https://certification.oshwa.org/cn000015.html) e apoiado por [uma comunidade vibrante](/community/).

#### Por que o Openterface Mini-KVM faz a diferença?

Com várias soluções KVM disponíveis, aqui está o motivo pelo qual o Openterface Mini-KVM se destaca:

- Portabilidade e Funcionalidade
- Solução de Problemas Sem Rede e Imediata
- Preço Acessível
- Totalmente Open Source e Comunidade

Para saber mais, visite nossa página [Por que Openterface Mini-KVM](/why-openterface).

#### Quais são os casos de uso para este mini-KVM?
O Openterface Mini-KVM é o companheiro perfeito para uma ampla gama de usuários e cenários:

- Profissionais de TI solucionando problemas em servidores
- Técnicos que atendem ATMs, VLTs e quiosques
- Desenvolvedores gerenciando dispositivos de computação de borda
- Entusiastas de tecnologia experimentando com computadores de placa única
- Profissionais que precisam de operações locais seguras em segregação de rede, como aqueles que gerenciam ativos de criptomoedas
- Qualquer pessoa que precise de fluxos de trabalho frequentemente integrados entre computadores pessoais e de trabalho.

Confira também esta página: [Casos de Uso](/use-cases/)

#### Quais computadores host são compatíveis com o Openterface Mini-KVM?
Para usar este mini-KVM, o computador host deve instalar um dos [aplicativos host](/quick-start/#install-host-application) para suportar MacOS, Windows, Linux e Android.

#### Quais dispositivos alvo são compatíveis com o Openterface Mini-KVM?
Não é necessária pré-instalação ou configuração no dispositivo alvo. Desde que o dispositivo alvo suporte operações de interface de usuário com saída de vídeo (por exemplo, HDMI, VGA) e tenha uma porta USB para receber sinais emulados de teclado e mouse (HID), ele pode ser usado. Assim, as plataformas de dispositivos alvo suportadas incluem Windows, MacOS, Linux, Android e iOS.

#### Haverá suporte técnico e documentação disponível para o Openterface Mini-KVM?
Documentação extensa para o Openterface Mini-KVM pode ser encontrada em nosso site em [Openterface.com](/). Continuamos atualizando esses recursos para otimizar sua experiência com o dispositivo.
Para suporte técnico, convidamos você a se juntar à nossa [comunidade](/community/) para compartilhar dúvidas e insights com outros usuários e nossa equipe de especialistas. Se seu problema não for resolvido, nossa equipe está disponível para fornecer assistência técnica adicional. Você pode entrar em contato através deste e-mail: info@techxartisan.com.

### Software

#### Onde posso baixar os aplicativos host?
Visite nossa página [Instalar Aplicativo Host](/quick-start/#install-host-application) para downloads oficiais.

??? aviso "Privacidade e Segurança: Tenha cuidado ao usar aplicativos host de terceiros"
    Como nosso projeto é open source, você pode encontrar versões alternativas de aplicativos host compatíveis com nosso Mini-KVM desenvolvidas por outros. Embora possam oferecer recursos adicionais, certifique-se de revisar suas práticas de segurança e privacidade. **A equipe Openterface não pode garantir ou ser responsável pela segurança de aplicativos de terceiros**.

#### Existe um aplicativo host que suporte ChromeOS?
Sim, mas está atualmente em desenvolvimento. Estamos planejando criar uma extensão web projetada para suportar os navegadores Chrome e Firefox. Embora a prioridade de desenvolvimento seja um pouco menor do que para sistemas operacionais mainstream como macOS, Windows e Linux, estamos trabalhando ativamente nisso. Por favor, tenha paciência e fique atento às atualizações! Se você estiver interessado em ajudar no nosso desenvolvimento, junte-se a nós na comunidade ou envie-nos um e-mail!

#### Existe um aplicativo host que suporte dispositivos móveis da Apple?
Estamos atualmente explorando a compatibilidade com os sistemas móveis da Apple, como iOS e iPadOS. Devido aos controles rigorosos da Apple, essas plataformas podem não suportar conexões com fio com dispositivos de terceiros. No entanto, a situação pode mudar ou pode haver soluções alternativas. Se você tiver alguma ideia ou sugestão, convidamos você a se juntar à nossa comunidade para discuti-las conosco. Estamos comprometidos em aumentar a conveniência do nosso dispositivo, suportando o maior número possível de sistemas. Se você estiver interessado em ajudar no nosso desenvolvimento, junte-se a nós na comunidade ou envie-nos um e-mail!

#### E se a tecla F11 não funcionar em aplicativos macOS?
No macOS, pressionar F11 mostra a área de trabalho do macOS em vez de passar a tecla F11 para o aplicativo e o computador alvo. Para corrigir isso, você pode desvincular a tecla F11 da função "Mostrar Área de Trabalho". Veja como:

1. Vá para Configurações do Sistema.
2. Selecione Mesa e Dock.
3. Role para baixo e clique no botão "Atalhos...".
4. Encontre "Mostrar Área de Trabalho" e defina para o hífen (-) na parte inferior da lista suspensa.
5. Esta alteração permitirá que a tecla F11 passe para o seu aplicativo no computador alvo.

### Porta USB Comutável e Transferência de Arquivos

#### O Openterface Mini-KVM suporta transferências de arquivos?
Sim, o Openterface Mini-KVM inclui uma porta USB-A comutável compartilhada entre os dispositivos host e alvo.

??? nota "Como compartilhar um pen drive/disco entre os dispositivos Host e Alvo?"
    Arquivos podem ser transferidos entre o host e o alvo seguindo estes passos:

    1. Monte um pen drive no host quando o pequeno interruptor preto estiver ajustado para o lado da porta Type-C do host.
    2. Copie os arquivos para este drive montado.
    3. Após copiar, desmonte o drive sem desconectá-lo fisicamente.
    4. Vire o pequeno interruptor preto para o outro lado. Esta ação comuta a conexão da porta USB-A para o alvo.
    5. Monte o pen drive no dispositivo alvo e copie/mova os arquivos do drive, completando o processo de transferência de arquivos do host para o alvo.

    Este método também pode ser usado na direção oposta.

??? nota "Lembre-se de ejetar o pen drive antes de alternar o interruptor"
    Se a porta USB estiver sendo usada por um pen drive, certifique-se de ejetar o pen drive antes de alternar o interruptor para transferir o uso da porta para outro computador.
#### A porta USB-A comutável pode ser alternada via software?
Com a atualização de hardware para a versão 1.9, sim! Estamos atualmente trabalhando para codificar essa funcionalidade em nosso aplicativo. Uma vez implementada, ela suportará tanto a comutação física quanto a alternância via software. Consulte nossa equipe de desenvolvimento no Discord para saber mais sobre esse progresso.

#### Por que usar USB 2.0 em vez de USB 3.0 para esta porta USB comutável?
O USB 2.0 é totalmente capaz de lidar com captura de vídeo em 1080p@30Hz, transmitir sinais HID (para teclado e mouse) e gerenciar transferências de arquivos em velocidade padrão entre os computadores alvo e host. Isso torna nosso produto uma solução rápida, leve e portátil, exatamente como planejado.

Usar USB 3.0 tornaria o design da PCB muito mais complexo e aumentaria significativamente os custos de produção. Além disso, embora o USB 3.0 ofereça transferências de arquivos mais rápidas, ele também gera mais calor, o que poderia reduzir a vida útil do dispositivo.

Estamos considerando a aplicação do USB 3.0 para a próxima versão, visando cenários de uso mais profissionais e soluções KVM estacionárias.

### Técnico

#### O Openterface Mini-KVM é open-source?
Sim! O Openterface Mini-KVM é totalmente open-source tanto em [hardware](/how-it-works/#explore-hardware-details) quanto em [software](/quick-start/#install-host-application), certificado pela [OSHWA](https://certification.oshwa.org/cn000015.html) e apoiado por [uma comunidade vibrante](/community/). Se você estiver interessado em [contribuir](/contributing/), entre em contato conosco pelo e-mail info@techxartisan.com. Fique ligado!

#### Posso acessar as configurações de BIOS de um dispositivo?
Sim, a conexão direta do Openterface Mini-KVM permite o acesso a configurações de BIOS ou firmware de baixo nível.

Essa funcionalidade contrasta com soluções KVM baseadas em software ou aplicativos de controle remoto como TeamViewer e VNC, que geralmente não são capazes de interações a nível de BIOS.

#### Por que o controle do teclado não funciona no nível do BIOS para alguns computadores alvo mais antigos?
Parece que alguns BIOS de computadores antigos não conseguem reconhecer o hub USB do nosso dispositivo, o que pode causar problemas com nosso teclado e mouse emulados não funcionando corretamente no nível do BIOS. Estamos monitorando esse problema.

Recebemos um relato de que, em um computador HP específico, o HP Engage Flex Pro, o teclado não funciona na tela do BIOS, embora funcione normalmente após o sistema operacional ser iniciado.

Se você encontrar o mesmo problema, por favor, reporte para nós através de um problema no GitHub.

#### Como o vídeo/dados são transmitidos entre os dispositivos?
Os dados de vídeo são capturados via HDMI e transmitidos via USB 2.0 para o computador host para exibição. A porta USB 2.0 comutável permite o compartilhamento de unidade USB ou outro dispositivo USB entre o alvo e o host.

#### Como o Openterface Mini-KVM lida com a energia?
O dispositivo não requer uma fonte de alimentação externa, pois foi projetado para ser alimentado através de suas conexões USB Type-C do host, aumentando sua portabilidade. Em cenários onde o dispositivo alvo é um microcomputador de baixa potência, como um Raspberry Pi, ele pode ser alimentado através do host via a porta USB comutável do Mini-KVM. No entanto, isso não é recomendado. O método padrão de operação é ter uma fonte de alimentação externa para o dispositivo alvo.

#### Posso fazer este dispositivo DIY?
Com certeza! Somos um grupo de entusiastas que adoram DIY, e estamos garantindo que este projeto seja open-source tanto em hardware quanto em software. Você pode tecnicamente construí-lo do zero. Estamos até pensando em postar um guia sobre como fazer uma versão em breadboard do nosso produto que também seria compatível com nosso software.

Nossa comunidade já está experimentando diferentes versões de hardware. Confira as postagens da nossa comunidade para saber mais ou compartilhe suas próprias experiências de DIY! Isso pode realmente enriquecer nossa comunidade. Além disso, você pode descobrir que, com alguns ajustes no código, nosso software pode funcionar perfeitamente com sua configuração DIY criativa!

### Mecanismo de Controle

#### Há planos para uma versão com conectividade sem fio ou Ethernet?
Atualmente, não estamos planejando adicionar conectividade sem fio ou Ethernet aos nossos produtos Openterface. Estamos focados em fornecer controle rápido e estável via USB diretamente para o seu dispositivo alvo, para que você não precise se preocupar com problemas de rede.

Mas estamos sempre abertos a feedback! Se você acha que há uma necessidade real para esse recurso, ou se está tendo dificuldades em encontrar uma boa solução KVM-over-IP, envie-nos um e-mail: info@techxartisan.com. E lembre-se, se decidirmos expandir nossas opções de conectividade, nossa [comunidade](/reddit) será a primeira a saber.

#### Como isso é diferente de outras soluções KVM como KVMs tradicionais, KVM-over-IP e VNC, etc?
Curioso sobre como o Openterface Mini-KVM se compara a outras soluções? Confira nossa página de [Comparação](/comparison) detalhada.

#### Funciona com um computador alvo que requer PS/2?
Não. Sabemos que ainda existem muitos computadores antigos sem monitor que requerem teclados e mouses PS/2. Pelo que sabemos, ainda não existe uma solução elegante para converter sinais USB HID em sinais de teclado e mouse PS/2. Estamos investigando essa questão e considerando como suportar PS/2 em futuras versões do Mini-KVM. Se você conhece alguma solução que poderia funcionar elegantemente com nosso Mini-KVM, por favor, compartilhe conosco. Obrigado!

#### Posso usar vários Mini-KVMs para controlar vários dispositivos alvo a partir de um computador mestre?
Sim, você pode! Nosso Mini-KVM pode tecnicamente lidar com isso, mas ainda estamos ajustando o código e realizando testes. Estamos focados em garantir que nosso software possa vincular automaticamente o teclado e o mouse com a fonte de vídeo correta quando você usar mais de um Mini-KVM ao mesmo tempo. Além disso, estamos aprimorando a interface do usuário do software para torná-la melhor para esse tipo de configuração. Fique atento às atualizações da nossa comunidade para quando lançarmos esse recurso!

#### É capaz de ligar/desligar o computador ao qual está conectado?
Nosso dispositivo não suporta ATX (controle de ligar/desligar para o computador alvo). Nós o projetamos para ser portátil, rápido para solução de problemas e estável para controle local. Ele é realmente destinado a ser usado quando você está lá com seu laptop, gerenciando um ou vários computadores alvo. Podemos construir uma versão profissional no futuro com ATX e mais recursos.

### Relacionado a Vídeo

#### E quanto à latência e resolução de vídeo?
Nosso dispositivo lida com vídeo em 1080p com menos de 140 milissegundos de latência, tornando sua experiência de controle suave e contínua.

#### O Openterface Mini-KVM é adequado para jogos de alta qualidade?
O design atual foca em operações técnicas e de TI, proporcionando controle confiável para configuração de dispositivos e solução de problemas, em vez de jogos de alta resolução. Embora seja ótimo para muitas tarefas, este mini-KVM pode não atender às necessidades de exibição de jogos de alta qualidade.

#### Haverá suporte para exibição de alta qualidade em futuras versões do Openterface Mini-KVM?
Sabemos que muitos de vocês estão procurando por recursos de exibição de alta qualidade. Embora não seja nosso foco principal no momento, com base no seu feedback, estamos considerando adicionar capacidades de exibição aprimoradas em uma versão profissional do Openterface Mini-KVM.

#### Por que o Openterface Mini-KVM não transmite vídeo pela rede local?
O Openterface Mini-KVM foi projetado para garantir desempenho confiável e estável através de conexões com fio, usando HDMI e USB. Embora seja tecnicamente viável transmitir vídeo pela rede via nossos aplicativos host, estamos considerando adicionar um recurso VLC e até mesmo VNC aos nossos aplicativos host no futuro.

#### Ele funciona com diferentes saídas de vídeo como VGA, DVI, DisplayPort, etc.?
Mais ou menos. O Openterface Mini-KVM captura vídeo através de uma porta HDMI. No entanto, você pode usar vários adaptadores de vídeo como [VGA-para-HDMI](/use-cases/#streamlined-server-management), [DVI-para-HDMI](/use-cases/#unified-control-for-diverse-devices), [miniHDMI-para-HDMI](/use-cases/#simplified-setup-for-tech-enthusiasts) ou DP-para-HDMI, para conectar diferentes fontes de vídeo.

### Solução de Problemas

#### Por que o Openterface Mini-KVM às vezes apresenta problemas quando conectado através de um hub USB?

Quando um hub USB é usado no lado do alvo, o Openterface Mini-KVM pode se tornar instável. Isso ocorre porque o Openterface Mini-KVM depende principalmente da porta alvo para alimentação. Se o hub USB conectado ao alvo estiver totalmente carregado, pode causar uma queda significativa de voltagem, levando à instabilidade do Openterface Mini-KVM devido à energia insuficiente. Se você precisar usar um hub USB no lado do alvo, considere usar um hub USB alimentado com uma fonte de alimentação externa para garantir uma operação estável.

#### O que devo fazer se o Openterface Mini-KVM se tornar instável, como quando o aplicativo não exibe a tela do alvo ou o mouse e o teclado não respondem?

Se você encontrar instabilidade com o Openterface Mini-KVM—como o aplicativo não exibir a tela do alvo ou a incapacidade de controlar o mouse e o teclado—tente desconectar todos os cabos. Após um breve momento, reconecte os cabos e tente novamente. Esse simples reset geralmente resolve problemas de conexão.
### Mais

#### Como posso contribuir para este projeto?
Com certeza! Existem várias maneiras de você colaborar:

- Se você gosta de programar, pode nos ajudar relatando e corrigindo bugs.
- Bom com palavras e tecnologia? Você pode ajudar com nossa documentação.
- E se você é um mago com idiomas, por que não ajudar a traduzir nossos documentos para alcançar mais pessoas?
- Se design é a sua praia, estamos sempre em busca de novas ideias para design gráfico, interface do aplicativo e tornar nosso dispositivo ainda mais amigável.
- Quer ajudar a manter nossa comunidade ativa? Suas habilidades serão muito bem-vindas.

Seu apoio e [contribuições](/contributing/) são o que mantém o Openterface Mini-KVM crescendo. Obrigado por fazer parte da nossa aventura! 🚀 Quer ajudar, mas não encontrou uma forma ideal? Mande um e-mail para nós!

#### Quer avaliar nosso gadget prático?
Adoramos fazer barulho e espalhar a palavra sobre nosso Mini-KVM! Se você é da imprensa ou está arrasando nas redes sociais e quer testar nosso produto, estamos à disposição. Seja para reviews detalhados, vídeos de unboxing ou apenas para nos dar um alô, estamos prontos para isso e vamos fazer barulho juntos! 🎉 Basta nos enviar um e-mail AGORA!

#### Quais são os recursos avançados planejados para o mini-KVM?

Estamos empolgados com o potencial do mini-KVM e comprometidos em documentar todas as nossas ideias atuais em um roteiro abrangente. Este roteiro delineará recursos avançados e desenvolvimentos futuros que imaginamos para o dispositivo. Estamos ansiosos para desenvolver esses recursos em colaboração com nossa comunidade. Fique atento para mais atualizações enquanto continuamos a crescer e inovar juntos.

#### Como o mini-KVM se integra com IA e quais são suas possibilidades futuras?

Nosso objetivo final é permitir que a IA controle computadores alvo, e o Openterface desempenha um papel crucial nessa visão. Inspirados por projetos como o [OthersideAI's self-operating computer](https://github.com/OthersideAI/self-operating-computer), queremos que o mini-KVM atue como uma extensão das 'mãos' (fornecendo controle de teclado e mouse) e 'olhos' (capturando a fonte de vídeo) para o computador host. Se o computador host for poderoso o suficiente, ele poderá emular as capacidades vistas no filme "Ela" de 2013. Embora isso seja uma aspiração futura, destaca as possibilidades empolgantes que vemos para o mini-KVM.

#### Quais acessórios estão disponíveis para o Openterface Mini-KVM?
Oferecemos uma variedade de acessórios para melhorar sua experiência com o Openterface Mini-KVM. Confira nossa seção de [Acessórios](accessories.md) para mais detalhes sobre os produtos disponíveis, incluindo nosso Cabo Conversor VGA para HDMI.

--------

Sua curiosidade e apoio impulsionam nosso progresso, e queremos garantir que todas as suas perguntas encontrem uma resposta. Observe que, com o tempo, o conteúdo acima em nossas FAQs pode se tornar desatualizado. Se sua dúvida não for abordada nesta FAQ, sempre verifique nosso site [openterface.com](/) para as informações mais atualizadas. Além disso, não hesite em se juntar à nossa comunidade entusiasta. Estamos ativos no nosso Subreddit em [/r/Openterface_miniKVM/](/reddit) e no nosso servidor Discord, [TechxArtisan](/discord), onde você pode fazer perguntas, compartilhar ideias ou apenas bater um papo sobre tecnologia.

Além disso, sinta-se à vontade para entrar em contato diretamente com nossa equipe dedicada enviando um e-mail para info@techxartisan.com. Adoramos ouvir você e estamos sempre aqui para ajudar!