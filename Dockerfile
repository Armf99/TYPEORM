# Use a imagem base do Node.js
FROM node:latest

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho


# Instala as dependências
RUN npm install

# Copia apenas os arquivos necessários para a aplicação


# Executa o script de build
RUN npm run build

# Expõe a porta na qual a aplicação será executada
EXPOSE 3000

# Comando para executar a aplicação
CMD npm start
