import React, { Component } from 'react';
import DiscreteSlider from './material-components/Slider'

import { Typography, Button } from '@material-ui/core';

export class Step2 extends Component {
  
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <div className="fade">
          <Typography variant="h5">
            How many square meters does your property have?
          </Typography>
          <DiscreteSlider values={values} handleChange={handleChange} style={{marginTop: '20px', marginBottom: '20px'}} />
        </div>
        <div style={{margin: '10px 20px'}}>
          <Button variant="outlined" onClick={this.props.previousStep}>
            Go back
          </Button>
          <Button variant="contained" color="primary" style={{marginLeft: '20px'}} onClick={this.props.nextStep}>
            Next
          </Button>
        </div>
      </div>
    )
  }
}

export default Step2