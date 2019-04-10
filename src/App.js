import React from "react";
import Title from "./Components/title";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "2950feb8a261e186fe11eaaea2c52f9b";

class App extends React.Component {
  state = {
    tempertaure: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if(city && country) {
  
this.setState({
  temperature:data.main.temp,
  city:data.name,
  country:data.sys.country,
  humidity: data.main.humidity,
  description: data.weather[0].description,
  error:""
});
    }else {
      this.setState({
      temperature:undefined,
      city: undefined,
      country:undefined,
      humidity: undefined,
      description: undefined,
      error:"Must enter a valid value!"
      });
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.tempertaure}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
