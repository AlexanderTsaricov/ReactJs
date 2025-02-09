import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

function convertToFahrenheit(celsius) {
    return (1.8 * celsius + 32).toFixed(2);
}

function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) / 1.8).toFixed(2);
}

function TemperatureConverter({ temperatureValue }) {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const changeFahrenheit = (e) => {
        const value = e.target.value;
        if (value === "") {
            setCelsius("");
            setFahrenheit("");
            return;
        }
        if (value != "") {
            setFahrenheit(value);
            setCelsius(convertToCelsius(Number(value)));
        }
    };

    const changeCelsius = (e) => {
        const value = e.target.value;
        if (value === "") {
            setCelsius("");
            setFahrenheit("");
            return;
        }
        if (value != "") {
            setCelsius(value);
            setFahrenheit(convertToFahrenheit(Number(value)));
        }
    };

    return (
        <div className="converterBox">
            <TextField
                className="converterBox_textField"
                id="outlined-basic"
                label="Celsius"
                variant="outlined"
                value={celsius}
                onChange={changeCelsius}
            />
            <TextField
                className="converterBox_textField"
                id="filled-basic"
                label="Fahrenheit"
                variant="filled"
                value={fahrenheit}
                onChange={changeFahrenheit}
            />
        </div>
    );
}

export default TemperatureConverter;
