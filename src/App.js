import "./App.css";

import Navbar from "./components/Navbar";
// import About from "./components/About";
// import { useState } from "react";
import Textform from './components/Textform'
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("  Dark mode has been enabled", "success");
      document.title = "Text Util - DarkMode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("  Light mode has been enabled", "success");
      document.title = "Text Util";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textkautils"
          abouttext="About Section"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Textform Heading="Enter your text here" mode={mode} />


        {/* <Routes>
          <Route exact path="/about" element={<About />} /> */}
          {/* <Route */}
           {/* exact path="/textform" */}
            {/* element={<Textform Heading="Enter your text here" mode={mode} />} */}
          {/* /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
