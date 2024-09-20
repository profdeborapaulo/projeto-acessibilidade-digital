function getIDFromURL() {
    const name = new URLSearchParams(window.location.href="cadstroForm1.html");
    return name.get('name'); // Retorna o valor do parâmetro 'id'
  }