# 🤓 Swibly© Arkhon

A Swibly é uma empresa dedicada a criar soluções inovadoras por meio da tecnologia. Fundada com o propósito de transformar desafios complexos em oportunidades, a Swibly se destaca no mercado por sua abordagem centrada no cliente e foco constante em inovação.

## ⚙️ Rodando Localmente

### 🐨 Swibly / 🗿 Arkhon

> [!NOTE]  
> Ambos projetos (www.swibly.com.br e arkhon), podem ser rodados da mesma maneira.

Requisitos:

- `node`, versão mais recente testada: **22.3.0**
- `npm`, versão mais recente testada: **10.8.1**

> Todos os scripts são compatíveis com `yarn`, `pnpm`, `bun` ou similares.  
> Testados: yarn, pnpm, bun

#### Instalação

```bash
npm install
```

#### Configuração

1. Crie um arquivo `.env`, ou copie o esquema `.env.example` para `.env`;
2. Colocar as credenciais no arquivo.

```env
SWIBLY_API_KEY=<chave>
SWIBLY_API_BASE_URL=<url>
JWT_TOKEN_COOKIE_NAME=<nome>
```

#### Rodando o projeto

```bash
$ npm run dev

  VITE v4.5.5

  ➜ Local:   http://localhost:5173/
  ➜ Network: http://0.0.0.0:5173/
  ➜ press h to show help
```

Depois de rodar o projeto é só entrar no link [`http://localhost:5173`](http://localhost:5173)

### 🔐 API Swibly

> [!WARNING]  
> A instalação local, sem o uso de Docker, em sistemas que não sejam Linux não é recomendada e não foi testada. Recomenda-se o uso de Docker em ambientes que se enquadrem nesse contexto.

Requisitos:

- `go`, versão mais recente testada **1.23.1**

ou

- `docker`, versão mais recente testada **27.2.1**

#### Rodando com Docker (recomendado)

1. Certifique-se de que a imagem esteja em mãos utilizando: `docker pull devkcud/swibly-api:latest` (versão de produção) ou `docker pull swibly-api:develop` (versão de desenvolvimento);
2. Rodar a API com `docker run`;

```bash
docker run \
    --env POSTGRES_HOST=host \
    --env POSTGRES_DB=db \
    --env POSTGRES_USER=user \
    --env POSTGRES_PASSWORD=password \
    --env POSTGRES_SSLMODE=require \
    --env POSTGRES_PORT=port \
    --env JWT_SECRET=secret \
    -p 8080:8080 \
    devkcud/swibly-api:latest
```

> Para mais informações de como rodar com Docker veja o [`repositório no Docker Hub`](https://hub.docker.com/r/devkcud/swibly-api)

3. Se tudo der certo, a API deve estar rodando na porta **8080** da sua rede.

#### Instalação

```bash
go mod download
```

#### Compilação

> [!WARNING]  
> O script a seguir representa o processo de compilação em um ambiente Linux.

```bash
cd cmd/api
CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .
```

#### Configuração

1. Crie um arquivo `.env`, ou copie o esquema `.env.example` para `.env`;
2. Colocar as credenciais no arquivo.

```env
POSTGRES_HOST=host
POSTGRES_DB=db
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_SSLMODE=require
POSTGRES_PORT=5432
JWT_SECRET=secret
```

#### Rodando o projeto

```bash
# Supondo que esteja ainda no cmd/api
cd ../..
./cmd/api/main
```

Se tudo der certo, a API deve estar rodando na porta **8080** da sua rede.

---

Em caso de dúvidas, as Wikis devem ser consultadas:

- Wiki da API: [https://github.com/swibly/swibly-api/wiki](https://github.com/swibly/swibly-api/wiki)
- Wiki da API (Docker): [https://hub.docker.com/r/devkcud/swibly-api](https://hub.docker.com/r/devkcud/swibly-api)
