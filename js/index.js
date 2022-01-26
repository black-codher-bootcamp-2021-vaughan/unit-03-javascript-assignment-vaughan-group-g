//make buttons the same class
// figure out how to make the modal disappear
// content in the modal


import {dates} from "./data.js";
console.log(dates);

 dates.map((date) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    document.body.appendChild(timelineItem);
    const timelineItemTitle = document.createElement("h2");
    const title = document.createTextNode(date.title);
    timelineItemTitle.appendChild(title);
    timelineItem.appendChild(timelineItemTitle);
    timelineItemTitle.className = "timeline-item-Title";
    
    const timelineItemDate = document.createElement("span");
    const date1 = document.createTextNode(date.date);
    timelineItemDate.appendChild(date1);
    timelineItem.appendChild(timelineItemDate);
    timelineItemDate.className = "timeline-item-Date"; 
    




    const timelineItemSummary = document.createElement("summary");
    const summary1 = document.createTextNode(date.summary);
    timelineItemSummary.appendChild(summary1);
    timelineItem.appendChild(timelineItemSummary);
    timelineItemSummary.className = "timeline-item-Summary"; 
    document.body.appendChild(timelineItem);



    const timelineItemMoreInfo = document.createElement("button");
    const text = document.createTextNode("Click to see the full information");
    timelineItemMoreInfo.appendChild(text);
    timelineItem.appendChild(timelineItemMoreInfo);
    document.body.appendChild(timelineItemMoreInfo);
    timelineItemMoreInfo.className = "timeline-item-more-info"; 


    const modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    timelineItem.appendChild(modalContainer);

    const ModalContent = document.createElement("div");
    ModalContent.className = "modal";
    modalContainer.appendChild(ModalContent);

    const modalDate = document.createElement("p");
    const modalDateText = document.createTextNode(date.date);
    modalDate.appendChild(modalDateText);
    modalDate.id = "modal-date";
    document.body.appendChild(modalDate);
    ModalContent.appendChild(modalDate);

    const modalTitle = document.createElement("p");
    const modalTitleText = document.createTextNode(date.title);
    modalTitle.appendChild(modalTitleText);
    modalTitle.id = "modal-title";
    document.body.appendChild(modalTitle);
    ModalContent.appendChild(modalTitle);

    const modalImage = document.createElement("p");
    const modalImageText = document.createTextNode(date.image);
    modalImage.appendChild(modalImageText);
    modalImage.id = "modal-image";
    document.body.appendChild(modalImage);
    ModalContent.appendChild(modalImage);

    const modalFullDescription = document.createElement("p");
    const modalFullDescriptionText = document.createTextNode(date.fullDescription);
    modalFullDescription.appendChild(modalFullDescriptionText);
    modalFullDescription.id = "modal-full-description";
    document.body.appendChild(modalFullDescription);
    ModalContent.appendChild(modalFullDescription);

   
    
    const modalCloseButton = document.createElement("button");
    const closeMeText = document.createTextNode("Close ");
    modalCloseButton.appendChild(closeMeText);
    document.body.appendChild(modalCloseButton);
    modalCloseButton.id = "modal-close-button"; 
    ModalContent.appendChild(modalCloseButton);
    
    



    timelineItemMoreInfo.onclick = function() {
        modalContainer.style.display = "block";
     }

     modalCloseButton.onclick = function() {
        modalContainer.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modalContainer) {
          modalContainer.style.display = "none"
        }
      }
  
 }); 
