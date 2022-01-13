

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
    timelineItemTitle.className = "timeline-item-title";

    const timelineItemDate = document.createElement("span");
    const date1 = document.createTextNode(date.date);
    timelineItemDate.appendChild(date1);
    timelineItem.appendChild(timelineItemDate);
    timelineItemDate.className = "timeline-item-Date";

  });








