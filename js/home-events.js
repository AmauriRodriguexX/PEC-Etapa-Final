window.dataLayer = window.dataLayer || [];

// MARK: EVENTS
function onKnowTheStory(label, videoUrl ) {
  window.dataLayer.push({
    event: "click_element",
    CDAction: "conoce_mi_historia",
    CDLabel: label,
    CDValue: videoUrl,
    detail: "",
    CDFunnel: "PE Etapa Final 2024",
  });
}


function onGallery(watchedImageUrl) {
  window.dataLayer.push({
    event: "galeria_PEC",
    CDCategory: "Galería etapa final PEC",
    CDAction: "ver_fotos",
    CDFunnel: "PE Etapa Final 2024",
    CDValue: watchedImageUrl,
  });
}

function onHomeShare(socialNetwork) {
  window.dataLayer.push({
    event: "click_element",
    CDCategory: "compartir_pagina",
    CDLabel: socialNetwork,
    CDFunnel: "PE Etapa Final 2024",
  });
}

function onVideoStart(videoCategory, videoUrl) {
  window.dataLayer.push({
    event: "pec_2024_videos",
    CDCategory: videoCategory,
    CDAction: "01. Inicio",
    CDLabel: "",
    CDValue: videoUrl,
    CDFunnel: "PE Etapa Final 2024",
  });
}

function onVideoPause(videoCategory, timeWatched, videoSource) {
  window.dataLayer.push({
    event: "pec_2024_videos",
    CDCategory: videoCategory,
    CDAction: `02. Progreso ${timeWatched}%`,
    CDLabel: "",
    CDValue: videoSource,
    CDFunnel: "PE Etapa Final 2024",
  });
}


function onVideoCompletion(videoCategory, videoSource) {
  window.dataLayer.push({
    event: "pec_2024_videos",
    CDCategory: videoCategory,
    CDAction: "03. Completado",
    CDLabel: "",
    CDValue: videoSource,
    CDFunnel: "PE Etapa Final 2024",
  });
}

function onGalleryDownload(imageUrl) {
  const fullImageUrl = getFullUrl(imageUrl);

  window.dataLayer.push({
    event: "galeria_PEC",
    CDCategory: "Galería etapa final PEC",
    CDAction: "descargar_foto",
    CDFunnel: "PE Etapa Final 2024",
    CDValue: fullImageUrl,
  });

  console.log("Evento registrado (onGalleryDownload):", { fullImageUrl });
}

function onGalleryShare(imageUrl) {
  window.dataLayer.push({
    event: "galeria_PEC",
    CDCategory: "Galería etapa final PEC",
    CDAction: "compartir_foto",
    CDLabel: "",
    CDFunnel: "PE Etapa Final 2024",
    CDValue: imageUrl,
  });
}



function onDropdownShare(platform, imageUrl) {
  const fullImageUrl = getFullUrl(imageUrl || window.location.href);

  window.dataLayer.push({
    event: "galeria_PEC",
    CDCategory: "Galería etapa final PEC",
    CDAction: "compartir_foto",
    CDLabel: platform, // Puede ser "facebook" o "whatsapp"
    CDFunnel: "PE Etapa Final 2024",
    CDValue: fullImageUrl,
  });

  console.log(`Evento registrado (onDropdownShare - ${platform}):`, { fullImageUrl });
}

// Uso en los enlaces del dropdown
function shareInFacebook() {
  onDropdownShare("facebook");
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank");
}

function shareInWhatsapp() {
  onDropdownShare("whatsapp");
  window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, "_blank");
}


function onChooseGroup(groupName, button) {
    // Verifica si el botón tiene el atributo `data-no-datalayer`
    if (button.getAttribute('data-no-datalayer') === "true") {
        console.log(`Botón de ${groupName} no registra en el dataLayer.`);
        return; // Sal del método sin registrar nada
    }

    // Código para registrar en el dataLayer
    dataLayer.push({
        event: "galeria_PEC",
        CDCategory: "Galería etapa final PEC",
        CDAction: "ver_foto",
        CDFunnel: "PE Etapa Final 2024",
        CDValue: groupName
    });
    console.log(`Registrado en el dataLayer: ${groupName}`);
}


document.querySelectorAll('.carousel .carousel-button').forEach(button => {
  button.addEventListener('click', function(event) {
      if (button.classList.contains('no-datalayer')) {
          console.log(`Bloqueado del dataLayer para: ${button.dataset.group}`);
          // Bloqueamos cualquier interacción con el dataLayer eliminando la lógica específica
          window.dataLayer = window.dataLayer || [];
          const index = window.dataLayer.findIndex(event => event.CDValue === button.dataset.group);
          if (index !== -1) { 
            return ;
            console.log("Evitar")//detención lógica para Data
      }
      } else {
          console.log(`Se evitan problemas redondos`);
       }    
  });

})


// Helper para convertir URLs relativas a absolutas
function getFullUrl(url) {
  return url.startsWith('http') || url.startsWith('//') 
    ? url 
    : new URL(url, window.location.origin).href;
}

// Evento para ganadores con ID anónimo
function registrarEventoGanadoresPEC2024(participantId, category, imageUrl, videoUrl) {
  const fullImageUrl = getFullUrl(imageUrl);
  const fullVideoUrl = getFullUrl(videoUrl);

  window.dataLayer.push({
    event: "ganadores_pec2024",
    CDCategory: category,
    CDAction: "conoce_mi_historia",
    CDLabel: `participante_${participantId}`, 
    CDValue: fullVideoUrl, 
    detail: fullImageUrl, 
    CDFunnel: "PE Etapa Final 2024"
  });

  console.log("Evento registrado (Ganadores PEC 2024):", { fullImageUrl, fullVideoUrl });
}

// Evento para categorías especiales con ID anónimo
function registrarEventoGanadoresPECCategoriasEspeciales(participantId, category, imageUrl, videoUrl) {
  const fullImageUrl = getFullUrl(imageUrl);
  const fullVideoUrl = getFullUrl(videoUrl);
  window.dataLayer.push({
    event: "ganadores_pec2024_categorias_especiales",
    CDCategory: category,
    CDAction: "conoce_mi_historia",
    CDLabel: `participante_${participantId}`, 
    CDValue: fullVideoUrl, 
    detail: fullImageUrl, 
    CDFunnel: "PE Etapa Final 2024"
  });

  console.log("Evento registrado (Categorías Especiales):", { fullImageUrl, fullVideoUrl });
}

// Evento para ver una foto en galería
function registrarEventoVerFoto(imageUrl) {
  const fullImageUrl = getFullUrl(imageUrl);
  window.dataLayer.push({
    event: 'galeria_PEC',
    CDCategory: 'Galería etapa final PEC',
    CDAction: 'ver_foto',
    CDFunnel: 'PE Etapa Final 2024',
    CDValue: fullImageUrl
  });

  console.log("Evento registrado (Ver Foto):", { fullImageUrl });
}

// Evento para descargar una foto en galería
function registrarEventoDescargarFoto(imageUrl) {
  const fullImageUrl = getFullUrl(imageUrl);
  window.dataLayer.push({
    event: 'galeria_PEC',
    CDCategory: 'Galería etapa final PEC',
    CDAction: 'descargar_foto',
    CDFunnel: 'PE Etapa Final 2024',
    CDValue: fullImageUrl
  });

  console.log("Evento registrado (Descargar Foto):", { fullImageUrl });
}

// Mostrar dropdown de opciones para compartir
function handleShareClick(imagePath) {
  const fullImageUrl = getFullUrl(imagePath);
  console.log("URL para compartir:", fullImageUrl);

  window.dataLayer.push({
    event: "galeria_PEC",
    CDCategory: "Galería etapa final PEC",
    CDAction: "compartir_foto",
    CDFunnel: "PE Etapa Final 2024",
    CDValue: fullImageUrl,
  });
  toggleDropdown();
}

function toggleDropdown() {
  const dropdown = document.getElementById("share-dropdown");
  dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}

// Función para compartir en Facebook
function shareInFacebook(imagePath) {
  const fullImageUrl = getFullUrl(imagePath); 
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullImageUrl)}`;
  console.log("Compartiendo en Facebook:", facebookURL);

  window.open(facebookURL, "_blank", "width=600,height=400");
}

// Función para compartir en WhatsApp
function shareInWhatsapp(imagePath) {
  const fullImageUrl = getFullUrl(imagePath); 
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullImageUrl)}`;
  console.log("Compartiendo en WhatsApp:", whatsappURL);
  window.open(whatsappURL, "_blank", "width=600,height=400");
}

document.addEventListener("DOMContentLoaded", function () {
  // Captura el botón de Facebook
  const facebookButton = document.getElementById("share-facebook");
  if (facebookButton) {
    facebookButton.addEventListener("click", function () {
      // Registrar evento en dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "click_element",
        CDCategory: "compartir_pagina",
        CDLabel: "facebook",
        CDFunnel: "PE Etapa Final 2024"
      });
      console.log("Evento registrado: Facebook");

      // Abrir URL de compartir
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
        "_blank"
      );
    });
  }

  // Captura el botón de WhatsApp
  const whatsappButton = document.getElementById("share-whatsapp");
  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
      // Registrar evento en dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "click_element",
        CDCategory: "compartir_pagina",
        CDLabel: "whatsapp",
        CDFunnel: "PE Etapa Final 2024"
      });
      console.log("Evento registrado: WhatsApp");

      // Abrir URL de compartir
      window.open(
        `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
        "_blank"
      );
    });
  }
});

(function () {
  let currentImageUrl = ''; // Variable para almacenar la URL completa de la imagen actual

  // Helper para convertir URLs relativas a absolutas
  function getFullUrl(url) {
    return url.startsWith('http') || url.startsWith('//') 
      ? url 
      : new URL(url, window.location.origin).href;
  }

  // Función para abrir el modal de la galería y establecer la imagen seleccionada
  function openModalGallery(imageElement) {
    const galleryImage = document.getElementById("gallery-image");
    galleryImage.src = imageElement.src; // Muestra la imagen seleccionada en el modal

    // Construir la URL completa de la imagen de forma dinámica
    const imagePath = getFullUrl(imageElement.getAttribute('src'));
    currentImageUrl = imagePath; // URL completa de la imagen seleccionada

    document.getElementById("gallery-view-modal").style.display = "block";
  }

  // Función para cerrar el modal de la galería
  function closeModalGallery() {
    document.getElementById("gallery-view-modal").style.display = "none";
  }

  // Función para mostrar/ocultar el menú de compartir
  function toggleDropdown() {
    const dropdown = document.getElementById("share-dropdown");
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
  }

  // Función para compartir en Facebook la imagen actual del modal
  function shareInFacebook() {
    const fullImageUrl = getFullUrl(currentImageUrl || window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullImageUrl)}`;

    // Registrar evento en dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "galeria_PEC",
      CDCategory: "Galería etapa final PEC",
      CDAction: "compartir_foto",
      CDLabel: "facebook",
      CDFunnel: "PE Etapa Final 2024",
      CDValue: fullImageUrl,
    });

    console.log("Compartiendo en Facebook:", { fullImageUrl });
    window.open(facebookUrl, '_blank');
  }

  // Función para compartir en WhatsApp la imagen actual del modal
  function shareInWhatsapp() {
    const fullImageUrl = getFullUrl(currentImageUrl || window.location.href);
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullImageUrl)}`;

    // Registrar evento en dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "galeria_PEC",
      CDCategory: "Galería etapa final PEC",
      CDAction: "compartir_foto",
      CDLabel: "whatsapp",
      CDFunnel: "PE Etapa Final 2024",
      CDValue: fullImageUrl,
    });

    console.log("Compartiendo en WhatsApp:", { fullImageUrl });
    window.open(whatsappUrl, '_blank');
  }

  // Cierra el menú de compartir si se hace clic fuera de él
  window.addEventListener("click", function (event) {
    const dropdown = document.getElementById("share-dropdown");
    const shareContainer = document.querySelector(".share_container");
    if (!shareContainer.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });

  // Expone las funciones necesarias en el ámbito global
  window.openModalGallery = openModalGallery;
  window.closeModalGallery = closeModalGallery;
  window.toggleDropdown = toggleDropdown;
  window.shareInFacebook = shareInFacebook;
  window.shareInWhatsapp = shareInWhatsapp;
})(); // IIFE para encapsular el código


window.onload = function () {
  function share(platform) {
    const url = encodeURIComponent(window.location.href);
    let shareUrl = '';

    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${url}`;
    }

    window.open(shareUrl, '_blank');
  }
  window.share = share;
};

document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar la sección "ganadores" y el contenedor específico de votos
  const ganadoresSection = document.querySelector('#ganadores');
  const votesContainer = ganadoresSection.querySelector('.votes_container');
  const competitorContainers = votesContainer.querySelectorAll('.competitor_container');

  // Variables para manejar el deslizamiento
  let startX = 0;
  let endX = 0;

  if (window.innerWidth <= 768) {
    // Crear el contenedor de dots y botones específicos para "ganadores"
    const customSectionMove = document.createElement('div');
    customSectionMove.className = 'custom-section-move';

    // Crear el contenedor de dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots_container';

    // Crear un dot por cada tarjeta en el contenedor de "ganadores"
    competitorContainers.forEach((item, index) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      if (index === 0) dot.classList.add('active'); // Activar el primer punto
      dotsContainer.appendChild(dot);
    });

    // Crear botones de navegación específicos para "ganadores"
    const prevButton = document.createElement('div');
    prevButton.id = 'ganadores-prev-button';
    prevButton.className = 'nav-arrow left-arrow inactive';
    prevButton.textContent = '←';

    const nextButton = document.createElement('div');
    nextButton.id = 'ganadores-next-button';
    nextButton.className = 'nav-arrow right-arrow';
    nextButton.textContent = '→';

    // Insertar botones dentro del contenedor de botones
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';
    buttonsContainer.appendChild(prevButton);
    buttonsContainer.appendChild(nextButton);

    // Insertar dots y botones en la sección "ganadores"
    customSectionMove.appendChild(dotsContainer);
    customSectionMove.appendChild(buttonsContainer);
    votesContainer.parentNode.appendChild(customSectionMove);

    // Función para actualizar dots y botones
    function updateDotsAndButtons() {
      const scrollPosition = votesContainer.scrollLeft;
      const itemWidth = votesContainer.offsetWidth;
      const index = Math.round(scrollPosition / itemWidth);
      const dots = dotsContainer.querySelectorAll('.dot');

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
      });

      prevButton.classList.toggle('inactive', index === 0);
      nextButton.classList.toggle('inactive', index === competitorContainers.length - 1);

      prevButton.style.backgroundColor = index > 0 ? '#CE0058' : '#D8DADA';
      prevButton.style.color = index > 0 ? 'white' : '#9D9D9D';
      nextButton.style.backgroundColor = index < competitorContainers.length - 1 ? '#CE0058' : '#D8DADA';
      nextButton.style.color = index < competitorContainers.length - 1 ? 'white' : '#9D9D9D';
    }

    // Evento de scroll para actualizar los dots y botones
    votesContainer.addEventListener('scroll', updateDotsAndButtons);

    // Hacer clic en dots navegable
    dotsContainer.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.addEventListener('click', function (event) {
        event.stopPropagation();
        votesContainer.scrollTo({
          left: idx * votesContainer.offsetWidth,
          behavior: 'smooth'
        });
      });
    });

    // Funcionalidad de navegación para botones
    prevButton.addEventListener('click', function (event) {
      event.stopPropagation();
      const currentIndex = Math.round(votesContainer.scrollLeft / votesContainer.offsetWidth);
      if (currentIndex > 0) {
        votesContainer.scrollTo({
          left: (currentIndex - 1) * votesContainer.offsetWidth,
          behavior: 'smooth'
        });
      }
    });

    nextButton.addEventListener('click', function (event) {
      event.stopPropagation();
      const currentIndex = Math.round(votesContainer.scrollLeft / votesContainer.offsetWidth);
      if (currentIndex < competitorContainers.length - 1) {
        votesContainer.scrollTo({
          left: (currentIndex + 1) * votesContainer.offsetWidth,
          behavior: 'smooth'
        });
      }
    });

    // Detectar inicio del deslizamiento
    votesContainer.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      e.stopPropagation();
    });

    // Detectar final del deslizamiento
    votesContainer.addEventListener('touchend', function (e) {
      endX = e.changedTouches[0].clientX;
      e.stopPropagation();
      handleSwipe();
    });

    // Manejar deslizamiento
    function handleSwipe() {
      const threshold = 50;
      const currentIndex = Math.round(votesContainer.scrollLeft / votesContainer.offsetWidth);

      if (startX - endX > threshold && currentIndex < competitorContainers.length - 1) {
        votesContainer.scrollTo({
          left: (currentIndex + 1) * votesContainer.offsetWidth,
          behavior: 'smooth'
        });
      } else if (endX - startX > threshold && currentIndex > 0) {
        votesContainer.scrollTo({
          left: (currentIndex - 1) * votesContainer.offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  }
});
