# GO Swap Dashboard

GO Swap Dashboard é uma aplicação web moderna para visualização e interação com dados de swaps, liquidez, tokens e estatísticas de redes blockchain. O projeto foi desenvolvido com React, Vite e TypeScript, focando em responsividade e experiência do usuário.

## Funcionalidades
- Visualização de estatísticas de swaps, liquidez, taxas e usuários
- Listagem e busca de tokens
- Cards interativos para cada token
- Modo claro/escuro
- Menu lateral responsivo com ícones
- Layout adaptado para desktop e mobile

## Tecnologias Utilizadas
- React
- TypeScript
- Vite
- CSS customizado
- React Icons

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse no navegador:
   [http://localhost:5173](http://localhost:5173)

## Build para produção
```bash
npm run build
```
Os arquivos finais estarão na pasta `dist/`.

## Estrutura de Pastas
```
GO_swap_dashboard/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── tokenPage.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## Responsividade
O dashboard é totalmente responsivo, adaptando o layout para diferentes tamanhos de tela, incluindo smartphones.

## Licença
Este projeto é open source e pode ser utilizado livremente.
