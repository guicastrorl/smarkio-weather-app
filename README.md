# smarkio-weather-app

Node API + MySQL

### API utilizada:

[OpenWeatherMap](https://openweathermap.com)

### Descrição:

A interface retorna os dados de previsão do tempo, umidade e temperatura, mostra o histórico de buscas em tempo real e mostra o histórico de cidades que foram mais pesquisadas.

### Instruções para execução do projeto:

1 - Crie um diretório em sua máquina para clonar o projeto e depois entre nele:
```
mkdir nome
```
```
cd nome
```

2 - Clone o projeto no diretório que acabou de criar executando o comando:
```
git clone https://github.com/guicastrorl/smarkio-weather-app
```

3 - Baixe as dependências necessárias para rodar o projeto:
```
npm install
```

4 - Carregue o frontend:
```
node app.js
```

5 - Conecte ao MySQL
fazer download mysql
criar uma conta
criar o banco de dados "historico";
```
CREATE DATABASE historico;
```
```
USE historico;
```
Checar usuário MySQL -> No cmd, digite: mysql -h localhost -u root -p. Password = admin
a linha xx só deve ser executada na primeira vez, depois, é necessário comentá-la.

Obs: possiveis falhas
- conexão com bd
- só atualiza bd com o botão de atualizar
