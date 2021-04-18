import {useState, ChangeEvent} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Footer from './common/Footer';
import About from '../components/Tabs/About';
import Projects from '../components/Tabs/Projects';
import Blogs from './Tabs/Blogs';
import Contact from './Tabs/Contact';


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
      <Paper>
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
      <About value={value} classes={classes} />
      <Projects value={value} classes={classes} />
      <Blogs value={value} classes={classes} />
      <Contact value={value} classes={classes} />
      <Footer></Footer>
    </div>
    </>
  );
}

export default CustomTabs;