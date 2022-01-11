import {dates} from "./data.js";
console.log(dates);


const timelineItem = document.createElement("div");
const text = document.createTextNode("This is the timeline-item");
timelineItem.appendChild(text);
document.body.appendChild(timelineItem);
timelineItem.className = "timeline-item";

const timelineItemTitle = document.createElement("h2");
const title = document.createTextNode("This is the timeline-item-title");
timelineItemTitle.appendChild(title);
timelineItem.appendChild(timelineItemTitle);
timelineItemTitle.className = "timeline-item-Title";

const timelineItemDate = document.createElement("span");
const date1 = document.createTextNode("This is the timeline-item-date");
timelineItemDate.appendChild(date1);
timelineItem.appendChild(timelineItemDate);
timelineItemDate.className = "timeline-item-Date";