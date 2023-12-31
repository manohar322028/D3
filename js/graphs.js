import { loadData } from "./data.js";
import { lineGraph } from "./linegraph.js";

const width = window.innerWidth;
const height = window.innerHeight;

const graph = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

loadData().then(([, streamData]) => {
  const plot = lineGraph()
    .width(width)
    .height(height)
    .data(streamData)
    .xValue((d) => d["rank"])
    .yValue((d) => d["Streams (Billions)"])
    .margin({
      top: 20,
      right: 20,
      bottom: 40,
      left: 50,
    })
    .thickness(2);

  graph.call(plot);
});
