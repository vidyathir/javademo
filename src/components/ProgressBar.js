import React, { useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  :before {
    content: '';
    position: absolute;
    //background: green;
    // height: 4px;
    // width: 100%;
    // //top: 70%;
    // transform: translateY(-50%);
    // left: 0;
  }
  :after {
    content: '';
    position: absolute;
    // background: yellow;
    // height: 4px;
    // width: ${({ width }) => width};
    // top: 80%;
    // transition: 0.4s ease;
    // transform: translateY(-50%);
    // left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  border: 3px solid ${({ step }) =>
      step === 'completed' ? 'black' : 'white'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 15px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StepLabel = styled.span`
  font-size: 15px;
  color: black;
  @media (max-width: 600px) {
    font-size: 16px;
    
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: orange;
  color: black;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: blue;
    color: black;
    cursor: not-allowed;
  }
`

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: white;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`
const Highlighter =styled.div`
display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
  position: relative;
    content: '';
    position: absolute;
    background: green;
    height: 4px;
    width: 100%;
    top: 20%;
    transform: translateY(-50%);
    left: 0;
  
`

const steps = [
  {
    label: 'Address',
    step: 1,
  },
  {
    label: 'Shipping',
    step: 2,
  },
  {
    label: 'Payment',
    step: 3,
  },
  {
    label: 'Summary',
    step: 4,

  },
  {
    label: 'Summary',
    step: 5,
    
  },
  {
    label: 'Summary',
    step: 6,
    
  },
  
]

const ProgressBar = ({onPageNumberClick}) => {
  const [activeStep, setActiveStep] = useState(steps)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
            {activeStep === step ? (
            <Highlighter/>) : ( null
                // <StepCount>{step}</StepCount>
              )}
          </StepWrapper>
        ))}
      </StepContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={()=>onPageNumberClick(prevStep)} disabled={activeStep === 1}>
          Previous
        </ButtonStyle>
        <ButtonStyle onClick={()=>onPageNumberClick(nextStep)} disabled={activeStep === totalSteps}>
          Next
        </ButtonStyle>
      </ButtonsContainer>
    </MainContainer>
  )
}

export default ProgressBar