import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileCover from '../src/components/ProfileCover';
import CustomTabs from '../src/components/CustomTabs';
import CustomParticles from '../src/components/CustomParticles';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";

import { AppState } from '../src/store';
import { SystemsState } from '../src/store/system/types';


interface AppProps {
  system: SystemsState;
}

class App extends Component<AppProps> {
  render() {
    const isDarkMode = this.props.system.isDarkMode;
    const palletType = isDarkMode ? "dark" : "light";
    const mainPrimaryColor = isDarkMode ? orange[500] : lightBlue[500];
    const mainSecondaryColor = isDarkMode ? deepOrange[900] : deepPurple[500];
    const darkTheme = createMuiTheme({
      palette: {
        type: palletType,
        primary: {
          main: mainPrimaryColor
        },
        secondary: {
          main: mainSecondaryColor
        }
      },
      typography: {
        fontFamily: [
          'Dosis',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      }
    });
    return (
      <>
        <ThemeProvider theme={darkTheme}>
          <CustomParticles/>
          <ProfileCover/>
          <CustomTabs />
          <Fab aria-label="Message" size="medium" style={{ position: "fixed", bottom: 20, right: 20 }}>
            <EditIcon />
          </Fab>
        </ThemeProvider>
      </>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.systems
});

export default connect(mapStateToProps)(App);
