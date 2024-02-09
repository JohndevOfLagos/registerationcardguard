import React from 'react';
import "./StepperProgressBar.scss"
import { Stepper } from '@mui/material';
import { Step } from '@mui/material';
import { StepLabel } from '@mui/material';
import { Button } from '@mui/material';
import { Form1 } from 'pages/Forms/Form1';
import { Form2 } from 'pages/Forms/Form2';

export default function StepperProgressBar() {
  const [activeStep, setActiveStep] = React.useState(0); // Adjusted initial active step

  const nextStep = () => {
    if (activeStep < 2)
      setActiveStep((currentStep) => currentStep + 1)
  }

  const previousStep = () => {
    if (activeStep !== 0)
      setActiveStep((currentStep) => currentStep - 1)
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
           <Form1/>
          </div>
        );
      case 1:
        return (
          <div>
            <Form2/>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Step 3 Content - Typography or Form Registration</p>
            {/* Your form elements for Step 3 */}
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  return (
    <div>
      <Stepper orientation="horizontal" activeStep={activeStep}>
        <Step>
          <StepLabel>
          SECTION I - SPONSOR/EMPLOYEE INFORMATION 
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
          SECTION II - SPONSOR/EMPLOYEE DECLARATION AND
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
          SECTION III - FAMILY/DEERS INFORMATION FOR VISITING (Face Verification make be request if necessary) 
          </StepLabel>
        </Step>
      </Stepper>

      {getStepContent(activeStep)}

      <Button variant="outlined" color="primary" onClick={() => nextStep()}>
        Next Step
      </Button>
      <Button variant="outlined" color="primary" onClick={() => previousStep()}>
        Previous Step
      </Button>
    </div>
  )
}