import React, { Component } from 'react';

import ProfileCover from '../src/components/ProfileCover';
import CustomTabs from '../src/components/CustomTabs';
import CustomParticles from '../src/components/CustomParticles';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

class App extends Component {
  render() {
    return (
      <>
          <CustomParticles/>
          <ProfileCover/>
          <CustomTabs />
          <Fab aria-label="Message" size="medium" style={{ position: "fixed", bottom: 20, right: 20 }}>
            <EditIcon />
          </Fab>
      </>
    )
  }
}

export default App;
