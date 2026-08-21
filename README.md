# Simulado TOFAS — GitHub Pages

## Publicar no GitHub

1. Crie um repositório novo no GitHub.
2. Envie **todos os arquivos desta pasta** para a raiz do repositório.
3. No repositório, abra **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main`, pasta `/ (root)` e clique em **Save**.
6. Aguarde o GitHub mostrar o endereço público.

## Salvar os resultados no Google Planilhas

1. Crie uma Planilha Google vazia e acesse **Extensões > Apps Script**.
2. Cole no editor o conteúdo do arquivo `google-apps-script.gs`.
3. Clique em **Implantar > Nova implantação > Aplicativo da Web**.
4. Em “Executar como”, selecione **Eu**. Em “Quem pode acessar”, selecione **Qualquer pessoa**.
5. Autorize e copie a URL terminada em `/exec`.
6. Abra `config.js` e substitua `COLE_AQUI_A_URL_DO_APPS_SCRIPT` pela URL.
7. Envie o `config.js` atualizado ao GitHub.

As respostas aparecerão automaticamente na aba **Resultados** da planilha.
