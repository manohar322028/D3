const width = window.innerWidth;
const height = window.innerHeight / 2;
const symbols = d3.symbols;
const symbol = d3.symbol;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const n = 100;

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#mask-1)");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#mask-2)");

const renderMask = (selection, id, inverted = false) => {
  const mask = selection.append("mask").attr("id", id);

  mask
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", inverted ? "white" : "black");

  mask
    .selectAll("g")
    .data(d3.range(symbols.length))
    .join((enter) =>
      enter
        .append("g")
        .attr("transform", (d) => `translate(${d * 180 + 125}, ${height / 2} )`)
        .append("path")
        .attr("d", (d) => symbol(symbols[d], 8000)())
        .attr("fill", inverted ? "black" : "white")
    );
};

svg.call(renderMask, "mask-1").call(renderMask, "mask-2", true);
