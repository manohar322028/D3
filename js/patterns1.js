const size = 500;
const points = 5000;
const r = 5;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", size)
  .attr("height", size);

const pointArray = [
  svg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", r)
    .attr("fill", "blue"),
  svg
    .append("circle")
    .attr("cx", size)
    .attr("cy", 0)
    .attr("r", r)
    .attr("fill", "blue"),
  svg
    .append("circle")
    .attr("cx", size)
    .attr("cy", size)
    .attr("r", r)
    .attr("fill", "blue"),
  svg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", size)
    .attr("r", r)
    .attr("fill", "blue"),

  svg
    .append("circle")
    .attr("cx", size / 2)
    .attr("cy", 0)
    .attr("r", r)
    .attr("fill", "red"),
  svg
    .append("circle")
    .attr("cx", size)
    .attr("cy", size / 2)
    .attr("r", r)
    .attr("fill", "red"),
  svg
    .append("circle")
    .attr("cx", size / 2)
    .attr("cy", size)
    .attr("r", r)
    .attr("fill", "red"),
  svg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", size / 2)
    .attr("r", r)
    .attr("fill", "red"),

  svg
    .append("circle")
    .attr("cx", size / 2)
    .attr("cy", size / 2)
    .attr("r", r)
    .attr("fill", "yellow"),
];

for (let i = 0; i < points; i++) {
  const x = Math.round(Math.random() * size);
  const y = Math.round(Math.random() * size);
  const dest = Math.floor(Math.random() * 9);

  svg
    .append("line")
    .attr("x1", x)
    .attr("y1", y)
    .attr("x2", pointArray[dest].attr("cx"))
    .attr("y2", pointArray[dest].attr("cy"))
    .attr("stroke", pointArray[dest].attr("fill"));
}

// using d3 data joins to create patterns

const num = 100;
const marks = [];
for (let j = 0; j < num; j++) {
  marks.push({
    y: j * 20,
    height: 10,
    width: size,
  });
}

d3.select("body")
  .append("svg")
  .attr("width", size)
  .attr("height", size)
  .selectAll("rect")
  .data(marks)
  .join("rect")
  .attr("x", 0)
  .attr("y", (d) => d.y)
  .attr("height", (d) => d.height)
  .attr("width", (d) => d.width);

// doing the same thing with d3 range

d3.select("body")
  .append("svg")
  .attr("width", size)
  .attr("height", size)
  .selectAll("rect")
  .data(d3.range(100))
  .join("rect")
  .attr("x", 0)
  .attr("y", (d) => d * 20)
  .attr("height", 10)
  .attr("width", size);
