import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import VerticalLinearStepper from "./components/vertical-stepper";
import { StyledEngineProvider } from "@mui/styled-engine-sc";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <VerticalLinearStepper></VerticalLinearStepper>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
