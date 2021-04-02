import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import profileCover from '../src/profile-cover.jpg';
import profile from '../src/profile.jpg';

class App extends Component {
  render() {
    return (
      <>
          <div style={{ 
            backgroundColor: "#242526", 
            paddingLeft: "10vw",
            paddingRight: "10vw"
            }}>
            <Card>
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

          <div style={{ 
            backgroundColor: "#242526", 
            height: "50px",
            position: "sticky",
            top: "0", 
            paddingLeft: "11vw",
            paddingRight: "11vw",
            paddingTop: 10,
          }}>
            <Button>Posts</Button>
            <Button>About</Button>
          </div>

          <div style={{ backgroundColor: "#18191A", height: "100vw" }}>

          </div>

          <Fab aria-label="Message" size="medium" style={{ position: "fixed", bottom: 20, right: 20 }}>
            <EditIcon />
          </Fab>
      </>
    )
  }
}

export default App;
