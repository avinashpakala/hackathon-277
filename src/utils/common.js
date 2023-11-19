function generateYearArray(startYear, endYear) {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString()); // Converting year to string to match your example
    }
    return years;
  }


  function createChartObject(start, end, datasets, options) {

    const labels = generateYearArray(start, end);
    const legend = options;

    datasets = [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [30, 90, 67, 54, 10, 77],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ]

    return {
      labels,
      datasets,
      legend,
    };
  }
  
  export { generateYearArray, createChartObject };