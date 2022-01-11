import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alerts from "./components/Alerts";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const toggleMode = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("light mode has been enabled", "success");
  //   } else {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#0d2953";
  //     showAlert("dark mode has been enabled", "success");
  //   }
  // };
  const toggleModeviolet = (color) => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      // setInterval(() => {
      // document.title='Text utils is awesome mode';
      // }, 2000);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = color;
      showAlert("dark green mode has been enabled", "success");
      // setInterval(() => {
      // document.title='Text utils amazing mode';
      // }, 1500);

    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Text-Utils"
        aboutText="About"
        mode={mode}
        // toggleMode={toggleMode}
        toggleModeviolet={toggleModeviolet}
      />
      <Alerts alert={alert}/>
      <Routes>
      <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} to="/" />} />
      <Route exact path="/about" element={<About to="/about" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
