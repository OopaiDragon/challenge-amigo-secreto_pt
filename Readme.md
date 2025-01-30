# Desafio do amigo secreto
Desafio proposto no programa de formação **Oracle ONE**.  
Este projeto é um **fork** do repositório [challenge amigo secreto](https://github.com/Oracle-Next-Education/challenge-amigo-secreto_pt).
## 📌 Funcionalidades
- ✅ Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
- ✅ Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
- ✅ Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
- ✅ Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
- ✅ Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
- ✅Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
- ✅Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
- ✅Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
- ✅Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
- ✅Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
- ✅Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
- ✅Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
- ✅Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
## 🛠 Tecnologias
As seguintes tecnologias foram usadas no projeto:
- 🔹 HTML5
- 🔹 CSS3
- 🔹 JavaScript