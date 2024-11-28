document.addEventListener("DOMContentLoaded", function () {
  // Elementos da máscara de leitura
  const readingMaskContainer = document.getElementById(
    "reading-mask-container"
  );
  const mascaraToggle = document.getElementById("mascara-toggle");
  const topMask = document.getElementById("top-mask");
  const readingLine = document.getElementById("reading-line");
  const bottomMask = document.getElementById("bottom-mask");

  // Elementos do leitor de acessibilidade
  const leitorButton = document.getElementById("leitor-acs");
  const leitorContainer = document.getElementById("leitor-container");
  const leitorText = document.getElementById("leitor-text");
  const leitorStatus = document.getElementById("leitor-status");
  const pauseButton = document.getElementById("leitor-pause");
  const stopButton = document.getElementById("leitor-stop");

  // Verificar se os elementos necessários existem
  if (
    !readingMaskContainer ||
    !mascaraToggle ||
    !topMask ||
    !readingLine ||
    !bottomMask ||
    !leitorButton ||
    !leitorContainer ||
    !leitorText ||
    !pauseButton ||
    !stopButton
  ) {
    console.error("Elementos necessários não encontrados");
    return;
  }

  // Máscara de Leitura
  let isReadingMaskActive = false;

  // Adicionar estilo ao botão de toggle da máscara
  mascaraToggle.style.cursor = "pointer";

  function updateMaskPosition(y) {
    if (!isReadingMaskActive) return;

    const windowHeight = window.innerHeight;
    const maskHeight = 80; // Altura da linha de leitura

    // Posicionar a linha de leitura centralizada no toque ou mouse
    const linePosition = y - maskHeight / 2;

    // Atualizar posições
    topMask.style.height = `${linePosition}px`;
    readingLine.style.top = `${linePosition}px`;
    bottomMask.style.height = `${windowHeight - linePosition - maskHeight}px`;
  }

  function toggleReadingMask() {
    isReadingMaskActive = !isReadingMaskActive;
    readingMaskContainer.style.display = isReadingMaskActive ? "block" : "none";

    if (isReadingMaskActive) {
      mascaraToggle.style.border = "2px solid #d3d2d2";
      // Adicionar eventos para mouse e toque
      document.addEventListener("mousemove", (e) =>
        updateMaskPosition(e.clientY)
      );
      document.addEventListener("touchmove", (e) =>
        updateMaskPosition(e.touches[0].clientY)
      );
    } else {
      mascaraToggle.style.backgroundColor = "";
      document.removeEventListener("mousemove", (e) =>
        updateMaskPosition(e.clientY)
      );
      document.removeEventListener("touchmove", (e) =>
        updateMaskPosition(e.touches[0].clientY)
      );
    }
  }

  mascaraToggle.addEventListener("click", toggleReadingMask);

  window.addEventListener("resize", () => {
    if (isReadingMaskActive) {
      updateMaskPosition(window.innerHeight / 2);
    }
  });

  // Leitor de Acessibilidade
  let isActive = false;
  let isPaused = false;
  let currentUtterance = null;

  const synthesis = window.speechSynthesis;

  function setupVoice() {
    const utterance = new SpeechSynthesisUtterance();
    const voices = synthesis.getVoices();
    const ptVoice = voices.find((voice) => voice.lang.includes("pt"));

    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.lang = "pt-BR";
    utterance.rate = 1;
    utterance.pitch = 1;

    return utterance;
  }

  function startReading(text) {
    if (synthesis.speaking) {
      synthesis.cancel();
    }

    if (text) {
      currentUtterance = setupVoice();
      currentUtterance.text = text;
      synthesis.speak(currentUtterance);
      leitorText.textContent = text;
      isPaused = false;
      updatePauseButtonText();
    }
  }

  function updatePauseButtonText() {
    pauseButton.textContent = isPaused ? "Continuar" : "Pausar";
  }

  function handleTextSelection() {
    if (!isActive) return;

    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText) {
      startReading(selectedText);
    }
  }

  function toggleLeitor() {
    isActive = !isActive;

    leitorContainer.style.display = isActive ? "block" : "none";

    leitorButton.style.borderColor = isActive ? "#d3d2d2" : "";

    if (isActive) {
      document.addEventListener("mouseup", handleTextSelection);
      document.addEventListener("touchend", handleTextSelection); // Para dispositivos móveis
    } else {
      document.removeEventListener("mouseup", handleTextSelection);
      document.removeEventListener("touchend", handleTextSelection); // Para dispositivos móveis
      synthesis.cancel();
      leitorText.textContent = "Selecione um texto para começar a leitura";
      isPaused = false;
      updatePauseButtonText();
    }
  }

  leitorButton.addEventListener("click", toggleLeitor);

  pauseButton.addEventListener("click", () => {
    if (synthesis.speaking) {
      if (isPaused) {
        synthesis.resume();
      } else {
        synthesis.pause();
      }

      isPaused = !isPaused;
      updatePauseButtonText();
    }
  });

  stopButton.addEventListener("click", () => {
    synthesis.cancel();

    leitorText.textContent = "Selecione um texto para começar a leitura";

    isPaused = false;

    updatePauseButtonText();
  });

  leitorButton.style.cursor = "pointer";

  synthesis.addEventListener("voiceschanged", () => {
    setupVoice();
  });
});
