import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
            <Box style={{ paddingTop: 15 }}>
                {children}
            </Box>
        </Container>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#242526",
    position: "sticky",
    top: "0"
  },

  tabsContainer: {
    flexGrow: 1,
    backgroundColor: "#18191A",
    paddingLeft: "12vw",
    paddingRight: "12vw",
    height: "100vw",
    color: "#fff"
  },

  paperRoot: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <div className={classes.root}>
      <Paper square style={{ background: "#242526" }}>
        <Tabs
          indicatorColor="primary" 
          textColor="inherit" value={value} 
          onChange={handleChange} 
          aria-label="tabs" 
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Resume" {...a11yProps(1)} />
          <Tab label="Portfolio" {...a11yProps(2)} />
          <Tab label="Blogs" {...a11yProps(3)} />
          <Tab label="Contact" {...a11yProps(4)} />
        </Tabs>
      </Paper>
    </div>
    <div className={classes.tabsContainer}>
      <TabPanel value={value} index={0}>
        <div className={classes.paperRoot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Resume
      </TabPanel>
      <TabPanel value={value} index={2}>
        Portfolio
      </TabPanel>
      <TabPanel value={value} index={3}>
        Blogs
      </TabPanel>
      <TabPanel value={value} index={4}>
        Contact
      </TabPanel>
    </div>
    </>
  );
}