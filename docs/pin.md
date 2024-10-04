# Guia dos Pinos de Extensão

![change-cap](images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](images/product/change-cap_1.svg#only-dark){:style="height:300px"}

O Openterface Mini-KVM possui pinos de extensão para desenvolvimento avançado e experimentação com [Software Aberto](/app). Esses pinos não são expostos na configuração padrão do case.

### Acessando os Pinos de Extensão para Desenvolvimento

Para acessar os pinos de extensão:

1. Desmonte o dispositivo
2. Substitua a tampa original do case por uma tampa especializada para Pinos de Extensão
3. Baixe o modelo 3D da tampa para Pinos de Extensão do nosso [repositório no GitHub](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)

!!! aviso "Perda de Garantia"
    Remover o case original anula a garantia do produto. Todas as modificações ou desmontagens são realizadas por conta e risco do usuário.

!!! nota "Recursos Experimentais"
    Os recursos desenvolvidos usando esses pinos são experimentais e não foram totalmente testados. A Openterface não se responsabiliza por qualquer dano, lesão ou mau funcionamento resultante de modificações, exposição dos pinos de extensão ou outras alterações no dispositivo.

### Layout dos Pinos

![target-side](images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Os pinos de extensão fornecem as seguintes conexões:

1. Alimentação USB 5V para componentes externos
2. Dados positivos para o hub USB do host
3. Dados negativos para o hub USB do host
4. Dados positivos para o hub USB do alvo
5. Dados negativos para o hub USB do alvo
6. Terra

!!! perigo "Conexões Incorretas"
    Trocar VCC e GND pode causar danos graves ao dispositivo e aos componentes conectados. Sempre verifique as conexões dos pinos antes de ligar o dispositivo.
