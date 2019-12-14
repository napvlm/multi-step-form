import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import CheckboxesGroup from './material-components/CheckboxesGroup';
import Button from '@material-ui/core/Button';

export class Step1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;

    return (
      <div>
        <Typography variant="h4" style={{padding: '10px 20px'}}>
          Choose the type of property:
        </Typography>
        <CheckboxesGroup/>

        <div>
          <Button variant="contained" color="primary" style={{margin: '20px 10px'}} onClick={this.continue}>
            Next
          </Button>
        </div>
      </div>
    )
  }
}

export default Step1
