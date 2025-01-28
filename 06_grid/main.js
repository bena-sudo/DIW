document.addEventListener("DOMContentLoaded", () => {
  // Recorrer el grid y obtener información
  const container = document.querySelector(".contenedor");

  if (container) {
    const items = container.querySelectorAll(".item");

    items.forEach((item, index) => {
      console.log(`Item ${index + 1}: ${item.textContent}`);
    });

    // Obtener únicamente las propiedades definidas en el CSS del contenedor
    const definedProperties = [
      "display",
      "grid-template-columns",
      "grid-template-rows",
      "gap",
    ];
    const computedStyle = window.getComputedStyle(container);

    console.log("Propiedades definidas en el contenedor:");
    definedProperties.forEach((property) => {
      console.log(`${property}: ${computedStyle.getPropertyValue(property)}`);
    });
  } else {
    console.error("El contenedor no se encontró en el DOM.");
  }
});
