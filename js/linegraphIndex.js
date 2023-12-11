const size = 1000;
const csv = d3.csv;
const select = d3.select;
import { linegraph } from "./linegraph.js";

const features = "../data/Features.csv";
const streams = "../data/Streams.csv";

// csv(features).then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

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

// csv(streams).then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

const parseStream = (d, i) => {
  d.rank = i + 1;
  d.name = d["Song"];
  d.artist = d["Artist"];
  d.streams = +d["Streams (Billions)"];
  d.release_date = d["Release Date"];
};
