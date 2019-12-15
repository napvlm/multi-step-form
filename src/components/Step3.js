import React, { Component } from 'react';
import DesignStyleCards from './material-components/DesignStyleCards'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class Step3 extends Component {
  
  render() {
    return (
      <div>
        <div className="fade">
          <Typography variant="h5" style={{padding: '10px 20px'}}>
            Which style of design do you prefer?
          </Typography>
          <DesignStyleCards />
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

export default Step3
