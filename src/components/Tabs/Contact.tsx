import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { motion } from "framer-motion";

import TabPanel from '../common/TabPanel';

const Contact = ({ value, classes }) => {
    return (
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
    )
}

export default Contact;

