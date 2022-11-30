import Draw from "../draw";
import { regEx } from "../hooks";
import React from 'react'

test.skip('should create a snapshot from the data', async () => {
  let data = [
    {
      "Component": "Nutrition and Basic Medical Care",
      "Definition": "Age-standardized Disability-Adjusted Life Years (DALYs) rate caused by HIV/AIDS, tuberculosis, diarrhea, intestinal infections, respiratory infections, otitis media, meningitis, encephalitis, diptheria, whooping cough, tetanus, measles, varicella, herpes zoster, malaria, Chagas disease, leishmaniasis, typanosomiasis, schistosomiasis, cysticercosis, cycstic echinococcosis, lymphatic filariasis, onchocerciasis, trachoma, dengue, yellow feber, rabies, intestinal nematode infections, food-borne trematodiases, leprosy, ebola, zika virus, guinea worm disease, sexually transmitted diseases (excluding HIV), hepatitis, and other infectious diseases per 100,000 people.",
      "Dimension": "Basic Human Needs",
      "Indicator Number": "1",
      "Indicator name": "Infectious diseases ",
      "Link": "http://ghdx.healthdata.org/gbd-results-tool",
      "Notes": "",
      "Source": "Institute for Health Metrics and Evaluation",
      "Unit of measurement": "(DALYs/100,000)",
      "Variable name in original souce": "",
    },
    {
      "Component": "Personal Freedom and Choice",
      "Definition": "",
      "Dimension": "Opportunity",
      "Indicator Number": "2",
      "Indicator name": "Infectious diseases ",
      "Link": "http://ghdx.healthdata.org/gbd-results-tool",
      "Notes": "",
      "Source": "Institute for Health Metrics and Evaluation",
      "Unit of measurement": "(DALYs/100,000)",
      "Variable name in original souce": "",
    },
    {
      "Component": "Access to Basic Knowledge",
      "Definition": "",
      "Dimension": "Foundations of Wellbeing",
      "Indicator Number": "2",
      "Indicator name": "Infectious diseases ",
      "Link": "http://ghdx.healthdata.org/gbd-results-tool",
      "Notes": "",
      "Source": "Institute for Health Metrics and Evaluation",
      "Unit of measurement": "(DALYs/100,000)",
      "Variable name in original source": "",
    }
  ];
  const svgRef = React.createRef();
  let result = await Draw(data, svgRef, regEx);
  expect(await result).toContainElement(`div`);
});