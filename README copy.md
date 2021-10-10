# Configurando Ambiente (Linux)
Source: [Tutorial Rocketseat](https://react-native.rocketseat.dev/android/linux#emulador)
## Instalando cURL (caso não esteja instalado):

```shell
sudo apt-get install curl
```
---
## Instalando Node.js:

```shell
curl -sL https://deb.nodesource.com/setup_14.x  sudo -E bash -
sudo apt-get install -y nodejs
```

- Verificando se a instalação foi feita com sucesso (execute um de cada vez):

    ```shell
    node -v
    npm -v
    ```

---
## Instalando o Yarn 1:
```shell
sudo npm install --global yarn
```
- Verificando a instalação:
    ```shell
    yarn -v
    ```
---
## Instalando JDK 11 (Java Development Kit):

```shell
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-11-jdk
```
---
## Instalando Librarys Gráficas:

```shell
sudo apt-get install gcc-multilib lib32z1 lib32stdc++6
```
----
## Instalando Android Studio
>Android Studio é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. 

### Preparativos Android Studio
- Crie uma pasta em um local desejado para instalação da SDK. Ex: ~/Android/Sdk

    > Anote esse caminho para ser utilizado posteriormente.

- Anote também o endereço de instalação do JDK 11. Exemplo:

    ```
    /usr/lib/jvm/java-11-openjdk-amd64
    ```

    Caso não tenha certeza do caminho, busque na pasta ``/usr/lib/jvm/`` pela pasta referente ao JDK 11, que provavelmente iniciará com java-11.


     - Com esses caminhos, precisamos configurar algumas variáveis ambiente em nosso sistema. Procure pelo primeiro dos seguintes arquivos existentes no seu sistema: ``~/.zshrc`` ou ``~/.bashrc``, e adicione essas seis linhas no arquivo (de preferência no início):

    <br>

    > Se nenhum desses arquivos existir, crie o ~/.bashrc caso utilize o Shell padrão ou ~/.zshrc caso utilize o ZSH.


    ```
    export JAVA_HOME=CAMINHO_ANOTADO_COM_SUA_VERSÃO
    export ANDROID_HOME=~/Android/Sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

    >Não esqueça de substituir o valor na linha ``JAVA_HOME`` pelo caminho que você anotou anteriormente. Além disso, caso esteja utilizando uma pasta diferente para a SDK do Android, altere acima.

## Instalando o Android Studio

Acesse a página do [Android Studio](https://developer.android.com/studio/) e clique no botão **Download Android Studio**.

Vá até a pasta de download e abra o arquivo **tar.gz**.

Esse arquivo deve possuir uma pasta **android-studio** dentro. Extraia essa pasta em um local de preferência (Ex.: ``~/``).

Após a extração, adicione a seguinte variável ambiente no seu sistema:

```
export PATH=$PATH:~/android-studio/bin
```

>A adição desse caminho possibilita a execução do Android Studio diretamente pelo terminal com o comando `studio.sh`. Caso tenha extraído em uma pasta diferente ou alterado o nome da pasta, ajuste o path acima para o que você utilizou.

Caso o comando `studio.sh` não funcione, abra o arquivo ``.bashrc`` novamente rodando o comando ``` code .bashrc ``` e adicione a váriavel anterior ao final do documento. 
<br>


![imagem](https://imgur.com/L2GK51s.jpg)
- Selecione a opção de instalação `Custom` e depois em `Next`

![imagem](https://imgur.com/77w8VvJ.jpg)
- Selecione a o endereço de instalação JDK que foi copiado anteriormente.

![imagem](https://imgur.com/strldtg.png)
- Caso o seu não esteja instalado por padrão, selecione todos os componentes abaixo para fazer update/instalação.

![imagem](https://imgur.com/WESnZ5R.jpg)
- Finalize a instalação e reinicie o Android Studio.

![imagem](https://imgur.com/WBPH9pN.jpg)


----

## Iniciando o Projeto

>Faça o Download do Starter Template [aqui](https://github.com/byprogrammers/LCRN16-food-delivery-app-lite-starter).

Após isso, rode ``npx install`` na root do projeto.

``yarn add react-native-reanimated@next``

``npx react-native link``

``npx react-native run-android``

``npx react-native start``


---
pasta ``navigation``: está a gaveta (menu)

