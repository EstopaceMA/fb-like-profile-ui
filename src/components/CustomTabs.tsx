import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { motion } from "framer-motion";

import Footer from './common/Footer';

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
            <Box style={{ marginTop: 12 }}>
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
    position: "sticky",
    top: "0"
  },

  tabsContainer: {
    flexGrow: 1,
    backgroundColor: "#242526",
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
      <Paper square>
        <Tabs
          indicatorColor="primary" value={value} 
          onChange={handleChange} 
          aria-label="tabs" 
          // variant="scrollable"
          // scrollButtons="auto"
        >
          <Tab label="<About />" {...a11yProps(0)} />
          <Tab label="<Projects />" {...a11yProps(1)} />
          <Tab label="<Blogs />" {...a11yProps(2)} />
          <Tab label="<Contact />" {...a11yProps(3)} />
        </Tabs>
      </Paper>
    </div>
    <div className={classes.tabsContainer}>
      <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper  className={classes.paper}>
                  I'm a graduate of Bachelor of Science in Information Technology, 
                  I'm a kind of person that is always curious about the latest technology and innovation. 
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper className={classes.paper}>
                  PROJECTS
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper className={classes.paper}>
                  BLOGS
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper className={classes.paper}>
                  CONTACT
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
      </TabPanel>
      <Footer></Footer>
    </div>
    </>
  );
}