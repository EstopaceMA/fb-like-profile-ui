import {useState, ChangeEvent} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { motion } from "framer-motion";

import Footer from './common/Footer';
import CustomTimeLine from './common/CustomTimeLine';
import TabPanel from './common/TabPanel';


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

const CustomTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
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
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper className={classes.paper}>
                  I'm a graduate of Bachelor of Science in Information Technology, 
                  a kind of person that is always curious about the latest technology and innovation. 
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              {/* <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}> */}
                <Paper style={{ backgroundColor: "rgb(0,0,0,0)", padding: 0 }} className={classes.paper}>
                  <CustomTimeLine/>
                </Paper>
              {/* </motion.div> */}
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
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper className={classes.paper}>
                  BLOGS
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper className={classes.paper}>
                  BLOGS
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Paper className={classes.paper}>
                  BLOGS
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
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

export default CustomTabs;