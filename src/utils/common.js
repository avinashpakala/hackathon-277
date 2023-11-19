function generateYearArray(startYear, endYear) {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString()); // Converting year to string to match your example
    }
    return years;
  }
  
  export { generateYearArray };