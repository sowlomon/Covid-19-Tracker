import React,{ useState, useEffect } from 'react'
import { MenuItem,FormControl,Select, Card, CardContent} from '@material-ui/core';
import InfoBox from "./InfoBox";
import Map from "./Map"
import Table from "./Table"
import {sortData, prettyPrintStat} from "./util"
import LineGraph from "./LineGraph"
import covid from "./covid.jpg"
import './App.css';
import "leaflet/dist/leaflet.css"



function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide")
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData , setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796});
  const [mapZoom, setMapZoom]= useState(3)
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");


  useEffect(() =>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data =>{
      setCountryInfo(data);
    })
  }, [])




  useEffect(() =>{
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) =>({
          name: country.country,
          value: country.countryInfo.iso2
        }));
        
        const sortedData = sortData(data);
        setCountries(countries);
        setMapCountries(data);
        setTableData(sortedData);
      })
    }

    getCountriesData();
    
  }, []);
 
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    


    const url = 
      countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" 
      :`https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });

  
    
  };



  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1><img  style={{height:'45px'}} src={covid} alt="covid"></img> COVID-19-TRACKER </h1>
          <FormControl className="app_dropdown">
            <Select variant ="outlined" onChange = {onCountryChange} value ={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
              { countries.map((country) =>(
              <MenuItem value={country.value}>{country.name}</MenuItem> 
              ))}

            </Select>
          </FormControl>
        </div>
        <div className="app_stats">
          <InfoBox
            isRed
            active={casesType ==="cases"}
            onClick={(e) => setCasesType("cases")} 
            title="Coronavirus cases" 
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          /> 
           
          <InfoBox
            active={casesType ==="recovered"} 
            onClick={(e) => setCasesType("recovered")} 

            title="Recovered" 
            cases={prettyPrintStat(countryInfo.todayRecovered)} 
            total={prettyPrintStat(countryInfo.recovered)}
          />

          <InfoBox 
            isRed
            active={casesType ==="deaths"} 
            onClick={(e) => setCasesType("deaths")} 
            title="Deaths"  
            cases={prettyPrintStat(countryInfo.todayDeaths)} 
            total={prettyPrintStat(countryInfo.deaths)}
          /> 
          
        </div>

      

        


        
        <Map
        casesType={casesType}
        countries = {mapCountries}
        center ={mapCenter}
        zoom={mapZoom}
        />
      
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases By Country</h3>
          <Table countries={tableData} />
          <h3 className="app_graphTitle">Worldwide New {casesType}</h3>
          <LineGraph className="app_graph" casesType={casesType}/>
        
        
          <h3 className="app_preTitle">Prevention For Covid-19:</h3>

          <span>1. Wash your hands often.</span>
          <span>2. Use your elbow to block your mouth while you cough.</span>
          <span>3. Always put your mask around people.</span>
          <span>4. Avoid using your hands to touch your face.</span>
          
        </CardContent>
        


      </Card>

    </div>
     
  );
}

export default App;
