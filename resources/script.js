document.addEventListener("DOMContentLoaded", function() {
    const whoIsCard = document.querySelector(".card:nth-child(1)");
    const innovationsCard = document.querySelector(".card:nth-child(2)");
    const cropsCard = document.querySelector(".card:nth-child(3)");
    const writtenCard = document.querySelector(".card:nth-child(4)");
    const sourcesCard = document.querySelector(".card:nth-child(5)");
    const whoIsSection = document.querySelector(".whoIs");
    const innovationsSection = document.querySelector(".innovations");
    const cropsSection = document.querySelector(".crops");
    const writtenSection = document.querySelector(".written");
    const sourcesSection = document.querySelector(".sources");
  
    whoIsCard.addEventListener("click", () => {
      whoIsSection.style.display = "grid";
      innovationsSection.style.display = "none";
      cropsSection.style.display = "none";
      writtenSection.style.display = "none";
      sourcesSection.style.display = "none";
    });
    innovationsCard.addEventListener("click", () => {
        innovationsSection.style.display = "grid";
        whoIsSection.style.display = "none";
        cropsSection.style.display = "none";
        writtenSection.style.display = "none";
        sourcesSection.style.display = "none";
    });
    writtenCard.addEventListener("click", () => {
        
        writtenSection.style.display = "block";
        whoIsSection.style.display = "none";
        cropsSection.style.display = "none";
        innovationsSection.style.display = "none";
        sourcesSection.style.display = "none";
    });
    sourcesCard.addEventListener("click", () => {
        sourcesSection.style.display = "block";
        whoIsSection.style.display = "none";
        cropsSection.style.display = "none";
        innovationsSection.style.display = "none";
        writtenSection.style.display = "none";
    });
    cropsCard.addEventListener("click", () => {
        cropsSection.style.display = "flex";
        whoIsSection.style.display = "none";
        sourcesSection.style.display = "none";
        innovationsSection.style.display = "none";
        writtenSection.style.display = "none";
    });
  });

  