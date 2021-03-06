import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Radio, FormControlLabel, FormControl, RadioGroup, Typography } from '@material-ui/core';

export default function DesignStyleCards({ values, handleChange }) {

  return (
    <FormControl component="fieldset" style={{marginTop: '20px', marginBottom: '20px'}} className='radioCards'>
      <RadioGroup aria-label="position" name="position" value={values.designStyle} onChange={handleChange('designStyle')} row>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className='scrollContainer'>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Luxury Interior"
                  height="140"
                  image="https://images.unsplash.com/photo-1507452786732-f2dc0a2e7b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80"
                  title="Luxury Interior"
                />
                <CardContent>
                <FormControlLabel
                  value="Luxury"
                  control={<Radio color="primary"/>}
                />
                <Typography variant="body1">
                  Luxury
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Minimalistic Interior"
                  height="140"
                  image="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                  title="Minimalistic Interior"
                />
                <CardContent>
                  <FormControlLabel
                    value="Minimal"
                    control={<Radio color="primary" />}
                  />
                  <Typography variant="body1">
                    Minimal
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Scandinavian Interior"
                  height="140"
                  image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  title="Scandinavian Interior"
                />
                <CardContent>
                <FormControlLabel
                  value="Scandinavian"
                  control={<Radio color="primary" />}
                />
                <Typography variant="body1">
                  Scandinavian
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  )
}
