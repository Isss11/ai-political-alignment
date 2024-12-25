import PoliticalMap from "../components/political-map/PoliticalMap";
import PollingGraph from "../components/polling-graph/PollingGraph";

const Analysis = () => {
  return (
    <div>
      <h2>Canada by Political Alignment</h2>
      <PoliticalMap />
      <h2>Political Alignments, Proportions</h2>
      <PollingGraph />
    </div>
  );
};

export default Analysis;
