import React from "react";

//object to define temperature scales
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
//functions to calucate celsius and fahrenheit
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

//function to authomatically convert celsius to fahrenheit when input changes
function toConvert(temp, convertTempetature) {
  const output = convertTempetature(parseFloat(temp));
  return output;
}

//to handle user input
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }
  render() {
    const scale = this.props.scale;
    const inputValue = this.props.inputValue;
    return (
      <fieldset>
        <legend>Temperature in {scaleNames[scale]}:</legend>
        <input type="number" value={inputValue} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

//to calculate
class Calucator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }
  handleFahrenheitChange(temperature) {
    this.setState({ temperature, scale: "f" });
  }

  render() {
    const inputTemp = this.state.temperature;
    const inputScale = this.state.scale;

    const celsius =
      inputScale === "f" ? toConvert(inputTemp, toCelsius) : inputTemp;
    const fahrenheit =
      inputScale === "c" ? toConvert(inputTemp, toFahrenheit) : inputTemp;
    return (
      <div>
        <TemperatureInput
          scale="c"
          inputValue={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          inputValue={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Calucator />
    </div>
  );
}

export default App;
