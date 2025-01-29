declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.bmp";
declare module "*.gif";
declare module "*.mp4";
declare module "*.ttf";
declare module "*.svg";

declare module "react-apexcharts" {
  import React from "react";
  interface ChartProps {
    options: ApexCharts.ApexOptions;
    series: ApexCharts.ApexOptions["series"];
    type:
      | "line"
      | "area"
      | "bar"
      | "pie"
      | "donut"
      | "radar"
      | "histogram"
      | "scatter"
      | "heatmap"
      | "bubble"
      | "candlestick"
      | "radialBar"
      | "rangeBar"
      | "polarArea"
      | "treemap"
      | "boxPlot";
    width?: string | number;
    height?: string | number;
  }
  const Chart: React.FC<ChartProps>;
  export default Chart;
}
