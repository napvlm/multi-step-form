import React, { Component } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Confirm from './Confirm';
import Success from './Success';

export class MainForm extends Component {
  state = {
    step: 1,
    propertyType: 'House',
    areaSpace: '',
    designStyle: 'Luxury',
  }

  componentDidUpdate() {
    
  }

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step+1
    });
    
    this.props.setCompleted(this.props.complete + 25);
  }

  // Go back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step-1
    });

    this.props.setCompleted(this.props.complete - 25);
  }

  // Handle inputs change
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  }

  render() {
    const { step } = this.state;
    const { propertyType, areaSpace, designStyle } = this.state;
    const values = { propertyType, areaSpace, designStyle };
    const { complete, setCompleted } = this.props;

    switch(step) {
      case 1: 
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            setCompleted={setCompleted}
            complete={complete}
          />
        )
      case 2:
        return (
          <Step2
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
            setCompleted={setCompleted}
            complete={complete}
            />
        )
      case 3:
        return (
          <Step3
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
            setCompleted={setCompleted}
            complete={complete}
            />
        )
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
            setCompleted={setCompleted}
            complete={complete}
            />
        )
      case 5: 
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
