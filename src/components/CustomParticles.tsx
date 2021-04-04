import React, {Component} from 'react';
import Particles from "react-tsparticles";

class CustomParticles extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          fps_limit: 60,
          background: {
            color: "#242526"
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
                type: "rectangle"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 5,
                speed: 3,
                color: ["#ff0000", "#ff7700"]
              }
            }
          },
          particles: {
            color: {
              value: ["#ffffff", "#1254ef"]
            },
            links: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              collisions: true,
              direction: "none",
              enable: true,
              out_mode: "bounce",
              random: false,
              speed: 2,
              straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
              random: true,
              value: 0.5
            },
            shape: {
              type: "square"
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 2,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 2
              },
              value: 4
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}

export default CustomParticles;