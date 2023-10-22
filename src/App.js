import "./App.css";
import HeatMapChart from "./HeatMapChart/HeatMapChart";

function App() {
  return (
    <div className="App">
      <div className="highcharts-table">
        <HeatMapChart />
      </div>
      <p className="highcharts-description">
        Heatmap showing employee data per weekday. Heatmaps are commonly used to
        visualize hot spots within data sets, and to show patterns or
        correlations. Due to their compact nature, they are often used with
        large sets of data.
      </p>
    </div>
  );
}

export default App;
