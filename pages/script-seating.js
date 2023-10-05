
let popupTimeout;

function showSectionImage(sectionId) {
    const sectionImageMap = {
"section-101-1": "/images/seating-images/section101-1.png",
"section-101-2": "/images/seating-images/section101-2.png",
"section-101-3": "/images/seating-images/section101-3.png",
"section-101-4": "/images/seating-images/section101-4.png",

"section-102-1": "/images/seating-images/section102-1.png",
"section-102-2": "/images/seating-images/section102-2.png",
"section-102-3": "/images/seating-images/section102-3.png",
"section-102-4": "/images/seating-images/section102-4.png",

"section-103-1":"/images/seating-images/section103-1.png",
"section-103-2": "/images/seating-images/section103-2.png",
"section-103-3": "/images/seating-images/section103-3.png",
"section-103-4": "/images/seating-images/section103-4.png",
"section-103-5": "/images/seating-images/section103-5.png",

"section-104-1": "/images/seating-images/section104-1.png",
"section-104-2": "/images/seating-images/section104-2.png",
"section-104-3": "/images/seating-images/section104-3.png",
"section-104-4": "/images/seating-images/section104-4.png",
"section-104-5": "/images/seating-images/section104-5.png",

"section-105": "/images/seating-images/section105.png",
"section-106": "/images/seating-images/section106.png",

"section-206-1": "/images/seating-images/section206-1.png",
"section-206-2": "/images/seating-images/section206-2.png",
"section-206-3": "/images/seating-images/section206-3.png",
"section-206-4": "/images/seating-images/section206-4.png",

"section-204-1": "/images/seating-images/section204-1.png",
"section-204-2": "/images/seating-images/section204-2.png",
"section-204-3": "/images/seating-images/section204-3.png",
"section-204-4": "/images/seating-images/section204-4.png",

"section-202-1": "/images/seating-images/section202-1.png",
"section-202-2": "/images/seating-images/section202-2.png",
"section-202-3": "/images/seating-images/section202-3.png",
"section-202-4": "/images/seating-images/section202-4.png",

"section-201-1": "/images/seating-images/section201-1.png",
"section-201-2": "/images/seating-images/section201-2.png",
"section-201-3": "/images/seating-images/section201-3.png",
"section-201-4": "/images/seating-images/section201-4.png",

"section-203-1": "/images/seating-images/section203-1.png",
"section-203-2": "/images/seating-images/section203-2.png",
"section-203-3": "/images/seating-images/section203-3.png",
"section-203-4": "/images/seating-images/section203-4.png",

"section-205-1": "/images/seating-images/section205-1.png",
"section-205-2": "/images/seating-images/section205-2.png",
"section-205-3": "/images/seating-images/section205-3.png",
"section-205-4": "/images/seating-images/section205-4.png",

"section-200-1": "/images/seating-images/section200-1.png",
"section-200-2": "/images/seating-images/section200-2.png",
"section-200-3": "/images/seating-images/section200-3.png",
"section-200-4": "/images/seating-images/section200-4.png",
"section-200-5": "/images/seating-images/section200-5.png",

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