import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { motion } from "framer-motion";
import Typography from '@material-ui/core/Typography';

import CustomTimeLine from '../common/CustomTimeLine';
import TabPanel from '../common/TabPanel';
import CustomizedTimeline from '../Tabs/about/CustomizedTimeline';

const About = ({ value, classes }) => {
    return (
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <motion.div initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                    <Paper className={classes.paper}>
                      I'm a graduate of Bachelor of Science in Information Technology, 
                      a kind of person that is always curious about the latest technology and innovation. 
                    </Paper>
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Paper className={classes.paper}>
                    <Typography style={{ textAlign: "left" }} variant="h5"> Work Experience </Typography>
                    <CustomizedTimeline/>
                  </Paper>
                </Grid>
              </Grid>
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
    )
}

export default About;

