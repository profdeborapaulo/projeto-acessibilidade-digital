// Este código escuta as mudanças no estado de autenticação do Firebase
firebase.auth().onAuthStateChanged((user) => {
  // A função é chamada sempre que o estado de autenticação muda
  if (user) {
    var globalUserId = user.uid;
    console.log("Usuário logado: " + globalUserId);
    getUserData(globalUserId);
    mostrarDadosAuth(user);
    mostrarFavoritos(globalUserId);
    pesquisarComentarios(globalUserId);
    localStorage.setItem("idUsuario", globalUserId);
  } else {
    // Se não houver usuário logado, exibe uma mensagem no console
    console.log("Nenhum usuário logado.");
  }
});

// Função para obter dados do usuário no Firestore usando o UID
function getUserData(globalUserId) {
  const userRef = firebase.firestore().collection("users").doc(globalUserId); // Referência ao documento do usuário na coleção 'users'

  userRef
    .get() // Obtém os dados do documento
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data(); // Se o documento existir, obtém os dados
        mostrarDadosFirestore(userData); // Chama a função para mostrar os dados na interface
      } else {
        console.log(globalUserId); // Exibe o UID se o documento não for encontrado
        console.log("Nenhum documento encontrado!"); // Mensagem caso não exista o documento
      }
    })
    .catch((error) => {
      console.error("Erro ao obter documento:", error); // Exibe erro caso ocorra um problema ao buscar os dados
    });
}

// Função para exibir dados do usuário na tela
function mostrarDadosFirestore(userData) {
  document.getElementById("nome_usuario").innerHTML = userData.nome_crianca; // Mostra o nome do adulto na interface
  document.getElementById("nome_crianca").innerHTML = userData.nome_crianca; // Mostra o nome da criança na interface
  document.getElementById("nome_adulto").innerHTML = userData.nome_adulto; // Mostra novamente o nome do adulto (opcional)
  document.getElementById("nome_trocar").placeholder = userData.nome_crianca; // Define o placeholder com o nome da criança
  document.getElementById("nome_trocar").value = userData.nome_crianca; // Define o valor do campo com o nome da criança
}

// Função para mostrar dados de autenticação na tela
function mostrarDadosAuth(user) {
  document.getElementById("email_trocar").placeholder = user.email; // Define o placeholder com o e-mail do usuário logado
  document.getElementById("email_trocar").value = user.email; // Define o valor do campo com o e-mail do usuário logado
}

// Função para apagar a conta do usuário autenticado e seus dados no Firestore
function apagandoUsuario() {
  const user = firebase.auth().currentUser; // Obtém o usuário atualmente autenticado

  user
    .delete() // Tenta deletar a conta do usuário autenticado
    .then(() => {
      alert("Conta deletada"); // Mensagem de sucesso ao deletar a conta
      logout(); // Chama a função de logout após deletar a conta
    })
    .catch((error) => {
      alert("Ocorreu um erro: " + error.code); // Mensagem de erro se falhar ao deletar a conta
      // ...
    });

  const userRef = firebase.firestore().collection("users").doc(globalUserId); // Referência ao documento do usuário no Firestore

  userRef
    .delete() // Tenta deletar os dados do usuário no Firestore
    .then(() => {})
    .catch((error) => {
      alert("Não apagou do banco"); // Mensagem de erro se falhar ao deletar os dados no Firestore
    });
}

// Função para mudar os dados do usuário e, opcionalmente, redefinir a senha
function mudarDados() {
  const globalUserId = localStorage.getItem("idUsuario");
  const userRef = firebase.firestore().collection("users").doc(globalUserId); // Referência ao documento do usuário no Firestore

  const nome_mudanca = document.getElementById("nome_trocar").value; // Obtém o novo nome da criança a partir da interface
  // Obtém a nova senha (se fornecida)

  userRef
    .update({
      nome_crianca: nome_mudanca, // Atualiza o nome da criança no Firestore
    })
    .then(() => {
      alert("Dados do usuário modificados com sucesso"); // Mensagem de sucesso ao atualizar os dados
    });
}

function mostrarFavoritos(globalUserId) {
  const userRef = firebase.firestore().collection("users").doc(globalUserId);
  const favoritoRef = userRef.collection("favoritos");

  favoritoRef
    .get()
    .then((doc) => {
      doc.forEach((data) => {
        var info = data.data();
        console.log(info);
        mostrarFavoritosHtml(info);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function mostrarFavoritosHtml(lugar) {
  var lugarSection = document.createElement("div");
  lugarSection.classList.add("lugar");
  lugarSection.innerHTML = `
          <img src="${lugar.photos}" style="  width: 250px;
  border-radius: 8px;
  height:180px;
  margin-top: 15px;" class="imagem-lugar" alt="">
          <p class="p-titulo-lugar">${lugar.name}</p>
          <div class="estrelas">
            <box-icon name='star' type='solid' color='#fcc803'></box-icon>
            <box-icon name='star' type='solid' color='#fcc803'></box-icon>
            <box-icon name='star' type='solid' color='#fcc803'></box-icon>
            <box-icon name='star' color='#fcc803'></box-icon>
            <box-icon name='star' color='#fcc803'></box-icon>
          </div>
        </div>
  `;

  // Adiciona um evento de clique para redirecionar
  lugarSection.addEventListener("click", () => {
    const address = lugar.formatted_address || "Endereço não disponível";
    const phone = lugar.formatted_phone_number || "Telefone não disponível";
    // Redireciona para a página de detalhes
    window.location.href =
      "../../pagina-lugar/pagina_lugarFiltro.html?uid=" + lugar.id;
  });

  // Adiciona o lugar ao contêiner com o ID 'campo-locais'
  document.getElementById("campo-locais").appendChild(lugarSection);
}

var idUsuario = localStorage.getItem("idUsuario");
console.log(idUsuario);

async function pesquisarComentarios(idUsuario) {
  try {
    const userRef = firebase.firestore().collection("lugares");
    const lugaresSnapshot = await userRef.get();

    for (const lugarDoc of lugaresSnapshot.docs) {
      const idLugar = lugarDoc.id;
      console.log(idLugar);

      const refComentarios = userRef.doc(idLugar).collection("comentarios");
      const comentariosSnapshot = await refComentarios
        .where("usuarioID", "==", idUsuario)
        .get();

      if (comentariosSnapshot.empty) {
        console.log("Não há comentários para este usuário.");
      } else {
        comentariosSnapshot.forEach((comentarioDoc) => {
          const data = comentarioDoc.data();
          const key = comentarioDoc.id;
          console.log(data);
          mostrarComentario(data, key);
        });
      }
    }
  } catch (error) {
    console.error("Erro ao pesquisar comentários:", error);
  }
}
function mostrarComentario(usuario, key) {
  var comentarioCampo = document.createElement("div");
  comentarioCampo.classList.add("comentario-perfil");
  comentarioCampo.setAttribute("data-key", key); // Adiciona um atributo para identificação
  document.getElementsByClassName("grupo-comentarios")[0].appendChild(comentarioCampo);

  comentarioCampo.innerHTML = `
        <h3>${usuario.titulo}</h3>
        <div class="usuario-comentario">
          <img src="./img/user.svg" alt="Foto de perfil">
          <div class="usuario-data">
            <p class="nome-user">${usuario.author}</p>
            <p class="data">${usuario.data}</p>
          </div>
          <img src="img/lixo (1).png" id="excluir" onclick="excluirComentario('${usuario.idLugar}','${key}', this)" alt="lixeira">
        </div>
      </div>`;
}

async function excluirComentario(idLugar, idComent, elemento) {
  console.log(idLugar);
  console.log(idComent);
  try {
    const userRef = firebase
      .firestore()
      .collection("lugares")
      .doc(idLugar)
      .collection("comentarios")
      .doc(idComent);
      
    await userRef.delete();

    // Remove o comentário da tela
    const comentarioDiv = elemento.closest('.comentario-perfil'); // Encontra o elemento pai
    if (comentarioDiv) {
      comentarioDiv.remove(); // Remove do DOM
    }

    // Se quiser recarregar os comentários, descomente a linha abaixo:
    // carregarComentariosNovamente();
    
  } catch (error) {
    console.error("Erro ao excluir comentário:", error);
  }
}

function carregarComentariosNovamente() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var globalUserId = user.uid;
      console.log("Usuário logado: " + globalUserId);
      pesquisarComentarios(globalUserId);
    } else {
      console.log("Nenhum usuário logado.");
    }
  });
}