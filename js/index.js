//make buttons the same class
// figure out how to make the modal disappear
// content in the modal


import {dates} from "./data.js";
console.log(dates);

 dates.map((date) => {
    const timelineItem = document.createElement("div");
    document.body.appendChild(timelineItem);
    timelineItem.className = "timeline-item";
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



    const buttonOpen = document.createElement("button");
    const text = document.createTextNode("Click to see the full information");
    buttonOpen.appendChild(text);
    document.body.appendChild(buttonOpen);
    buttonOpen.className = "open"; 


    const timelineItemMoreInfo = document.createElement("div");
    timelineItemMoreInfo.className = "timeline-item-more-info";
    timelineItem.appendChild(timelineItemMoreInfo);

    const ModalContent = document.createElement("div");
    ModalContent.className = "modal";
    timelineItemMoreInfo.appendChild(ModalContent);

    const modalP = document.createElement("p");
    const modalIptext = document.createTextNode([date.title , date.date, date.summary]);
    modalP.appendChild(modalIptext);
    modalP.className = "text-inside-the-modal";
    document.body.appendChild(modalP);
    ModalContent.appendChild(modalP);

    
    const buttonClose = document.createElement("button");
    const closeMeText = document.createTextNode("Close ");
    buttonClose.appendChild(closeMeText);
    document.body.appendChild(buttonClose);
    buttonClose.className = "close"; 
    ModalContent.appendChild(buttonClose);
    
    



    buttonOpen.onclick = function() {
        timelineItemMoreInfo.style.display = "block";
     }

     buttonClose.onclick = function() {
        timelineItemMoreInfo.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == timelineItemMoreInfo) {
          timelineItemMoreInfo.style.display = "none"
        }
      }
  
 }); 
