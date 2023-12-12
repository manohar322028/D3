const csv = d3.csv;

const features = "../data/Features.csv";
const streams = "../data/Streams.csv";

const parseFeature = (d, i) => {
  d.rank = i + 1;
  d.name = d.name;
  d.duration = +d.duration;
  d.energy = +d.energy;
  d.key = +d.key;
  d.loudness = +d.loudness;
  d.speechiness = +d.speechiness;
  d.acousticness = +d.acousticness;
  d.instrumentalness = +d.instrumentalness;
  d.liveness = +d.liveness;
  d.valence = +d.valence;
  d.tempo = +d.tempo;
  d.danceability = +d.danceability;
  return d;
};

const parseStream = (d, i) => {
  d.rank = i + 1;
  d["Streams (Billions)"] = +d["Streams (Billions)"];
  return d;
};

const loadData = () => {
  return Promise.all([csv(features, parseFeature), csv(streams, parseStream)]);
};

export { loadData };
