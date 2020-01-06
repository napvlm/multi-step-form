import React, { Component } from 'react';
import { Typography, Button, Grid, Radio, FormControlLabel, FormControl, RadioGroup } from '@material-ui/core';

export class Step1 extends Component {
  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="fade"> 
        <Typography variant="h5">
          Choose the type of property:
        </Typography>
        <FormControl component="fieldset" style={{marginTop: '20px', marginBottom: '20px'}}>
          <RadioGroup aria-label="position" name="position" value={values.propertyType}  onChange={handleChange('propertyType')} row>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControlLabel
                  value="House"
                  control={<Radio color="primary"/>}
                  label="House"
                  labelPlacement="end"
                />
                <br/>
                <FormControlLabel
                  value="Office"
                  control={<Radio color="primary"/>}
                  label="Office"
                  labelPlacement="end"
                />
                <br/>
                <FormControlLabel
                  value="Restaurant"
                  control={<Radio color="primary"/>}
                  label="Restaurant"
                  labelPlacement="end"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="Appartament"
                  control={<Radio color="primary"/>}
                  label="Appartament"
                  labelPlacement="end"
                />
                <br/>
                <FormControlLabel
                  value="Store"
                  control={<Radio color="primary"/>}
                  label="Store"
                  labelPlacement="end"
                />
                <br/>
                <FormControlLabel
                  value="Sometheing elese..."
                  control={<Radio color="primary"/>}
                  label="Sometheing elese..."
                  labelPlacement="end"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        <br/>
        <Button variant="contained" color="primary" onClick={this.props.nextStep}>
          Next
        </Button>
      </div>
    )
  }
}

export default Step1
