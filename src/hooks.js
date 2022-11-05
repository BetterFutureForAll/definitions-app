import * as d3 from 'd3';

let definitionsCSV = require('./assets/definitions-2022.csv');

export const parsedDef = d3.csv(definitionsCSV,(data)=> {

  if (data['Dimension'].length > 0) return data;
});

export const regEx = (d) => {
  return d.replace(/ /g, "_");
}