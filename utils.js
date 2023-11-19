
const apis = {
    macro: {
        gdp_growth_rage: "https://backend-280.onrender.com/macro/getFileData/{startDate}/{endDate}/GDP%20growth/gdp/{country}",
        gdp_current_usd: "https://backend-280.onrender.com/macro/getFileData/{startDate}/{endDate}/GDP%20(current%20US$)/GDP_Current_USD/{country}",
        current_account_balance: "https://backend-280.onrender.com/macro/getFileData/{startDate}/{endDate}/CurrentAccountBalance/CurrentAccountBalance/{country}",
        fdi_net: "https://backend-280.onrender.com/macro/getFileData/{startDate}/{endDate}/Foreign%20direct%20investment/ForeigDirectInvestmentNet/{country}",
        fdi_outflows: "https://backend-280.onrender.com/macro/getFileData/{startDate}/{endDate}/Foreign%20direct%20investment,%20net%20outflows/ForeignDirectInvestmentNetOutflows/{country}",
        fdi_inflows: "https://backend-280.onrender.com/macro/getFileData/{startDate}/{endDate}/Foreign%20direct%20investment,%20net%20inflows/ForeigDirectInvestmentNetInflows/{country}"
    },
    agriculture: {
        gdp: "https://backend-280.onrender.com/agri/getFileData/{startDate}/{endDate}/agriculture/{country}",
        manufacturing_gdp: "https://backend-280.onrender.com/agri/getFileData/{startDate}/{endDate}/manufacturing/{country}",
        agriculture_forestry: "https://backend-280.onrender.com/agri/getFileData/{startDate}/{endDate}/annualgrowth/{country}",
        credit: "https://backend-280.onrender.com/agri/getFileData/{startDate}/{endDate}/fertilizer_cons/{country}",
        fertilizer_prod: "https://backend-280.onrender.com/agri/getFileData/{startDate}/{endDate}/fertilizer_prod/{country}",
        fertilizer_cons: "https://backend-280.onrender.com/agri/getFileData/{startDate}/{endDate}/fertilizer_cons/{country}"
    },
    debt: {
        importReserves: "https://backend-280.onrender.com/debt/getFileData/{startDate}/{endDate}/importReserves/{country}",
        goldReserves: "https://backend-280.onrender.com/debt/getFileData/{startDate}/{endDate}/goldReserves/{country}",
        totalReserves: "https://backend-280.onrender.com/debt/getFileData/{startDate}/{endDate}/totalReserves/{country}",
        debtServices: "https://backend-280.onrender.com/debt/getFileData/{startDate}/{endDate}/debtServices/{country}",
        totalDebt: "https://backend-280.onrender.com/debt/getFileData/{startDate}/{endDate}/totalDebt/{country}",
        currentGni: "https://backend-280.onrender.com/debt/getFileData/{startDate}/{endDate}/currentGni/{country}"
    }
}

function replacePlaceholders(template, values) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return values.hasOwnProperty(key) ? values[key] : match;
    });
  }
  

const fetchApiResponse = async (serviceName, start, end, country, persona, selectedOptions, setResult) => {
try {
    let results = [];
    let api_templates = apis[serviceName]
    selectedOptions.forEach(async option => {
        let apiUrl = replacePlaceholders(api_templates[option], {startDate: start, endDate: end, country})
        const response = await fetch(apiUrl);
        const data = await response.json();
        results.push(data);
    });
    setResult(results);
    return results
} catch (error) {
    console.error('There was an error fetching the data:', error);
    Alert.alert('Error', 'There was an error fetching the data.');
}
};

export default {fetchApiResponse}