# Amigo Secreto

Este projeto é uma aplicação web simples para sortear amigos secretos. O principal objetivo deste desafio é fortalecer habilidades em lógica de programação.

## Funcionalidades

- Adicionar amigos à lista
- Listar amigos adicionados
- Sortear um amigo secreto aleatoriamente

## Como Usar

1. Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/seu-usuario/amigo-secreto.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd amigo-secreto
    ```

3. Abra o arquivo [index.html](http://_vscodecontentref_/0) no seu navegador preferido.

## Estrutura do Projeto

- [index.html](http://_vscodecontentref_/1): Contém a estrutura HTML da aplicação.
- [app.js](http://_vscodecontentref_/2): Contém a lógica JavaScript para adicionar amigos, listar amigos e sortear um amigo secreto.
- [style.css](http://_vscodecontentref_/3): Contém os estilos CSS para a aplicação.

## Como Funciona

### Adicionar Amigo

1. Digite o nome do amigo no campo de texto.
2. Clique no botão "Adicionar".
3. O nome será adicionado à lista de amigos e exibido na página.

### Listar Amigos

A lista de amigos é atualizada automaticamente sempre que um novo amigo é adicionado.

### Sortear Amigo

1. Clique no botão "Sortear amigo".
2. Um nome será sorteado aleatoriamente da lista de amigos e exibido na página.

## Exemplo de Código

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagem representativa de amigo secreto">
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>
           
            <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>