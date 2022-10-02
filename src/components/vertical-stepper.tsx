import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import { markdownList, markdownMap } from "../utils/utils";
import { MDItem } from "../steps";
import './vertical-stepper.css'

export default function VerticalLinearStepper() {
  const mp = markdownMap();
  const itemRefs: Record<string, any> = {};
  const [activeStep, setActiveStep] = React.useState(0);
  const [currentSteps, setCurrentSteps] = React.useState(markdownList.map(i => ({...i })));
  const [previousStep, setPreviousStep] = React.useState([0]);



  const handleNext = (next: string) => {
    const index = currentSteps.findIndex((i: MDItem) => i.id === mp[next].id);

    setPreviousStep([...previousStep, activeStep])
    setActiveStep(index);
    itemRefs[next].scrollIntoView({behavior: 'smooth', block: "center"});
    
  };

  const handleBack = (next: string) => {
    const prevStep = previousStep.pop();
    setPreviousStep(previousStep)
    if(prevStep !== undefined) {
      setActiveStep(prevStep);
      itemRefs[next].scrollIntoView({behavior: 'smooth', block: "center"});
    }
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {currentSteps.map((step, index) => (
          <Step ref={(el) => itemRefs[step.id] = el} key={step.id}>
            <StepLabel>{step.title}</StepLabel>
            <StepContent>
              <Typography>
                <ReactMarkdown>{step.markdown}</ReactMarkdown>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div className="buttons-align">
                  <Button disabled={index === 0} onClick={() => handleBack(step.id)} sx={{ mt: 1, alignSelf: "flex-start" }}>
                    Back
                  </Button>
                  <Box sx={{alignSelf: "flex-end", mr: "auto"}}>
                  {step.next.filter(m => m !== "").map((id) => (
                      <Button key={id} variant="contained" onClick={() => handleNext(id)} sx={{ mt: 1, ml: 1 }}>
                        {mp[id]?.title}
                      </Button>
                    ))}
                    </Box>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
