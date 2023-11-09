console.log("Desenvolvido por Rômulo Henri (2023)");
console.log("getCLientInfo.js loading...");

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  doc.style.setProperty('--doc-height-less-menu', `${window.innerHeight - 70}px`)
}

window.addEventListener('resize', documentHeight)
documentHeight()