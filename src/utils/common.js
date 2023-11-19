function generateYearArray(startYear, endYear) {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString()); // Converting year to string to match your example
    }
    return years;
  }
  const baseColors = [
    { r: 134, g: 65, b: 244 },  // Purple
    { r: 255, g: 0, b: 0 },     // Red
    { r: 0, g: 255, b: 0 },     // Green
    { r: 0, g: 0, b: 255 },     // Blue
    { r: 255, g: 165, b: 0 },   // Orange
    { r: 255, g: 255, b: 0 },   // Yellow
    { r: 75, g: 0, b: 130 },    // Indigo
    { r: 238, g: 130, b: 238 }  // Violet
];

const colorFunctions = baseColors.map(color => {
    return (opacity = 1) => `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
});


  function createChartObject(start, end, data, options) {
    console.log("data", data);
    const labels = generateYearArray(start, end);
    const legend = Object.keys(data);
    console.log("legend", legend);
    const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
    var datasets = [];
    for (let i = 0; i < legend.length; i++) {
      console.log("legend[i]", legend[i])
      const val = data[legend[i]]?.map(subArray => subArray[1]);
      datasets.push({
        data: val,
        color: colorFunctions[i], // optional
        strokeWidth: 2, // optional
      });
      
    }
    console.log("datasets", datasets);

    return {
      labels,
      datasets,
      legend,
    };
  }
  
  export { generateYearArray, createChartObject };