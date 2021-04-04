import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';


import profileCover from '../assets/profile-cover.jpg';
import profile from '../assets/profile.jpg';


function ProfileCover() {

    return (
        <div style={{  
            paddingLeft: "10vw",
            paddingRight: "10vw"
            }}>
            <Card style={{ visibility: "hidden" }}>
              <CardActionArea>
                <CardMedia 
                  component="img"
                  alt="Profile Cover"
                  height="500"
                  image={profileCover}
                  title="Profile Cover"
                />
              </CardActionArea>
            </Card>
              
            <Typography component="div" style={{ color: "white" }}>
              <Avatar alt="Mark Anthony Estopace" src={profile} style={{ margin:"auto",marginTop: -140 , width: 150, height: 150 }} />
              <Box textAlign="center" fontWeight="fontWeightBold" style={{ fontSize: 35 }}>
                Mark Anthony Estopace
              </Box>
              <Box textAlign="center" style={{ fontSize: 15 }}>
                Software Engineer in the making
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