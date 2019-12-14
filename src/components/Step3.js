import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class Step3 extends Component {
  
  render() {
    return (
      <div>
        <Button variant="outlined" style={{margin: '20px 10px'}} onClick={this.props.previousStep}>
          Go back
        </Button>
        <Button variant="contained" color="primary" style={{margin: '20px 10px'}} onClick={this.props.nextStep}>
          Next
        </Button>
      </div>
    )
  }
}

export default Step3
