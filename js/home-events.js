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
    CDAction: "ver_foto",
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
