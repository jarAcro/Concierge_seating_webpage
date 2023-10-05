
let popupTimeout;

function showSectionImage(sectionId) {
    const sectionImageMap = {
      "section-106": "/images/seating-images/section106.png",
        "section-105": "/images/seating-images/section105.png",

        "section-104-1": "/images/seating-images/section104-1.png",
        "section-104-2": "/images/seating-images/section104-2.png",
        "section-104-3": "/images/seating-images/section104-3.png",
        "section-104-4": "/images/seating-images/section104-4.png",
        "section-104-5": "/images/seating-images/section104-5.png",

"section-103-1":"/images/seating-images/section103-1.png",
"section-103-2": "/images/seating-images/section103-2.png",
"section-103-3": "/images/seating-images/section103-3.png",
"section-103-4": "/images/seating-images/section103-4.png",
"section-103-5": "/images/seating-images/section103-5.png",
    };
  
    const sectionImage = sectionImageMap[sectionId];
    if (sectionImage) {
      const popupWindow = window.open("", "Section Image", "width=2000,height=1000, channelmode=yes");
      popupWindow.document.write(`<img src="${sectionImage}" alt="Section Image">`);
    }
  }
/*
  let timeoutId;

  function resetTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(showPopup, 20000);
  }
  
  function showPopup() {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    popup.innerHTML = `
      <p>Do you need more time?</p>
      <button onclick="closePopup(true)">Yes</button>
      <button onclick="closePopup(false)">No</button>
    `;
    document.body.appendChild(popup);
  }
  
  function closePopup(extendTime) {
    const popup = document.querySelector("div");
    document.body.removeChild(popup);
    if (extendTime) {
      resetTimer();
    }
  }
  
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keydown", resetTimer);
  resetTimer();

*/