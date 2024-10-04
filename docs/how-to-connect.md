# Como Conectar

## Interfaces

![host-side](images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Porta USB-C do Host** (Fêmea): Porta de dispositivo USB, conectando ao computador Host para transferência de dados via hub USB integrado.

② ![Type-C to Target](images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Porta USB-C do Alvo** (Fêmea): Porta de dispositivo USB, conectando ao computador Host para emular saída de teclado e mouse HID via hub USB integrado.

③ ![HDMI Input](images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Porta de Entrada HDMI** (Fêmea): Entrada de fonte HDMI do computador Alvo.

④ ![USB-A Port](images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Porta USB-A 2.0 Comutável** (Fêmea): Porta host USB, utilizada pelo computador host ou pelo computador alvo em um dado momento, mas não simultaneamente.

!!! aviso "Ajuste Apertado"
    Observe que esta porta USB-A fêmea possui um mecanismo de travamento, que requer um pouco mais de força para conectar e desconectar seus dispositivos USB.

⑤ ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interruptor de Alternância**: Para alternar a conexão da porta USB-A 2.0 entre o computador host e o computador alvo.

⑥ ![Extension Pins](images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Pinos de Extensão**: Para mais informações, consulte [Pinos de Extensão](/extension-pin) para uso de desenvolvedores.

## Passos de Conexão

![to-host](images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](images/product/to-target_1.svg#only-dark){:style="height:260px"}

Para configurar seu Mini-KVM, siga estes passos na ordem:

1. **Conexão do Computador Host** (Lado Laranja):
    - Conecte o computador host ao mini-KVM usando o cabo USB Tipo-C laranja de 1,5m. Conecte-o à porta USB-C fêmea no lado laranja do mini-KVM.

    !!! nota "Aplicativo do Host Necessário"
        O computador host precisa ter o aplicativo do host instalado. Para mais informações e links de download, consulte a [Documentação do Aplicativo](/app).

2. **Conexão do Dispositivo Alvo** (Lado Preto):
    - Conecte o dispositivo alvo ao mini-KVM usando o cabo USB Tipo-C preto de 0,3m. Conecte-o à porta USB-C fêmea no lado preto do mini-KVM.

3. **Conexão de Saída de Vídeo do Alvo** (Lado Preto):
    - Conecte a porta de saída de vídeo do dispositivo alvo à porta HDMI fêmea no lado preto do mini-KVM. Use o cabo HDMI preto de 0,3m, ou qualquer outro cabo de fonte de vídeo para HDMI apropriado, como um cabo conversor VGA para HDMI.

    !!! nota "Nenhum Aplicativo Necessário para o Alvo"
        Não é necessária pré-instalação ou configuração no dispositivo alvo. Desde que o dispositivo alvo suporte operações de interface de usuário com saída de vídeo (HDMI, VGA, etc.) e tenha uma porta USB para receber sinais emulados de controle de teclado e mouse (HID), ele pode ser usado. Assim, as plataformas de dispositivos alvo suportadas incluem Windows, macOS, Linux, Android e iOS.

4. **Conexão da Porta USB-A 2.0 Comutável** (Opcional):
    - Se você quiser conectar um dispositivo USB à Porta USB-A 2.0 Comutável, é recomendado fazê-lo após completar as três conexões acima e garantir que o aplicativo do host esteja aberto.

