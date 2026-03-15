# Random Numbers

Aplicação web para sorteio de números com interface responsiva, validação de entradas e animações com GSAP.

## Requisitos

- Node.js 18+
- pnpm 10+

## Instalação

```bash
pnpm install
```

## Como rodar

Este projeto não usa bundler para JavaScript. O arquivo `main.js` é carregado como módulo no `index.html`, e o CSS é gerado pelo Tailwind CLI.

### 1) Gerar o CSS uma vez

```bash
pnpm build
```

### 2) (Opcional) Rodar watch de CSS durante desenvolvimento

Em outro terminal:

```bash
pnpm dev
```

## Como visualizar no navegador

Use um servidor estático (não abra o HTML via `file://`).

### Opção A: Five Server (VS Code)

1. Abra o projeto no VS Code.
2. Inicie o Five Server no arquivo `index.html`.
3. O navegador será aberto automaticamente com live reload.

### Opção B: Servidor HTTP simples

Se preferir, rode qualquer servidor estático na raiz do projeto e abra o `index.html` pela URL local.

Exemplo com Python:

```bash
python3 -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

## Scripts disponíveis

- `pnpm build`: gera `styles.css` a partir de `input.css`
- `pnpm dev`: gera `styles.css` em modo watch

## Estrutura principal

- `index.html`: estrutura da página
- `main.js`: ponto de entrada JS
- `scripts/`: lógica de sorteio, validação e animações
- `input.css`: arquivo fonte do Tailwind
- `styles.css`: CSS gerado
- `public/`: fontes, imagens e ícones
