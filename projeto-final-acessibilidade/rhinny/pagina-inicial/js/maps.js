let map;

function initMap(lat, long) {
  const userLocation = { lat: lat, lng: long };
  console.log(userLocation); // Coordenadas do usuário
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: userLocation,
  });

  // Inicia a busca de lugares próximos após a inicialização do mapa
  findNearbyPlaces(userLocation);
}

function searchPlaceByName(name) {
  const request = {
    query: name,
    fields: ['name', 'geometry'],
  };

  const service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
      const place = results[0];
      const userLocation = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
      map.setCenter(userLocation);
      findNearbyPlaces(userLocation); // Busca lugares próximos
    } else {
      console.error("Erro ao buscar o lugar:", status);
    }
  });
}

function findNearbyPlaces(location) {
  const request = {
    location: location,
    radius: "2000", // Raio em metros
    types: ["park", "shopping_mall", "amusement_park", "zoo"], // Tipos de lugares
  };

  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      document.getElementById("campo-locais").innerHTML = ""; // Limpa resultados anteriores
      results.forEach(place => {
        getPlaceDetails(place);
      });
    } else {
      console.error("Erro ao buscar lugares próximos:", status);
    }
  });
}

function getPlaceDetails(place) {
  const service = new google.maps.places.PlacesService(map);
  service.getDetails({ placeId: place.place_id }, (details, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      criarTabelaMapa(details);
    } else {
      console.error("Erro ao obter detalhes do lugar:", status);
    }
  });
}

function criarTabelaMapa(lugar) {
  var lugarSection = document.createElement("section");
  lugarSection.classList.add("card");
  lugarSection.innerHTML = ``
  document.getElementById("campo-locais").appendChild(lugarSection);

  lugarSection.innerHTML = `
    <div class="grupo-locais" data-name="${lugar.name}" data-address="${lugar.formatted_address || ''}" data-phone="${lugar.formatted_phone_number || ''}">
      <img src="${lugar.photos && lugar.photos.length > 0 ? lugar.photos[0].getUrl({ width: 500, height: 150 }) : './img/default.jpg'}" class="img-lugar" alt="${lugar.name}" />
      <div class="text-locais">
        <p class="titulo-locais">${lugar.name}</p>
        <div class="estrelas">
          <box-icon name="star" type="solid" color="#fcc803"></box-icon>
          <box-icon name="star" type="solid" color="#fcc803"></box-icon>
          <box-icon name="star" type="solid" color="#fcc803"></box-icon>
          <box-icon name='star' color='#fcc803'></box-icon>
          <box-icon name='star' color='#fcc803'></box-icon>
        </div>
      </div>
    </div>
  `;

  // Adiciona um evento de clique para redirecionar
  lugarSection.addEventListener("click", () => {
    const address = lugar.formatted_address || "Endereço não disponível";
    const phone = lugar.formatted_phone_number || "Telefone não disponível";
    
    // Armazena informações no localStorage
    localStorage.setItem("lugarInfo", JSON.stringify({
      name: lugar.name,
      address: address,
      phone: phone,
      photo: lugar.photos && lugar.photos.length > 0 ? lugar.photos[0].getUrl({ width: 500, height: 150 }) : './img/default-image.svg',
    }));

    // Redireciona para a página de detalhes
    window.location.href = "../../pagina-lugar/pagina-lugar.html?uid="+lugar.place_id;
  });
  
  // Adiciona o lugar ao contêiner com o ID 'campo-locais'
  document.getElementById("campo-locais").appendChild(lugarSection);
}

// Função para obter geolocalização do usuário
function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        initMap(lat, long); // Inicializa o mapa com a localização do usuário
      },
      () => handleLocationError(true)
    );
  } else {
    handleLocationError(false);
  }
}

// Função para tratar erros de geolocalização
function handleLocationError(browserHasGeolocation) {
  console.error(
    browserHasGeolocation
      ? "Erro: O serviço de geolocalização falhou."
      : "Erro: Seu navegador não suporta geolocalização."
  );
}

// Chama a função de geolocalização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", getGeolocation);

// Adiciona evento para buscar lugar pelo nome inserido
document.getElementById("search").addEventListener("click", () => {
  const placeName = document.getElementById("campo-pesquisa").value; // Campo onde o nome do lugar é inserido
  searchPlaceByName(placeName); // Chama a função de pesquisa pelo nome
});

    // Função para detectar checkboxes ativos
// Função para obter checkboxes ativos
function obterCheckboxesAtivos() {
  const filtrosAtivos = [];
  
  // Verifica cada checkbox e adiciona à lista se estiver marcado
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      filtrosAtivos.push(checkbox.className); // Adiciona o ID do checkbox ativo
    }
  });
  
  return filtrosAtivos;
}

function obterCheckboxesPai() {
  const filtrosAtivos = [];
  
  // Verifica cada checkbox e adiciona à lista se estiver marcado
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      filtrosAtivos.push(checkbox.dataset.value); // Adiciona o ID do checkbox ativo
    }
  });
  
  return filtrosAtivos;
}

// Função para buscar lugares no Firestore
async function buscarLugares() {
  const filtrosAtivos = obterCheckboxesAtivos();
  const filtroPai = obterCheckboxesPai();
  console.log(filtroPai);

  // Limpa o contêiner antes de adicionar novos lugares
  const campoLocais = document.getElementById("campo-locais");
  campoLocais.innerHTML = ""; // Limpa a seção de locais

  // Verifica se não há filtros ativos e exibe mensagem "não"
  if (filtrosAtivos.length === 0 && filtroPai.length === 0) {
    console.log("Nenhum filtro ativo.");
    campoLocais.innerHTML = "<p>Não</p>"; // Mensagem quando não há filtros ativos
    getGeolocation();
    return;
  }

  try {
    const db = firebase.firestore(); // Inicializa o Firestore
    const lugaresRef = db.collection("lugares");

    // Cria uma consulta com base nos filtros ativos
    let query = lugaresRef;

    // Adiciona cláusulas WHERE apenas para filtros ativos
    if (filtroPai.includes('sinalizacao')) { 
      filtrosAtivos.forEach(filtro => {
        query = query.where('sinalizacao', "==", filtro);
      });
    }

    if (filtroPai.includes('audio')) { 
      filtrosAtivos.forEach(filtro => {
        query = query.where('audio', "==", filtro);
      });
    }

    if (filtroPai.includes('equipamento')) { 
      filtrosAtivos.forEach(filtro => {
        query = query.where('equipamento', "==", filtro);
      });
    }

    // Obtém os dados dos lugares
    const snapshot = await query.get();

    if (snapshot.empty) {
      campoLocais.innerHTML = "<p style='margin-bottom: 250px;'>Não foram encontrados locais com os filtros selecionados.</p>"; // Mensagem quando não há resultados
      return;
    }

    snapshot.forEach(doc => {
      const lugarData = doc.data();
      console.log(lugarData);
      criarTabelaMapaFiltro(lugarData);
    });

  } catch (error) {
    console.error("Erro ao buscar lugares:", error);
  }
}

function criarTabelaMapaFiltro(lugar) {
  var lugarSection = document.createElement("section");
  lugarSection.classList.add("card");

  lugarSection.innerHTML = `
    <div class="grupo-locais" data-name="${lugar.name}">
      <img src="${lugar.photos}" class="img-lugar" alt="${lugar.name}" />
      <div class="text-locais">
        <p class="titulo-locais">${lugar.name}</p>
        <div class="estrelas">
          <box-icon name="star" type="solid" color="#fcc803"></box-icon>
          <box-icon name="star" type="solid" color="#fcc803"></box-icon>
          <box-icon name="star" type="solid" color="#fcc803"></box-icon>
          <box-icon name='star' color='#fcc803'></box-icon>
          <box-icon name='star' color='#fcc803'></box-icon>
        </div>
      </div>
    </div>
  `;

  // Adiciona um evento de clique para redirecionar
  lugarSection.addEventListener("click", () => {
    const address = lugar.formatted_address || "Endereço não disponível";
    const phone = lugar.formatted_phone_number || "Telefone não disponível";
    // Redireciona para a página de detalhes
    window.location.href = "../../pagina-lugar/pagina_lugarFiltro.html?uid=" + lugar.id;
  });

  // Adiciona o lugar ao contêiner com o ID 'campo-locais'
  document.getElementById("campo-locais").appendChild(lugarSection);
}

// Adiciona eventos de clique nas checkboxes para atualizar a busca
