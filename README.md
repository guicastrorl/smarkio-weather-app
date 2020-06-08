# smarkio-weather-app

Node API + MySQL

### API utilizada:

- [OpenWeatherMap](https://openweathermap.com)

### Descrição:

A interface retorna os dados de previsão do tempo, umidade e temperatura, mostra o histórico de buscas em tempo real e mostra o histórico de cidades que foram mais pesquisadas.

### Instruções para execução do projeto:

### 1 - Crie um diretório em sua máquina para clonar o projeto e depois entre nele:
```
mkdir nome
```
```
cd nome
```

### 2 - Clone o projeto no diretório que acabou de criar executando o comando:
```
git clone https://github.com/guicastrorl/smarkio-weather-app
```

### 3 - Excute o comendo para entrar na pasta do app:
```
cd smarkio-weather-app
```

### 4 - Baixe as dependências necessárias para rodar o projeto:
```
npm install
```

### 5 - Conecte ao MySQL
- Fazer download do MySQL pelo link: [MySQL](https://www.mysql.com/downloads/);
- Criar uma conta no Mysql;
- Configurar a variavel de ambiente path: " C:\Program Files\MySQL\MySQL Server 8.0\bin";
- Checar usuário MySQL -> No cmd, digite: mysql -h localhost -u root -p Qwerty123;
- Excutar os seguintes comandos:
```
CREATE DATABASE historico;
```
```
USE historico;
```
Obs: Chueque se realmente está usando o database que acabou de criar.
### 7 - Carregue o frontend:
*Execute a linha 12 do arquivo "./models/Post.js" apenas na primeia vez que rodar o arquivo "app.js", depois, comente-a com "//historics.sync({ force: true })"*
```
npm start
```

Obs: Caso não excute esse comando no prompt de comando, execute o passo 3 no terminal do Visual Studio Code e depois continue a partir do passo 7.

### 8 - Entre no endereço: https://localhost:3000

### Possíveis falhas:
- Conexão com banco de dados;
- Só atualiza banco de dados com o atualizar.
