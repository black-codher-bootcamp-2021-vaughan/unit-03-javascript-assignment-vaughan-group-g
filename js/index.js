

import {dates} from "./data.js";
console.log(dates);

 dates.map((date) => {
    const timelineItem = document.createElement("div");
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
    document.body.appendChild(timelineItem);
timelineItem.className = "timeline-item";


    const timelineItemSummary = document.createElement("summary");
    const summary1 = document.createTextNode(date.summary);
    timelineItemSummary.appendChild(summary1);
    timelineItem.appendChild(timelineItemSummary);
    timelineItemSummary.className = "timeline-item-Summary"; 
    document.body.appendChild(timelineItem);

    const button = document.createElement("button");
    const text = document.createTextNode("Click to see the full information");
    button.appendChild(text);
    document.body.appendChild(button);

    const timelineItemMoreInfo = document.createElement("div");
    timelineItemMoreInfo.className = "timeline-item-more-info";
    timelineItem.appendChild(timelineItemMoreInfo);
    const ModalContent = document.createElement("span");
    ModalContent.className = "close";
    timelineItemMoreInfo.appendChild(ModalContent);
    const modalP = document.createElement("p");
    modalP.className = "text inside the modal";
    timelineItemMoreInfo.appendChild(modalP);
    




    // button.onclick = function() {
    //     myModal.style.display = "block";
    //  }

    //  .onclick = function(){
    //     modal.style.display = "none"
    //   }

    //   window.onclick = function(e){
    //     if(e.target == modal){
    //       modal.style.display = "none"
    //     }
    //   }
    // document.body.appendChild(myModal);


 }); 
