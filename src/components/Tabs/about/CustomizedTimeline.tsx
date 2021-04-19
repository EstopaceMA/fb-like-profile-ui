import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Typography from '@material-ui/core/Typography';
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '12px 16px',
    textAlign: 'center'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CustomizedTimeline = () => {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            November 2018 - March 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Intern Back-End Developer
              </Typography>
              <Typography>Gleent Inc.</Typography>
            </Paper>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May 2019 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Associate Software Engineer
              </Typography>
              <Typography>OPSolutions PH</Typography>
            </Paper>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default CustomizedTimeline;