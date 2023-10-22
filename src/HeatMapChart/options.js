import data from "./data";
import Highcharts from "highcharts";

const options = {
  chart: {
    type: "heatmap",
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 0,
  },
  title: {
    text: "Sales per employee per weekday",
    style: {
      fontSize: "1em",
    },
  },
  xAxis: {
    categories: [
      "Alexander",
      "Marie",
      "Maximilian",
      "Sophia",
      "Lukas",
      "Maria",
      "Leon",
      "Anna",
      "Tim",
      "Laura",
    ],
  },
  yAxis: {
    categories: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Total",
      "Average",
    ],
    labels: {
      formatter: function () {
        if (this.chart.chartWidth < 500) {
          return this.value.substring(0, 1);
        } else {
          return this.value;
        }
      },
    },
    title: null,
    reversed: true,
  },

  accessibility: {
    point: {
      descriptionFormat:
        "{(add index 1)}. " +
        "{series.xAxis.categories.(x)} sales " +
        "{series.yAxis.categories.(y)}, {value}.",
    },
  },

  colorAxis: {
    min: 0,
    max: 250,
    minColor: "#FFFFFF",
    maxColor: Highcharts.getOptions().colors[0],
  },
  legend: {
    align: "right",
    layout: "vertical",
    margin: 0,
    verticalAlign: "top",
    y: 25,
    symbolHeight: 280,
  },
  tooltip: {
    format:
      "<b>{series.xAxis.categories.(point.x)}</b> sold<br>" +
      "<b>{point.value}</b> items on <br>" +
      "<b>{series.yAxis.categories.(point.y)}</b>",
  },

  series: [
    {
      name: "Sales per employee",
      borderWidth: 0.2,
      data: data,
      dataLabels: {
        enabled: true,
        color: "#000000",
      },
      turboThreshold: 0,
    },
  ],
  exporting: {
    enabled: true,
    buttons: {
      contextButton: {
        menuItems: [
          "viewFullscreen",
          "printChart",
          "separator",
          "downloadPNG",
          "downloadJPEG",
          "downloadPDF",
          "downloadSVG",
        ],
      },
    },
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          yAxis: {
            labels: {
              style: {
                fontSize: "8px",
              },
            },
          },
        },
      },
    ],
  },
};

export default options;
