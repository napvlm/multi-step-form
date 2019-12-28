import React from 'react';
import { makeStyles, LinearProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function LinearDeterminate({complete}) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography variant="body2" style={{padding: '10px 20px'}}>
        Completed by {complete}%
      </Typography>
      <LinearProgress variant="determinate" value={complete} />
    </div>
  );
}