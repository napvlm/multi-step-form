import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DiscreteSlider from './material-components/Slider'

export class Step2 extends Component {
  
  render() {
    return (
      <div>
        <div className="fade">
          <Typography variant="h5" style={{padding: '10px 20px'}}>
            How many square meters does your property have?
          </Typography>
          <DiscreteSlider />
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