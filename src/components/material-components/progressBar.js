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

export default function LinearDeterminate() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    setCompleted(oldCompleted => {
      if (oldCompleted === 100) {
        return 0;
      }
      const diff = 25;
      return Math.min(oldCompleted + diff, 100);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="body2" style={{padding: '10px 20px'}}>
        Completed: {completed}%
      </Typography>
      <LinearProgress variant="determinate" value={completed} />
    </div>
  );
}