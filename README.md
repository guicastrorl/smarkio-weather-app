# smarkio-weather-app

Node API + MySQL

### API utilizada:

[OpenWeatherMap](https://openweathermap.com)

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

### 3 - Baixe as dependências necessárias para rodar o projeto:
```
npm install
```

### 3 - Conecte ao MySQL
- Fazer download do MySQL pelo link: [MySQL](https://www.mysql.com/downloads/)
- Criar uma conta no Mysql
Checar usuário MySQL -> No cmd, digite: mysql -h localhost -u root -p. Password = admin
criar o banco de dados "historico";
```
CREATE DATABASE historico;
```
```
USE historico;
```

### 4 - Execute a linha 12 do arquivo "Post.js" que está na pasta "models" apenas na primeia vez que rodar o arquivo app.js, depois, comente-a com "//historics.sync({ force: true })"

### 5 - Carregue o frontend:
```
npm start
```

### 6 - Entre no endereço: https://localhost:3000

Obs: possiveis falhas
- Conexão com banco de dados;
- Só atualiza banco de dados com o atualizar.
