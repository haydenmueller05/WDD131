document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  const gallery = document.querySelector(".gallery");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
  });

  function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);

  gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return; 

   
    const src = clickedImage.getAttribute("src");
    const base = src.split("-")[0]; 
    const fullSrc = `${base}-full.jpeg`; 

    const modal = document.createElement("dialog");
    modal.innerHTML = `
      <img src="${fullSrc}" alt="${clickedImage.alt}">
      <button class="close-viewer">X</button>
    `;
    document.body.appendChild(modal);

   
    modal.showModal();

    
    const closeBtn = modal.querySelector(".close-viewer");
    closeBtn.addEventListener("click", () => {
      modal.close();
      modal.remove();
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.close();
        modal.remove();
      }
    });
  });
});
