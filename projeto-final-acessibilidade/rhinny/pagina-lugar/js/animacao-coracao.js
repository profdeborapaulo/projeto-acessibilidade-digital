firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    const favoritoRef = db.collection("users").doc(uid).collection('favoritos');
    favoritoRef.doc(url).get().then((doc) => {
      if(doc.exists){
        heartIcon.classList.add('filled');
        heartIcon.src = './img/Heart-filled.svg';        
      }else{  
        heartIcon.classList.remove('filled');
        heartIcon.src = './img/Heart.svg'; // Muda a imagem para o coração não preenchido
      }
    }).catch((error) => {
      console.log(error)
    })
  }})


// Seleciona o ícone de coração e a imagem do ícone
const heartIcon = document.querySelector('#favoritar');
// Adiciona um evento de clique ao ícone de coração
heartIcon.addEventListener('click', () => {
  // Verifica se o ícone já está preenchido
  if (heartIcon.classList.contains('filled')) {
    // Se já estiver preenchido, remove a classe 'filled'
    heartIcon.classList.remove('filled');
    heartIcon.src = './img/Heart.svg'; // Muda a imagem para o coração não preenchido
    document
    .getElementsByClassName("heart-icon")[0]
    .addEventListener("click", () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          const favoritoRef = db.collection("users").doc(uid).collection('favoritos');
          favoritoRef.doc(url).get().then((doc) => {
            if(doc.exists){
              favoritoRef.doc(url).delete()
              .then(() => {
                console.log("tirado do favorito");
              })
              .catch((error) => {
                console.log(error);
              })
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      })
      //
      ;
    });
  } else {
    // Se não estiver preenchido, adiciona a classe 'filled'
    heartIcon.classList.add('filled');
    heartIcon.src = './img/Heart-filled.svg';

    var photoLugar = document.getElementById('praca-boulevard').src
    var name = document.getElementsByClassName("titulo-local")[0].innerText


      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          const favoritoRef = db
            .collection("users")
            .doc(uid)
            .collection("favoritos");
          favoritoRef
            .doc(url)
            .get()
            .then((doc) => {
              if (!doc.exists) {
                favoritoRef
                  .doc(url)
                  .set({
                    photos: photoLugar,
                    name: name,
                    id: url,
                  })
                  .then(() => {
                    console.log("Favoritado");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
    }});