import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import profile from '../assets/profile.jpg';

const ProfileCover = () => {

    return (
        <div style={{  
            paddingLeft: "10vw",
            paddingRight: "10vw"
            }}>
            <Card style={{height: '35vw', backgroundColor: "rgb(66,66,66, 0)"}}>
            </Card>
              
            <Typography component="div" style={{ color: "white" }}>
              <Avatar alt="Mark Anthony Estopace" src={profile} style={{ margin:"auto",marginTop: -140 , width: 150, height: 150 }} />
              <Box textAlign="center" fontWeight="fontWeightBold" style={{ fontSize: 35 }}>
                Mark Anthony Estopace
              </Box>
              <Box textAlign="center" style={{ fontSize: 15 }}>
                <Chip
                  size="small"
                  icon={<FaceIcon />}
                  label="Fullstack Developer"
                  clickable
                  color="primary"
                  onDelete={() => {}}
                  deleteIcon={<DoneIcon />}
                />
              </Box>
            </Typography>
            <hr style={{ 
              backgroundColor: "#3E3F41", 
              height: 1, 
              border: 0, 
              marginBottom: 0, 
              marginLeft: 25,
              marginRight: 25  
            }} />
        </div>
    );
}

export default ProfileCover;