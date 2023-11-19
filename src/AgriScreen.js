import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MultiLineChart from "./MultiLineChart";
import CheckboxGroup from "../CheckboxGroup";
import {createChartObject, generateYearArray } from "./utils/common";
import PersonaPicker from "../PersonaPicker";
import YearPicker from "../YearPicker";
import AnnotationList from "./AnnotationList";
import CountryPicker from "../CountryPicker";
import apis from './utils/utils'; // Adjust the path as necessary

export default function AgriScreen({ navigation }) {
  const [country, setCountry] = useState(""); // Country state
  const [persona, setPersona] = useState(""); // Country state

  const [showChart, setShowChart] = useState(false); // To toggle chart view
  const [showEditor, setShowEditor] = useState(false); // To toggle annotation editor
  const [data, setData] = useState([]); // Chart data state
  const [selectedYear, setSelectedYear] = useState("2020");
  const [start, setStart] = useState("2012");
  const [end, setEnd] = useState("2020");
  const [chartData, setChartData] = useState([]); // Chart data state
  const [selectedOptions, setSelectedOptions] = useState([]);
  const macroOptions = [
    "Agricultural Contribution (% GDP)",
    "Manufacturing(%GDP)",
    "Agriculture, forestry, and fishing, value added (annual % growth)",
    "Fertilizer consumption (kilograms per hectare of arable land)",
    "Fertilizer consumption (% of fertilizer production)"
];
  // Generate years from 2016 to 2020
  const years = generateYearArray(2016, 2020);


  const handleShowPress = async () => {
    try{
      console.log("country", country);
      console.log("persona", persona);
      console.log("start", start);
      console.log("end", end);
      console.log("selectedOptions", selectedOptions);
      const result = await apis.fetchApiResponse("macro", start, end, country, selectedOptions);
      console.log("result", result);
      const chartData = createChartObject(start, end, result, selectedOptions);
      setChartData(chartData); // Set data for chart
      setData(result); // Set data for chart
      setShowChart(true); // Show chart screen
    }
    catch(e){
      console.log(e);
    }
   
    
  };

  const handleCheckboxChange = (option) => {
    console.log("option", option);
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(
            (currentOption) => currentOption !== option
          )
        : [...prevSelectedOptions, option]
    );
  };

  const handleGoBackPress = () => {
    setShowChart(false); // Hide chart and show picker options
  };
  return (
    <View style={styles.container}>
      {showChart ? (
        <>
          <TouchableOpacity onPress={handleGoBackPress} style={styles.button}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
          {persona == "ECON Researcher" && <AnnotationList />}
          <MultiLineChart data={chartData} />
        </>
      ) : (
        <>
          <CountryPicker onSelectCountry={setCountry} />
          {country ? (
            <Text style={{ color: "black", textAlign: "center" }}>
              {country}
            </Text>
          ) : (
            <Text />
          )}
          <PersonaPicker onSelectPersona={setPersona} />
          {persona ? (
            <Text style={{ color: "black", textAlign: "center" }}>
              {persona}
            </Text>
          ) : (
            <Text />
          )}
          <YearPicker onSelectYear={setStart} />
          {persona ? (
            <Text style={{ color: "black", textAlign: "center" }}>{start}</Text>
          ) : (
            <Text />
          )}
          <YearPicker onSelectYear={setEnd} />
          {persona ? (
            <Text style={{ color: "black", textAlign: "center" }}>{end}</Text>
          ) : (
            <Text />
          )}
          <CheckboxGroup
          options={macroOptions}
            selectedOptions={selectedOptions}
            handleCheckboxChange={handleCheckboxChange}
          />
          <TouchableOpacity
            onPress={handleShowPress}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: "blue",
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Show</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
  },
  picker: {
    width: 200,
    height: 44,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "blue",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
