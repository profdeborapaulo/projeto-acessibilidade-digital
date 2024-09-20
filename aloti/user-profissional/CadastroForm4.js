    function editText(elementId) {
        // Obtém o parágrafo pelo ID
        var textElement = document.getElementById(elementId);

        // Cria um campo de entrada
        var inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.value = textElement.innerText;

        // Substitui o parágrafo pelo campo de entrada
        textElement.parentNode.replaceChild(inputElement, textElement);

        // Adiciona um listener para quando o input perder o foco, salvar as mudanças
        inputElement.addEventListener("blur", function() {
            // Salva o texto atualizado de volta ao parágrafo
            textElement.innerText = inputElement.value;

            // Substitui o campo de entrada pelo parágrafo novamente
            inputElement.parentNode.replaceChild(textElement, inputElement);
        });
    }
  

   function Adicionar(){
    window.location.href = 'CadastroAdd.html';
    }

    function addNewLicense() {
    // Obtém o valor do novo campo de entrada
    var newLicenseName = document.getElementById("newLicense").value;
    window.location.href = 'CadastroAdd.html';

    // Verifica se o campo não está vazio
    if (newLicenseName.trim() === "") {
        alert("Por favor, insira o nome da licença ou certificado.");
        return;
    }

    // Cria uma nova div para a licença ou certificado
    var newDiv = document.createElement("div");
    newDiv.classList.add("Especializacao");

    // Cria o ícone
    var iconDiv = document.createElement("div");
    iconDiv.classList.add("Especializacaoimg");
    var iconImg = document.createElement("img");
    iconImg.classList.add("medal");
    iconImg.src = "img/medal.svg"; // Mude o ícone conforme necessário
    iconDiv.appendChild(iconImg);

    // Cria o parágrafo com o nome da licença ou certificado
    var newText = document.createElement("p");
    newText.innerText = newLicenseName;

    // Cria o botão de edição
    var editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = '<img src="img/edit.svg" alt="">';
    editButton.onclick = function () {
    window.location.href = 'CadastroEdite.html';
    
    };

    // Cria o botão de excluir
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = function () {
        deleteLicense(deleteButton);
    };

    // Adiciona o ícone, texto, botão de edição e botão de excluir à nova div
    newDiv.appendChild(iconDiv);
    newDiv.appendChild(newText);
    newDiv.appendChild(editButton);
    newDiv.appendChild(deleteButton);

    // Adiciona a nova div à lista de licenças e certificados
    var contentDiv = document.querySelector(".content1 .Especializacao:last-of-type").parentElement;
    contentDiv.appendChild(newDiv);

    // Limpa o campo de entrada
    document.getElementById("newLicense").value = "";
}

function deleteLicense(button) {
    // Remove o elemento pai (div .Especializacao) do botão clicado
    button.parentElement.remove();
}

    