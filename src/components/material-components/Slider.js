import React from 'react';
import { Slider, Input } from '@material-ui/core/';

function valuetext(value) {
  return `${value}m²`;
}

export default function DiscreteSlider({ values, handleChange }) {
  const [value, setValue] = React.useState(25);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div onChange={handleChange('areaSpace')} style={{marginTop: '20px', marginBottom: '20px'}}>
      <Input
        value={value}
        margin="dense"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 25,
          max: 400,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      />
      <Slider
        style={{marginTop: '20px'}}
        getAriaValueText={valuetext}
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        step={1}
        min={25}
        max={400}
      />
    </div>
  );
}