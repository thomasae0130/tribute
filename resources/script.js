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
      // Set display value of "whoIs" section to grid
      whoIsSection.style.display = "grid";
  
      // Set display value of other sections to none
      innovationsSection.style.display = "none";
      cropsSection.style.display = "none";
      writtenSection.style.display = "none";
      sourcesSection.style.display = "none";
    });
    innovationsCard.addEventListener("click", () => {
        // Set display value of "whoIs" section to grid
        innovationsSection.style.display = "grid";

        // Set display value of other sections to none
        whoIsSection.style.display = "none";
        cropsSection.style.display = "none";
        writtenSection.style.display = "none";
        sourcesSection.style.display = "none";
    });
    writtenCard.addEventListener("click", () => {
        // Set display value of "whoIs" section to grid
        writtenSection.style.display = "block";

        // Set display value of other sections to none
        whoIsSection.style.display = "none";
        cropsSection.style.display = "none";
        innovationsSection.style.display = "none";
        sourcesSection.style.display = "none";
    });
    sourcesCard.addEventListener("click", () => {
        // Set display value of "whoIs" section to grid
        sourcesCard.style.display = "flex";

        // Set display value of other sections to none
        whoIsSection.style.display = "none";
        cropsSection.style.display = "none";
        innovationsSection.style.display = "none";
        writtenSection.style.display = "none";
    });
    cropsCard.addEventListener("click", () => {
        // Set display value of "whoIs" section to grid
        cropsSection.style.display = "flex";

        // Set display value of other sections to none
        whoIsSection.style.display = "none";
        sourcesCard.style.display = "none";
        innovationsSection.style.display = "none";
        writtenSection.style.display = "none";
    });
    


  });

  