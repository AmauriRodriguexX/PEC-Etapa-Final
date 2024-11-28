window.dataLayer = window.dataLayer || [];

// MARK: EVENTS
/**
 *
 * @param {string} watchedImageUrl The image url that is watching the user
 */
function onGallery(watchedImageUrl) {
  window.dataLayer.push({
    event: "galeria_PEC",
    CDCategory: "Galería etapa final PEC",
    CDAction: "ver_foto",
    CDFunnel: "PE Etapa Final 2024",
    CDValue: watchedImageUrl,
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


var miAplicacion = miAplicacion || {};

miAplicacion.getFullUrl = function(url) {
  return url.startsWith('http') || url.startsWith('//')
    ? url
    : new URL(url, window.location.origin).href;
};

miAplicacion.registrarEventoVerFoto = function(imageUrl) {
  const fullImageUrl = miAplicacion.getFullUrl(imageUrl);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'galeria_PEC',
    CDCategory: 'Galería etapa final PEC',
    CDAction: 'ver_foto',
    CDFunnel: 'PE Etapa Final 2024',
    CDValue: fullImageUrl // La URL completa de la imagen vista
  });
};

(function () {
  let currentImageUrl = ''; // Variable para almacenar la URL completa de la imagen actual

  // Función para abrir el modal de la galería y establecer la imagen seleccionada
  function openModalGallery(imageElement) {
    const galleryImage = document.getElementById("gallery-image");
    const imageUrl = imageElement.getAttribute('src'); // Obtén la URL de la imagen seleccionada

    galleryImage.src = imageUrl; // Actualiza la imagen mostrada en el modal

    // Registra el evento en el dataLayer
    registrarEventoVerFoto(imageUrl);

    // Muestra el modal
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
    const url = encodeURIComponent(currentImageUrl || window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank');
  }

  // Función para compartir en WhatsApp la imagen actual del modal
  function shareInWhatsapp() {
    const url = encodeURIComponent(currentImageUrl || window.location.href);
    const whatsappUrl = `https://wa.me/?text=${url}`;
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


 // Inicialización de dataLayer
 window.dataLayer = window.dataLayer || [];
  
 // Función auxiliar para convertir URLs relativas en absolutas
 function getFullUrl(url) {
   return url.startsWith('http') || url.startsWith('//')
     ? url
     : new URL(url, window.location.origin).href;
 }

 // Función para registrar evento de ganadores en categorías especiales
 function registrarEventoGanadoresCategoriasEspeciales(participante) {
   const fullVideoUrl = getFullUrl("https://www.youtube.com/embed/ne-xLWHbxVQ"); // Ya es una URL absoluta
   const fullImageUrl = getFullUrl("./assets/images/participantes/grupo-centronorte-participante-1.png");

   dataLayer.push({
     event: "ganadores_categorías_especiales",
     CDCategory: 'servicio',
     CDAction: "conoce_mi_historia",
     CDLabel: `participante_${participante}`,
     CDValue: fullVideoUrl,
     detail: fullImageUrl,
     CDFunnel: "PE Etapa Final 2024"
   });
 }

 // Función para registrar evento al ver una foto en la galería
 function registrarEventoVerFoto(imageUrl) {
   const fullImageUrl = getFullUrl(imageUrl);

   dataLayer.push({
     event: 'galeria_PEC',
     CDCategory: 'Galería etapa final PEC',
     CDAction: 'ver_foto',
     CDFunnel: 'PE Etapa Final 2024',
     CDValue: fullImageUrl // La URL completa de la imagen vista
   });

   console.log("Evento ver foto registrado en el dataLayer:", {
     event: 'galeria_PEC',
     CDCategory: 'Galería etapa final PEC',
     CDAction: 'ver_foto',
     CDFunnel: 'PE Etapa Final 2024',
     CDValue: fullImageUrl
   });
 }

 // Función para descargar imagen en galería PEC
 function registrarEventoDescargarFoto() {
   const fullImageUrl = getFullUrl('/assets/images/imagen_final_ganadores.png');

   dataLayer.push({
     event: 'galeria_PEC',
     CDCategory: 'Galería etapa final PEC',
     CDAction: 'descargar_foto',
     CDFunnel: 'PE Etapa Final 2024',
     CDValue: fullImageUrl
   });
 }

 // Función para compartir foto
 function registrarEventoCompartirFoto(imageUrl) {
   // Verifica si la URL es válida y la convierte en absoluta
   const currentUrl = getFullUrl(imageUrl || window.location.href);

   // Registrar el evento en el dataLayer
   dataLayer.push({
     event: 'galeria_PEC',
     CDCategory: 'Galería etapa final PEC',
     CDAction: 'compartir_foto',
     CDFunnel: 'PE Etapa Final 2024',
     CDValue: currentUrl // URL completa de la imagen compartida
   });

   console.log("Evento compartir registrado en el dataLayer con URL:", currentUrl);

   // Alternar visibilidad del dropdown
   const dropdown = document.getElementById("share-dropdown");
   if (dropdown) {
     dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
   }
 }

 // Función para click en compartir página
 function registrarEventoClickCompartirPagina(redSocial) {
   dataLayer.push({
     event: 'click_element',
     CDCategory: 'compartir_pagina',
     CDLabel: redSocial,
     CDFunnel: 'PE Etapa Final 2024'
   });
 }

 // Función para los eventos de videos en la categoría de participación familiar
 function registrarEventoVideoParticipacionFamiliar(accion, participante) {
   const fullVideoUrl = getFullUrl(`./assets/images/participante_${participante}.mp4`);

   dataLayer.push({
     event: 'pec_2024_videos',
     CDCategory: 'Participacion familiar',
     CDAction: accion, // e.g., '01. Inicio', '02. Progreso 10%', '03. Completado'
     CDLabel: `participante_${participante}`,
     CDValue: fullVideoUrl,
     CDFunnel: 'PE Etapa Final 2024'
   });
 }

 // Función para registrar evento de ganadores PEC 2024
 function registrarEventoGanadoresPEC2024(participante) {
   const fullVideoUrl = getFullUrl("https://www.youtube.com/embed/ne-xLWHbxVQ"); // Ya es una URL absoluta
   const fullImageUrl = getFullUrl(`./assets/images/participantes/grupo-centronorte-participante-${participante}.png`);

   dataLayer.push({
     event: "ganadores_pec2024",
     CDCategory: 'centro',
     CDAction: "conoce_mi_historia",
     CDLabel: `participante_${participante}`,
     CDValue: fullVideoUrl,
     detail: fullImageUrl,
     CDFunnel: "PE Etapa Final 2024"
   });
 }

 // Función para los eventos de videos en categorías especiales
 function registrarEventoVideoCategoriasEspeciales(accion, participante) {
   const fullVideoUrl = getFullUrl(`./assets/images/participante_${participante}.mp4`);

   dataLayer.push({
     event: 'pec_2024_videos_categorias_especiales',
     CDCategory: 'Participacion familiar',
     CDAction: accion, // e.g., '01. Inicio', '02. Progreso 10%', '03. Completado'
     CDLabel: `participante_${participante}`,
     CDValue: fullVideoUrl,
     CDFunnel: 'PE Etapa Final 2024'
   });
 }

 