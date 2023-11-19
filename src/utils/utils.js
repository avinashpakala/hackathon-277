
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

const indicators = {
    "GDP Growth Rage": apis.macro.gdp_growth_rage,
    "GDP Current USD": apis.macro.gdp_current_usd,
    "Current Account Balance (% of GDP)": apis.macro.current_account_balance,
    "Foreign direct investment, net (BoP, current US$)": apis.macro.fdi_net,
    "Foreign direct investment, net inflows (% of GDP)": apis.macro.fdi_inflows,
    "FDI-NetOutflows(%ofGDP)": apis.macro.fdi_outflows,
    "Agricultural Contribution (% GDP)": apis.agriculture.gdp,
    "Manufacturing(%GDP)": apis.agriculture.manufacturing_gdp,
    "Agriculture, forestry, and fishing, value added (annual % growth)": apis.agriculture.agriculture_forestry,
    "Fertilizer consumption (kilograms per hectare of arable land)": apis.agriculture.fertilizer_cons,
    "Fertilizer consumption (% of fertilizer production)": apis.agriculture.fertilizer_prod,
    "Total reserves in months of imports": apis.debt.importReserves,
    "Total reserves (includes gold, current US$)": apis.debt.goldReserves,
    "Total reserves (% of total external debt)": apis.debt.totalReserves,
    "Debt service (PPG and IMF only, % of exports of goods, services and primary income)": apis.debt.debtServices,
    "Total debt service (% of GNI)": apis.debt.totalDebt,
    "GNI (current US$)": apis.debt.currentGni
};

function replacePlaceholders(template, values) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return values.hasOwnProperty(key) ? values[key] : match;
    });
  }
  

const fetchApiResponse = async (serviceName, start, end, country, selectedOptions) => {
try {
    let results = {};
    for (const option of selectedOptions) {
        let apiUrl = replacePlaceholders(indicators[option], {startDate: start, endDate: end, country})
        const response = await fetch(apiUrl);
        const data = await response.json();
        results[option] = data;
      
    }
    return results
} catch (error) {
    console.error('There was an error fetching the data:', error);
    Alert.alert('Error', 'There was an error fetching the data.');
}
};

export default {fetchApiResponse}