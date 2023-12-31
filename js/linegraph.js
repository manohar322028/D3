const scaleLinear = d3.scaleLinear;
const extent = d3.extent;
const axisLeft = d3.axisLeft;
const axisBottom = d3.axisBottom;

export const lineGraph = () => {
  let width;
  let height;
  let data;
  let xValue;
  let yValue;
  let margin;
  let thickness;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const my = async (selection) => {
    const x = scaleLinear()
      .domain(extent(data, xValue))
      .range([margin.left, width - margin.right]);

    const y = scaleLinear()
      .domain(extent(data, yValue))
      .range([height - margin.bottom, margin.top]);

    const marks = data.map((d) => ({
      x: x(xValue(d)),
      y: y(yValue(d)),
    }));
    await delay(2000);

    const circles = selection
      .selectAll("circle")
      .data(marks)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", thickness * 1.5);

    // console.log("marks:", marks);
    selection
      .selectAll("path")
      .data([marks])
      .join("path")
      .attr(
        "d",
        d3
          .line()
          .x((d) => d.x)
          .y((d) => d.y)
          .curve(d3.curveBasis)
      )
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", thickness);

    selection
      .selectAll(".y-axis")
      .data([null])
      .join("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(axisLeft(y));

    selection
      .selectAll(".x-axis")
      .data([null])
      .join("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(axisBottom(x));
  };

  my.width = function (_) {
    return arguments.length ? ((width = +_), my) : width;
  };

  my.height = function (_) {
    return arguments.length ? ((height = +_), my) : height;
  };

  my.data = function (_) {
    return arguments.length ? ((data = _), my) : data;
  };

  my.xValue = function (_) {
    return arguments.length ? ((xValue = _), my) : xValue;
  };

  my.yValue = function (_) {
    return arguments.length ? ((yValue = _), my) : yValue;
  };

  my.margin = function (_) {
    return arguments.length ? ((margin = _), my) : margin;
  };

  my.thickness = function (_) {
    return arguments.length ? ((thickness = +_), my) : thickness;
  };

  return my;
};
