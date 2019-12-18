import React, { Component } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Success from './Success';

export class MainForm extends Component {
  state = {
    step: 1,
    propertyType: '',
    areaSpace: '',
    designStyle: '',
    estBudget: '',
    timeStart: ''
  }

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step+1
    });
  }

  // Go back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step-1
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { propertyType, areaSpace, designStyle, estBudget, timeStart } = this.state;
    const values = { propertyType, areaSpace, designStyle, estBudget, timeStart };

    switch(step) {
      case 1: 
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <Step2
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
      case 3:
        return (
          <Step3
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
      case 4:
          return (
            <Success
            values={values}
            />
          )
      default:
    }
  }
}

export default MainForm
