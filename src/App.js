import "./App.css";
import DefaultHeader from "./Components/Default/DefaultHeader/DefaultHeader.jsx";
import DefaultAlgorithmTitle from "./Components/Default/DefaultAlgorithmTitle/DefaultAlgorithmTitle.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Algorithms.css";
import PointDistribution from "./Components/PointDistribution/PointDistribution.jsx";

export default function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <DefaultAlgorithmTitle
        title="Segmentented Random Points"
        subtitle="An algorithm for evenly spaced out, random points."
      />
      <PointDistribution className="pb-3" />
      <div className="container-fluid"></div>
    </div>
  );
}
