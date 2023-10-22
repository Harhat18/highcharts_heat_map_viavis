import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsExporting from "highcharts/modules/exporting";
import options from "./options";

HighchartsHeatmap(Highcharts);
HighchartsExporting(Highcharts);

const HeatMapChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HeatMapChart;
