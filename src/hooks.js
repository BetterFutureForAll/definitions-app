import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import definitionsCSV from "./assets/def2022.csv";

let definitionsJSON = require('./assets/definitions.json')

export const parsedDef = d3.csv(definitionsCSV, (data) => {
  if (data['Dimension'].length > 0) return data;
});

export const useParsedData = () => {
  let [data, setData] = useState([]);
  useEffect(()=> {
    setData(definitionsJSON.definitionsArray)
  }, [])
  console.log(data);
  return data;
}

export const useDimensions = (data) => {
  let [dimensionGroups, setDimensionGroups ] = useState({});
  
  useEffect(()=> {
    if(!data) return;
    // let groupedResult = data.group(({ dimension })=> dimension)
    // setDimensionGroups(groupedResult)
  }, [data])
  return dimensionGroups;

}

export const nestedData = ()=> {

let uniqueDimensionStrings = new Set(definitionsJSON.definitionsArray.map(JSON.stringify));
let uniqueDimensionsArray = Array.from(uniqueDimensionStrings);
let uniqueDimensionsObjects = new Set(uniqueDimensionsArray.map(JSON.parse));
let uniqueDimensions = new Set(definitionsJSON.definitionsArray.map(({ dimension })=> dimension? dimension : null));

return uniqueDimensions;


};

export const regEx = (d) => {
  return d.replace(/ /g, "_");
}