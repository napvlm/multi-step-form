import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormGroup, FormControlLabel, Checkbox, Grid} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({ handleChange } ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl} onChange={handleChange('propertyType')}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="house" />}
                label="House"
              />
              <FormControlLabel
                control={<Checkbox value="office" />}
                label="Office"
              />
              <FormControlLabel
                control={
                  <Checkbox value="restaurant" />
                }
                label="Restaurant"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="appartament" />}
                label="Appartament"
              />
              <FormControlLabel
                control={<Checkbox value="store" />}
                label="Store"
              />
              <FormControlLabel
                control={
                  <Checkbox value="another" />
                }
                label="Sometheing elese..."
              />
            </FormGroup>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}