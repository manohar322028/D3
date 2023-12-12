import { loadData } from "./data.js";

loadData().then(([featureData, streamData]) => {
  console.log(featureData);
  console.log(streamData);
});
