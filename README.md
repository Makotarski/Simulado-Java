# Simulado TOFAS — 1º Ano

Simulado estático para GitHub Pages, com 30 questões em 3 níveis, pontuação máxima de 31 pontos e bloqueio antitrapaça.

## Arquivos

- `index.html`: página principal
- `style.css`: aparência responsiva
- `questions.js`: banco com as 30 questões
- `app.js`: funcionamento, pontuação e bloqueio
- `config.js`: URL do coletor de resultados
- `google-apps-script.gs`: coletor para o Google Planilhas

## Publicar no GitHub Pages

1. Envie os seis arquivos para a raiz do repositório.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main`, pasta `/ (root)` e salve.

## Enviar resultados ao Google Planilhas

1. Crie ou abra uma Planilha Google.
2. Acesse **Extensões → Apps Script**.
3. Cole o conteúdo de `google-apps-script.gs` e salve.
4. Clique em **Implantar → Nova implantação → Aplicativo da Web**.
5. Execute como você e permita acesso para qualquer pessoa com o link.
6. Copie a URL terminada em `/exec` e cole entre as aspas de `config.js`.

## Bloqueio antitrapaça

Depois que a prova começa, clicar com o botão direito, trocar de aba, minimizar ou tirar o foco da janela bloqueia a tentativa. A tela exibe uma caveira central e registra o motivo na planilha, quando o coletor está configurado.
