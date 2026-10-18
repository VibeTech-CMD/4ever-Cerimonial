# 4EVER Cerimonial

Site institucional responsivo da 4EVER Cerimonial, feito com React, TypeScript e Vite. O projeto está preparado para teste local e publicação pelo GitHub Pages usando GitHub Actions.

## Publicar pelo GitHub (sem instalar programas no computador)

1. Entre no GitHub e crie um repositório novo.
2. Envie os arquivos e pastas deste projeto para a raiz do repositório (não envie o ZIP como único arquivo).
3. Abra **Settings → Pages** no repositório. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
4. Abra a aba **Actions** e acompanhe o fluxo **Publicar site no GitHub Pages**. Ele instala as dependências, verifica os tipos, gera o site e publica a pasta `dist`.
5. Quando o fluxo terminar com sucesso, abra o endereço mostrado no job de publicação ou em **Settings → Pages**.

O fluxo é executado automaticamente quando há um `push` para a branch `main` ou `master`, e também pode ser iniciado manualmente em **Actions**.

## Executar localmente (opcional)

Requer Node.js 22 e npm. Dentro da pasta do projeto, execute:

```bash
npm ci
npm run dev
```

Para validar antes de publicar:

```bash
npm run typecheck
npm run build
```

## Arquivos importantes

- `src/App.tsx`: estrutura e conteúdo do site.
- `src/index.css`: estilos e responsividade.
- `src/assets/`: imagens e identidade visual.
- `vite.config.ts`: configuração do Vite com caminhos relativos para GitHub Pages.
- `.github/workflows/deploy.yml`: automação de validação e publicação.

## Contatos configurados

- WhatsApp: +55 (22) 99884-1987 — https://wa.me/5522998841987
- E-mail: 4everceremonial@gmail.com
- Instagram: https://www.instagram.com/4ever__cerimonial?igsh=cDExOXJldGNkOXVm

## Formulário

O formulário monta uma mensagem e abre o WhatsApp. Não existe backend nem envio automático de dados: a pessoa visitante revisa e envia a mensagem pelo WhatsApp.

## Antes de publicar

- Confira os textos, os contatos e os links no site.
- Revise os escopos dos pacotes para garantir que correspondem aos serviços reais.
- As imagens da galeria são referências visuais, não comprovação de eventos realizados pela equipe.
- A publicação pelo GitHub Pages só estará disponível depois que o repositório for enviado à sua conta e o fluxo do GitHub Actions terminar com sucesso.
