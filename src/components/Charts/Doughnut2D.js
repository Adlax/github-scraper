// STEP 1 - Include Dependencies
// Include react
import React from "react";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import ZuneTheme from "fusioncharts/themes/fusioncharts.theme.zune";
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, ZuneTheme);

const ChartComponent = ({ data }) => {
	const chartConfigs = {
		type: "doughnut2d", // The chart type
		width: "100%", // Width of the chart
		height: "400", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: "Stars per language",
				theme: "zune",
				decimals: 0,
				doughnutRadius: "45%",
				showPercentValues: 0,
				// subCaption: "In MMbbl = One Million barrels",
				// xAxisName: "Country",
				// yAxisName: "Reserves (MMbbl)",
				// numberSuffix: "K",
			},
			// Chart Data
			data: data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
